const { Category } = require('../models');

const createCategories = async (name) => {
    const category = await Category.create({ name });
    return category;
};

module.exports = {
    createCategories,
};