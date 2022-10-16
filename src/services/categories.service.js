const { Category } = require('../models');

const createCategories = async (name) => {
    const category = await Category.create({ name });
    return category;
};

const getCategories = () => Category.findAll();

const getCategoriesById = async (id) => {
    const category = await Category.findByPk(id);
    if (!category) return null;
    return category.dataValues.id;
};

module.exports = {
    createCategories,
    getCategories,
    getCategoriesById,
};