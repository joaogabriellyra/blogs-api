const { login, createUser, getUsers, getUserById, 
    deleteUser } = require('./controllers/user.controller');
const { createCategories, getCategories } = require('./controllers/categories.controller');
const { createPost, getPosts, getPostById, 
    updatePost, deletePost } = require('./controllers/post.controller');

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
    updatePost,
    deletePost,
    deleteUser,
};