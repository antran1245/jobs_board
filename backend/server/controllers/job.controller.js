const Jobs = require('../models/job.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World!"
    })
}

module.exports.createJob = (req, res) => {
    const { title, company, salary, remote } = req.body;
    Jobs.create({
        title,
        company,
        salary,
        remote
    })
    .then(job => res.json(job))
    .catch(err => res.json(err))
}

module.exports.findAllJobs = (req, res) => {
    Jobs.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.json(err))
}

module.exports.updateJob = (req, res) => {
    Jobs.findOneAndUpdate({_id: req.params._id})
    .then(job => res.json(job))
    .catch(err => res.json(err))
}

module.exports.deleteJob = (req, res) => {
    Jobs.deleteOne({_id: req.params._id})
    .then(deleted => res.json(deleted))
    .catch(err => res.json(err))
}