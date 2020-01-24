const { Group } = require("../models");

// CONTROLLER: functions that are called at /api/groups/

module.exports = {
  findAll: (req, res) => {
    Group.find(req.query)
      .populate("users")
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    Group.create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
