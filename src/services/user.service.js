const { User } = require('../models');
const { createToken } = require('../auth/validateJWT');

const getUser = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) return { error: true, message: 'Invalid fields' };
    return createToken({ id: user.id, email: user.email });
};

module.exports = { getUser };