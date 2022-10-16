const { PostCategory, BlogPost, Category } = require('../models');

const findCategory = async (categoryIds) => {
    const categories = await Promise.all(
        categoryIds.map(async (ctgId) => Category.findByPk(ctgId)),
    );
    return categories;
};

const createPost = async ({ title, content, categoryIds, userId }) => {
    const newPost = await BlogPost.create({
        title, content, userId, published: Date.now(), updated: Date.now(),
    });

    await Promise.all(categoryIds.map(async (categoryId) => 
        PostCategory.create({ postId: newPost.id, categoryId })));
    return newPost;
}; 

module.exports = {
    createPost,
    findCategory,
};