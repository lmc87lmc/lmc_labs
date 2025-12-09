require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173'
}));
app.use(express.json());

// iCloud SMTP transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.me.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.ICLOUD_EMAIL,
    pass: process.env.ICLOUD_APP_PASSWORD
  }
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server ready to send emails');
  }
});

// Store subscribers (in production, use a database)
const subscribers = [];

// Notify Me endpoint
app.post('/api/notify', async (req, res) => {
  const { email, productId, productName } = req.body;

  if (!email || !productId || !productName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Store subscriber
    subscribers.push({ email, productId, productName, date: new Date() });

    // Send confirmation to customer
    await transporter.sendMail({
      from: `"LMC Labs" <${process.env.ICLOUD_EMAIL}>`,
      to: email,
      subject: `You're on the list! - ${productName}`,
      html: getCustomerEmailTemplate(productName)
    });

    // Send notification to you
    await transporter.sendMail({
      from: `"LMC Labs Website" <${process.env.ICLOUD_EMAIL}>`,
      to: process.env.ICLOUD_EMAIL,
      subject: `New Product Interest: ${productName}`,
      html: getAdminEmailTemplate(email, productName, productId)
    });

    res.json({ success: true, message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send notification' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', subscribers: subscribers.length });
});

app.listen(PORT, () => {
  console.log(`LMC Labs backend running on port ${PORT}`);
});

// Email Templates
function getCustomerEmailTemplate(productName) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <tr>
      <td>
        <!-- Header -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 16px 16px 0 0; padding: 40px 30px;">
          <tr>
            <td align="center">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">LMC LABS</h1>
              <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 14px;">Premium Tech Accessories</p>
            </td>
          </tr>
        </table>
        
        <!-- Content -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 40px 30px;">
          <tr>
            <td>
              <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 24px;">You're on the list! 🎉</h2>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Thanks for your interest in the <strong style="color: #1e293b;">${productName}</strong>.
              </p>
              
              <p style="color: #475569; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                We'll send you an email as soon as it's available for purchase. You'll be among the first to know!
              </p>
              
              <!-- Product Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
                <tr>
                  <td>
                    <p style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Product</p>
                    <p style="color: #1e293b; font-size: 18px; font-weight: 600; margin: 0;">${productName}</p>
                  </td>
                </tr>
              </table>
              
              <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0;">
                In the meantime, check out our current products on our 
                <a href="https://www.ebay.com.au/str/lachlansstore" style="color: #6366f1; text-decoration: none; font-weight: 500;">eBay Store</a>.
              </p>
            </td>
          </tr>
        </table>
        
        <!-- Footer -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; border-radius: 0 0 16px 16px; padding: 24px 30px;">
          <tr>
            <td align="center">
              <p style="color: #64748b; font-size: 12px; margin: 0 0 8px 0;">
                LMC Labs · Sydney, Australia
              </p>
              <p style="color: #94a3b8; font-size: 11px; margin: 0;">
                ABN: 36 181 184 048
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function getAdminEmailTemplate(customerEmail, productName, productId) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; padding: 30px;">
    <tr>
      <td>
        <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px;">📬 New Product Interest</h2>
        
        <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #f8fafc; border-radius: 8px;">
          <tr>
            <td style="color: #64748b; font-size: 14px; border-bottom: 1px solid #e2e8f0;">Email</td>
            <td style="color: #1e293b; font-size: 14px; font-weight: 500; border-bottom: 1px solid #e2e8f0;">${customerEmail}</td>
          </tr>
          <tr>
            <td style="color: #64748b; font-size: 14px; border-bottom: 1px solid #e2e8f0;">Product</td>
            <td style="color: #1e293b; font-size: 14px; font-weight: 500; border-bottom: 1px solid #e2e8f0;">${productName}</td>
          </tr>
          <tr>
            <td style="color: #64748b; font-size: 14px;">Product ID</td>
            <td style="color: #1e293b; font-size: 14px; font-weight: 500;">${productId}</td>
          </tr>
        </table>
        
        <p style="color: #94a3b8; font-size: 12px; margin: 20px 0 0 0;">
          Received: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
