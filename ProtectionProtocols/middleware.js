const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const express = require('express');

// Function to log requests to a file
const logRequestToFile = (req, res, next) => {
    const logFilePath = path.join(__dirname, 'requests.log');
    const logDetails = `
        Time: ${new Date().toISOString()}
        Method: ${req.method}
        URL: ${req.originalUrl}
        Headers: ${JSON.stringify(req.headers)}
        Body: ${JSON.stringify(req.body)}
        Query: ${JSON.stringify(req.query)}
    `;

    fs.appendFile(logFilePath, logDetails + '\n', (err) => {
        if (err) {
            console.error('Failed to write request log:', err);
        }
    });

    next();
};

// Set up rate limiting using express-rate-limit
const sessionRateLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 100, // Limit each session to 100 requests per windowMs
    message: 'Too many requests from this session, please try again later.',
    keyGenerator: (req) => req.sessionID || req.ip, // Use session ID or IP as key
});

// Function to apply middleware to the Express app
const applyMiddleware = (app) => {
    app.use(express.json()); // Parse JSON bodies
    // Ensure session management middleware is set up before this line if you use sessionID
    app.use(sessionRateLimiter); // Apply rate limiter
    app.use(logRequestToFile); // Apply request logging
    app.use(helmet()); // Security headers
    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'"],
                objectSrc: ["'none'"],
                upgradeInsecureRequests: [],
            },
        })
    );
    app.use(helmet.xContentTypeOptions()); // Prevent MIME type sniffing
    app.use(helmet.xFrameOptions({ action: 'deny' })); // Prevent clickjacking
    app.use(helmet.hsts({ maxAge: 31536000 })); // Enforce HTTPS
    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'encryptedrequest', 'encryptedRequest', 'accessToken'],
        credentials: true
      }));

    // Uncomment the following block to enforce HTTPS
    // app.use((req, res, next) => {
    //     if (req.headers['x-forwarded-proto'] !== 'https') {
    //         return res.redirect(`https://${req.headers.host}${req.url}`);
    //     }
    //     next();
    // });
};

module.exports = applyMiddleware;
