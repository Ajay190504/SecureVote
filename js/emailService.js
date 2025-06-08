const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ajaywaghmare782@gmail.com',
        pass: 'YOUR_APP_PASSWORD' // You'll need to generate an App Password from your Google Account
    }
});

async function sendVoterEmail(voterData) {
    try {
        const { name, voterId, email, ethereumAddress } = voterData;

        // Email content
        const mailOptions = {
            from: 'ajaywaghmare782@gmail.com',
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
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}

// Export the function
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sendVoterEmail };
} else {
    window.emailService = { sendVoterEmail };
} 