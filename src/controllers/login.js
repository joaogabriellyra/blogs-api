const UserService = require('../services/user.service');

module.exports = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserService.getUser(email, password);
    if (user.error) return res.status(400).json({ message: user.message });
    res.status(200).json({ token: user });
};