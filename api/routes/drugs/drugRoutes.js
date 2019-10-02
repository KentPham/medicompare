const express = require('express');
const router = express.Router();
const drugServices = require('./drugServices');

router.route('/')
    .get(async (req, res, next) => {
        try {
            const drugs = await drugServices.listDrugs();
            res.status(200).json({
                data: drugs
            });
        } catch (e) {
            next(e);
        }
    });


router.route('/findDrug')
    .get(async (req, res, next) => {
        try {
            const drugs = await drugServices.findDrug(req.query.name);
            res.status(200).json({
                data: drugs
            });
        } catch (e) {
            next(e);
        }
    });

router.route('/:id')
    .get(async (req, res, next) => {
        try {
            const drug = await drugServices.getDrugbyId(req.params.id);
            res.status(200).json({
                data: drug
            });
        } catch (e) {
            next(e);
        }
    });

router.route('/create')
    .post(async (req, res, next) => {
        try {
            const drug = await drugServices.createDrug(req.body.data);
            res.status(200).json ({
                data: [drug]
            });
        } catch (e) {
            next(e);
        }
    });

exports.router = router;