const CategoriesService = require('../services/categories.service');

const createCategories = async (req, res) => {  
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    const category = await CategoriesService.createCategories(name);
    res.status(201).json(category);
};

module.exports = {
    createCategories,
};