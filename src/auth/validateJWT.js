const jwt = require('jsonwebtoken');

require('dotenv/config');

const createToken = async (payload) => {
    const config = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };

    return jwt.sign(payload, process.env.JWT_SECRET, config);
};

const validateToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
};

module.exports = { createToken, validateToken };