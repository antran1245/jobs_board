const Jobs = require('../models/job.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World!"
    })
}

module.exports.createJob = (req, res) => {
    
}