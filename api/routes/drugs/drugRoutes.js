const express = require('express');
const router = express.Router();
const drugServices = require('./drugServices');
const requireAdmin = require('../../middleware/adminAuth');

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

router.route('/delete/:id')
    .delete(requireAdmin, async (req, res, next) => {
        try {
            const drug = await drugServices.deleteDrug(req.params.id);
            if (drug) {
                res.status(204).send('Record deleted');
            } else {
                res.status(404).send('Record not found');
            }
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
    .post(requireAdmin, async (req, res, next) => {
        try {
            const drug = await drugServices.createDrug(req.body.data);
            res.status(201).json ({
                data: [drug]
            });
        } catch (e) {
            next(e);
        }
    });

exports.router = router;