const { model: User } = require('../routes/users/userModel');

module.exports = async (req, res, next) => {
    try {
        const user = await User.findById(req.token.user.id);
        if (user) {
            if (user.access !== 'admin') {
                next();
                res.status(401).send("Must be an admin to edit the database");
            } else {
                next();
            }
        } else {
            next();
            res.status(401).send("You must be logged in as an admin to edit the database")
        }
    } catch (e) {
        console.error(e);
    }
}