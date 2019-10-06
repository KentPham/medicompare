const express = require('express');
const router = express.Router();
const userService = require('./userServices');
const tokenService = require('../../utils/tokenService');
const requireAdmin = require('../../middleware/adminAuth');
const requireLogin = require('../../middleware/auth');

router.route('/signup')
    .post(async (req, res, next) => {
        try {
            const user = await userService.createUser(req.body.data);
            res.status(200).json({
                data: [user]
            });
        } catch (e) {
            next(e);
        }
    });

router.route('/login')
    .post(async (req, res, next) => {
        try {
            const user = await userService.isUser(req.body.data);
            if (user) {
                const token = await tokenService.issueToken(user);
                res.status(200).json({
                    data: {
                        token
                    }
                })
            } else {
                next();
            }
        } catch (e) {
            next(e);
        }
    });

router.route('/addDrug/:id')
    .post(async (req, res, next) => {
        try {
            const user = await userService.addDrug(req.params.id, req.body.data);
            res.status(200).json({
                data: {
                    data: user
                }
            })

        } catch (e) {
            next(e);
        }
    })

exports.router = router;