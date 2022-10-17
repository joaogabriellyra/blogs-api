require('dotenv/config');

const validatePostUpdateFields = (req, res, next) => {
    const { title, content } = req.body;
    console.log(req.locals);
    if (!title || !content) {
        return res.status(400).json({
            message: 'Some required fields are missing',
          });
    }
    if (process.env.LOGGUED !== 'lewishamilton@gmail.com') {
        return res.status(401).json({
            message: 'Unauthorized user',
          });
    }
    next();
};

module.exports = validatePostUpdateFields;