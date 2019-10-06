module.exports = async (req, res, next) => {
    if (req.user.access !== 'admin') {
        res.status(401).send("Must be an editor to create posts");
    } else {
        next();
    }
}