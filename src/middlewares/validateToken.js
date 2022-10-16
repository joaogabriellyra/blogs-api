const { validateToken } = require('../auth/validateJWT');

const validatingToken = (req, res, next) => {
    const { authorization } = req.headers;
    console.log(authorization);
    if (!authorization) {
        res.status(401).json({
            message: 'Token not found',
          });
    }
    try {
        const user = validateToken(authorization);
        req.user = user.data;
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Expired or invalid token' });
    }
};

module.exports = validatingToken;