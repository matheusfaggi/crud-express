const Country = {};
const Countries = [];
const uuid = require("uuid");

/**
 * @param { import('express').Request } req
 * @param { import('express').Response } res
 */
Country.store = (req, res) => {
  const { name, initials } = req.body;

  if (!name || !initials) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }
  Countries.push({ id: uuid.v4(), name, initials });
  res.status(200).json({ message: "Country inserted successfull" });
  console.log(Countries);
};

/**
 * @param { import('express').Request } req
 * @param { import('express').Response } res
 */
Country.show = (req, res) => {
  const { id } = req.body;

  if (!id) res.json(Countries);
  else res.json(Countries.filter(item => item.id === id));
};

module.exports = Country;
