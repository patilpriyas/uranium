const batchModel = require("../models/batchModel");

const createBatches = async function (req, res) {
  const branch = req.body;
  let branchCreate = await batchModel.create(branch);
  res.send({ data: branchCreate });
};

module.exports.createBatches = createBatches;