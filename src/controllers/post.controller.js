const PostService = require('../services/post.service');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    if (title === undefined || content === undefined || categoryIds.length === 0) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const category = await PostService.findCategory(categoryIds);

    if (category.some((ctgId) => !ctgId || ctgId === undefined)) {
        return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const newPost = await PostService.createPost({ title, content, categoryIds, userId: 1 });
    return res.status(201).json(newPost);
};

module.exports = {
    createPost,
};