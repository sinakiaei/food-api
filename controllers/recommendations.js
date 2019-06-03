const db = require("./config");

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const get = (req, res) => {
  const gender = req.query.gender;
  const ages = req.query.ages;
  const query = `select a.fgid, a.foodgroup, array_agg(a.fgcat_id) as fgcat_id, b.servings from food_groups as a, servings_per_day as b where a.fgid = b.fgid and b.gender = '${gender}' and b.ages = '${ages}' group by a.fgid, a.foodgroup, b.servings;`;
  db.any(query)
    .then(items => {
      const query = [];
      for (item of items) {
        let servings = item.servings.match(/[0-9]+/g);
        servings =
          servings.length > 1
            ? getRandomInt(
                Math.min(parseInt(servings)),
                Math.max(parseInt(servings))
              )
            : servings[0];
        query.push(
          `(select a.fgid, b.foodgroup, a.srvg_sz, a.food from foods as a, food_groups as b where a.fgid = '${
            item.fgid
          }' and a.fgcat_id in (${item.fgcat_id.join(
            ","
          )}) and a.fgid = b.fgid order by random() limit ${servings})`
        );
      }
      return query.join("union all");
    })
    .then(query => {
      return db.any(query);
    })
    .then(results => {
      const query = `select fgid, array_agg(directional_statement) as directional_statement from fg_directional_statements group by fgid;`;
      return db.any(query).then(directions => {
        return { servings: results, directions: directions };
      });
    })
    .then(results => {
      res.status(200).json(results);
    })
    .catch(err => {
      res.status(500).send(err.message);
    });
};

module.exports = {
  get
};
