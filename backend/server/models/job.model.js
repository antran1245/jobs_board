const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
        min: 0 
    },
    remote: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

const Jobs = mongoose.model('Jobs', JobSchema);

module.exports = Jobs;

