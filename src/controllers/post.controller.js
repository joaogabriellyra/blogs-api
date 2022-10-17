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

const getPosts = async (_req, res) => {
    const posts = await PostService.getPosts();
    res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await PostService.getPostById(id);
    if (!post) {
        return res.status(404).json({
            message: 'Post does not exist',
          });
    }
    res.status(200).json(post);
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const post = await PostService.updatePost(id, title, content);
    res.status(200).json(post);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const error = await PostService.deletePost(id);
    if (error) {
        return res.status(404).json({
            message: 'Post does not exist',
          });
    }
    return res.sendStatus(204);
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
};