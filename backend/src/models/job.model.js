const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
    {
        jobTitle: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        workType: {
            type: String,
            required: true,
        },
        payType: {
            type: String,
            required: true,
        },
        currency: {
            type: String,
            required: true
        },
        payFrom: {
            type: String,
            required: true
        },
        payTo: {
            type: String,
            required: true
        },
        payTo: {
            type: String,
            required: true
        },
        jobDescription: {
            type: String,
            required: true
        },
        jobSummary: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Job = model("Job", jobSchema);

module.exports = Job;










