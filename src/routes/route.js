const express = require('express');
const router = express.Router();

const batchController = require("../controllers/batchController")
const developerController = require("../controllers/developerController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/batches", batchController.createBatches)
router.post("/developers", developerController.createDeveloper)
router.get("/scholarship", developerController.scholarshipDevelopers)
router.get("/developer-last", developerController.developer_last)


module.exports = router;
