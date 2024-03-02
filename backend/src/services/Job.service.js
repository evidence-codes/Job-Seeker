const Job = require("../classes/Jobs")

class JobService {
    constructor() {
        this.job = new Job();
    }

    create(data) {
        return this.job.create(data);
    }
    get() {
        return this.job.get();
    }
    getJob(data) {
        return this.job.getJob(data);
    }
}

module.exports = new JobService();

