const { login, createUser, getUsers, getUserById } = require('./controllers/user.controller');
const { createCategories } = require('./controllers/categories.controller');

module.exports = {
    login,
    createUser,
    getUsers,
    getUserById,
    createCategories,
};