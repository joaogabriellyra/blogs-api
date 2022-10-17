const validateCategories = (req, res, next) => {
    const { name } = req.body;
    console.log(name);
    if (name === undefined || name === null) {
        res.status(400).json({
            message: '"name" is required',
          });
    }
    next();
};

module.exports = validateCategories;