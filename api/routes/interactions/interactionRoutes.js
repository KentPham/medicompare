const express = require('express');
const router = express.Router();
const interactionServices = require('./interactionServices');

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
    .post(async (req, res, next) => {
        try {
            const interaction = await interactionServices.createInteraction(req.body.data);
            res.status(200).json ({
                data: [interaction]
            });
        } catch (e) {
            next(e);
        }
    })

exports.router = router;