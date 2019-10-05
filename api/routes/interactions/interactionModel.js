const mongoose = require('mongoose');
const { Schema } = mongoose;

const interactionSchema = new Schema ({
    id1: String,
    id2: String,
    interactionType: String,
    interaction: String
});

exports.model = mongoose.model('Interaction', interactionSchema);