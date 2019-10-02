const jwt = require('jsonwebtoken');
const { SECRET } = require('../utils/constants');

exports.issueToken = async (userData) => {
    const { _id: id } = userData;
    const payload = {
        user: {
            id
        }
    };
    return jwt.sign(payload, SECRET);
}