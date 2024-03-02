const Job = require("../services/Job.service")

async function create(req, res) {
    try {
        const newJob = await Job.create(req.body);
        res
            .status(200)
            .json({ message: "Job posted successfully", job: newJob.jobTitle });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function get(req, res) {
    try {
        const jobs = await Job.get();
        res
            .status(200)
            .json(({ message: "Jobs fetched successfully", jobs }))
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

async function getJob(req, res) {
    try {
        const job = await Job.getJob(req.params.id);
        res
            .status(200)
            .json({ message: "Job fetched successfully", job })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

module.exports = { create, get, getJob }