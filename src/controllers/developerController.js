const batchModel = require("../models/batchModel");
const developerModel = require("../models/developerModel");

const createDeveloper = async function (req, res) {
  let developer = req.body;
  let developerCreated = await developerModel.create(developer);
  res.send({ data: developerCreated });
};

const scholarshipDevelopers = async function (req, res) {
  const eligible = await developerModel.find({
    $and: [{ gender: "female" }, { percentage: { $gte: 70 } }],
  });
  res.send({ data: eligible });
};

const developer_last = async function (req, res) {
  const pro = await batchModel
    .find({ program: req.query.program })
    .select({ _id: 1 });
  const arrayOfProId = [];
  for (let i = 0; i < pro.length; i++) {
    const proId = pro[i]._id;
    arrayOfProId.push(proId);
  }

  const developer = await developerModel
    .find({
      $and: [
        { batch: arrayOfProId },
        { percentage: { $gte: req.query.percentage } },
      ],
    })
    .populate("batch");
  res.send({ data: developer });
};

module.exports.createDeveloper = createDeveloper;
module.exports.scholarshipDevelopers = scholarshipDevelopers;
module.exports.developer_last = developer_last;