const router = require("express").Router()
const { create, get, getJob } = require("../controllers/job.controller")

router.post("/create", create)
router.get("/get", get)
router.get("/get/:id", getJob)

module.exports = router;