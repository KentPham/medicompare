const { model: User } = require('../routes/users/userModel');

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.token.user.id);
        if (user) {
            if (user.access !== 'admin') {
                next();
                res.status(401).send("Must be an admin to create posts");
            } else {
                next();
            }
        } else {
            next();
        }
    } catch (e) {
        console.error(e);
    }
}