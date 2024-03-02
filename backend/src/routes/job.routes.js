const router = require("express").Router()
const { create, get } = require("../controllers/job.controller")

router.post("/create", create)
router.get("/get", get)

module.exports = router;