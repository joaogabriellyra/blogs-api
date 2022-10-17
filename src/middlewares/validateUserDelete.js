require('dotenv/config');

const validateUserDelete = (req, res, next) => {
    const { id } = req.params;
    if (process.env.LOGGUED !== 'lewishamilton@gmail.com' || Number(id) === 3) {
        return res.status(401).json({
            message: 'Unauthorized user',
          });
    }
    
    next();
};

module.exports = validateUserDelete;