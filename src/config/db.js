const {Pool} = require("pg")

module.exports = new Pool ({
  user: "cassiabernardo",
  password: "",
  host: "localhost",
  port: 5432,
  database: "launchstoredb"
}) 