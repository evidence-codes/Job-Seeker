const Job = require("../models/job.model");

class Jobs {
    async create(data) {
        try {
            const {
                jobTitle,
                location,
                workType,
                payType,
                currency,
                payFrom,
                payTo,
                jobDescription,
                jobSummary
            } = data;
            const job = new Job({
                jobTitle,
                location,
                workType,
                payType,
                currency,
                payFrom,
                payTo,
                jobDescription,
                jobSummary
            })
            await job.save();
            return job;
        } catch (err) {
            throw new Error("Failed to post new Job");
        }
    }

    async get() {
        try {
            const jobs = await Job.find();
            return jobs;
        } catch (err) {
            throw new Error("Failed to fetch jobs")
        }
    }
}

module.exports = Jobs;