const express = require('express');
const router = express.Router();
const interactionServices = require('./interactionServices');
const requireAdmin = require('../../middleware/adminAuth');
const requireLogin = require('../../middleware/auth');

router.route('/findDrugInteractions')
    .get(async (req, res, next) => {
        try {
            const interaction = await interactionServices.listInteractionsByDrug(req.query.id1);
            res.status(200).json({
                data: interaction
            });
        } catch (e) {
            next(e);
        }
    })

router.route('/findInteraction')
    .get(async (req, res, next) => {
        try {
            const interaction = await interactionServices.findInteraction(req.query.id1, req.query.id2);
            res.status(200).json({
                data: interaction
            });
        } catch (e) {
            next(e);
        }
    })


router.route('/create')
    .post(requireLogin, requireAdmin, async (req, res, next) => {
        try {
            const interaction = await interactionServices.createInteraction(req.body.data);
            res.status(201).json ({
                data: [interaction]
            });
        } catch (e) {
            next(e);
        }
    })

router.route('/delete/:id')
    .delete(requireAdmin, requireAdmin, async (req, res, next) => {
        try {
            const interaction = await interactionServices.deleteInteraction(req.params.id);
            if (interaction) {
                res.status(204).send('Record deleted');
            } else {
                res.status(404).send('Record not found');
            }
        } catch (e) {
            next(e);
        }
    })

exports.router = router;