const { model: Interaction } = require('./interactionModel');

exports.listInteractionsByDrug = async (drugId) => {
    try {
        const interaction = await Interaction.find({ $or: [ {id1: drugId}, {id2: drugId} ] });
        return interaction;
    } catch (e) {
        throw e;
    }
}

exports.findInteraction = async (drugId1, drugId2) => {
    try {
        const interaction = await Interaction.find({ id1: drugId1, id2: drugId2 });
        return interaction;
    } catch (e) {
        throw e;
    }
}

exports.createInteraction = async (drugData) => {
    try {
        const interaction = new Interaction(drugData);
        return await interaction.save();
    } catch (e) {
        throw e;
    }
}