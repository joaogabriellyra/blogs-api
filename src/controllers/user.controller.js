const UserService = require('../services/user.service');
require('dotenv/config');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserService.getUser(email, password);
    if (user.error) return res.status(400).json({ message: user.message });
    process.env.LOGGUED = email;
    res.status(200).json({ token: user });
};

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        const token = await UserService.createUser(displayName, email, password, image);
    
        return res.status(201).json({ token });
    } catch (error) {
        return res.status(409).json({
            message: 'User already registered',
          });
    }
};

const getUsers = async (_req, res) => {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist',
          });
    }
    return res.status(200).json(user);
};

module.exports = {
    login,
    createUser,
    getUsers,
    getUserById,
};