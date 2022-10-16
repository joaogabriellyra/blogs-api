const emailValidation = (email) => String(email)
      .toLowerCase()
      .includes('@gmail.com');  

const validateCreateUsersFields = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    const checkingEmail = emailValidation(email);
    if (!checkingEmail) {
    return res.status(400).json({
        message: '"email" must be a valid email',
      }); 
}
    if (displayName.length < 8) {
 return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
      }); 
    }
    if (password.length < 6) {
      return res.status(400).json({
        message: '"password" length must be at least 6 characters long',
      }); 
    }   
    next();
};

module.exports = validateCreateUsersFields;