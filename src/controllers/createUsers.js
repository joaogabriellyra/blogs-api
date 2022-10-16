const UserService = require('../services/user.service');

module.exports = async (req, res) => {
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