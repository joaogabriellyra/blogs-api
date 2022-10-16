const jwt = require('jsonwebtoken');

require('dotenv/config');

console.log(process.env.JWT_SECRET);

const createToken = async (payload) => {
    const config = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };

    return jwt.sign(payload, process.env.JWT_SECRET, config);
};

module.exports = { createToken };