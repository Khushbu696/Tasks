const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: { status: 429, error: 'Too many requests. Try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
