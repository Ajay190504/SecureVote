const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname)));
app.use('/build', express.static(path.join(__dirname, 'build')));

// Email sending endpoint using EmailJS
app.post('/api/send-email', async (req, res) => {
    try {
        console.log('Received email request:', req.body); // Debug log
        const { name, voterId, email, ethereumAddress } = req.body;

        const emailData = {
            service_id: 'service_yna8zfo', // Your Service ID
            template_id: 'template_7fxa1d7', // Your Template ID
            user_id: '0Ub1cVMAeVS_4rZhB', // Your Public Key
            template_params: {
                to_name: name,
                to_email: email,
                voter_id: voterId,
                ethereum_address: ethereumAddress
            }
        };

        console.log('Sending email with data:', emailData); // Debug log

        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData);
        
        console.log('EmailJS response:', response.data); // Debug log

        if (response.status === 200) {
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        } else {
            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        console.error('Error details:', error.response?.data); // Debug log
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_dashboard.html'));
});

app.get('/voter', (req, res) => {
    res.sendFile(path.join(__dirname, 'voter_dashboard.html'));
});

app.get('/admin-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin_login.html'));
});

app.get('/voter-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'voter_login.html'));
});

// Catch-all route for client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server with error handling
const server = app.listen(port, () => {
    console.log('\n✓ Server is running on:');
    console.log(`➜ Local:   http://localhost:${port}`);
}).on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please try a different port or kill the process using that port.`);
    } else {
        console.error('Error starting server:', error);
    }
    process.exit(1);
}); 