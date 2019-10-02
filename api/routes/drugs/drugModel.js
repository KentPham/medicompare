const mongoose = require('mongoose');
const { Schema } = mongoose;

const drugSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    activeCompound: String
});

exports.model = mongoose.model('Drug', drugSchema);