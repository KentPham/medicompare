const { model: Drug } = require('./drugModel');

exports.listDrugs = async () => {
    try {
        const drugs = await Drug.find({});
        return drugs;
    } catch (e) {
        throw e;
    }
}

exports.findDrug = async (drugName) => {
    try {
        const drugs = await Drug.find({ name: drugName });
        return drugs;
    } catch (e) {
        throw e;
    }
}

exports.getDrugbyId = async (drugId) => {
    try {
        const drug = await Drug.findById(drugId);
        return drug;
    } catch (e) {
        throw e;
    }
}

exports.createDrug = async (drugData) => {
    try {
        const drug = new Drug(drugData);
        return await drug.save();
    } catch (e) {
        throw e;
    }
}