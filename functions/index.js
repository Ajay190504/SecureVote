const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');

admin.initializeApp();

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'YOUR_EMAIL@gmail.com',
        pass: 'YOUR_APP_PASSWORD'
    }
});

exports.sendVoterEmail = functions.https.onCall(async (data, context) => {
    try {
        const { name, voterId, email, ethereumAddress } = data;

        // Email content
        const mailOptions = {
            from: 'YOUR_EMAIL@gmail.com',
            to: email,
            subject: 'Welcome to SecureVote - Your Voter Registration Details',
            html: `
                <h2>Welcome to SecureVote!</h2>
                <p>Dear ${name},</p>
                <p>Thank you for registering as a voter. Here are your registration details:</p>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Voter ID:</strong> ${voterId}</li>
                    <li><strong>Ethereum Address:</strong> ${ethereumAddress}</li>
                </ul>
                <p>Please keep this information secure and do not share it with anyone.</p>
                <p>Best regards,<br>SecureVote Team</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);
        
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new functions.https.HttpsError('internal', 'Error sending email');
    }
}); 