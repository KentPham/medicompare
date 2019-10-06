const tokenService = require('../utils/tokenService');

module.exports = async (req, res, next) => {
    const headers = req.body.headers;
    if (!headers) {
        next(new Error('Invalid Request'));
    } else {
        const authHeader = req.body.headers['Authorization'];

        if (!authHeader) {
            next(new Error('invalid request'));
        } else {
            try {
                const [prefix, token] = authHeader.split(' ');
                const decoded = await tokenService.verifyToken(token);
                if (decoded) {
                    req.token = decoded;
                    next();
                } else {
                    next(new HTTP401Error());
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
}