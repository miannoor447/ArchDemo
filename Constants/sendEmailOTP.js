require('dotenv').config();
const nodemailer = require('nodemailer');
const securityDB = require('../databases/securityDB');
const { executeQuery } = require('../databases/queryExecution');

async function handleSendEmail(userEmail, OTP, res) {
    let connection;

    try {
        // Create the email transport
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: 'Scholar Space <scholarspace112@gmail.com>',
            to: `${userEmail}`,
            subject: 'OTP Verification',
            html: `
                <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                background-color: #f4f4f4;
                                color: #333;
                            }
                            .container {
                                padding: 20px;
                                border: 1px solid #ccc;
                                border-radius: 5px;
                                background-color: #fff;
                                max-width: 500px;
                                margin: 0 auto;
                            }
                            .otp {
                                font-size: 24px;
                                color: #007bff;
                                font-weight: bold;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <p>Dear User,</p>
                            <p>Your OTP for verification is:</p>
                            <p class="otp">${OTP}</p>
                            <p>Please use this OTP to complete the Login process.</p>
                            <p>Thank you!</p>
                        </div>
                    </body>
                </html>
            `
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);

        // Get the database connection
        connection = await securityDB();

        // Insert email log into the database
        const logQuery = `
            INSERT INTO email_log (recipient_email, subject, content, entry_status, created_at, updated_at)
            VALUES (?, ?, ?, 'Active', NOW(), NOW())
        `;

        const logValues = [userEmail, mailOptions.subject, OTP];
        await executeQuery(res, logQuery, logValues, connection);

    } catch (error) {
        console.error('Error occurred while sending email or logging:', error);
    } 
}

module.exports = handleSendEmail;
