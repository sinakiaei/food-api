const db = require("./config");
const get = (req, res) => {
  const query =
    "select array_agg(distinct gender) as genders, array_agg(distinct ages) as ages from servings_per_day;";
  db.any(query)
    .then(results => {
      res.status(200).json(results[0]);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
};
module.exports = {
  get
};
