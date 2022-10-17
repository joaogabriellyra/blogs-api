const { login, createUser, getUsers, getUserById } = require('./controllers/user.controller');
const { createCategories, getCategories } = require('./controllers/categories.controller');
const { createPost, getPosts, getPostById } = require('./controllers/post.controller');

module.exports = {
    login,
    createUser,
    getUsers,
    getUserById,
    createCategories,
    getCategories,
    createPost,
    getPosts,
    getPostById,
};