const CategoriesService = require('../services/categories.service');

const createCategories = async (req, res) => {  
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    const category = await CategoriesService.createCategories(name);
    res.status(201).json(category);
};

const getCategories = async (req, res) => {
    const categories = await CategoriesService.getCategories();
    res.status(200).json(categories);
};

module.exports = {
    createCategories,
    getCategories,
};