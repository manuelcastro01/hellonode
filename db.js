const { Pool } = require("pg");

const pool = new Pool({
  user: "doadmin",
  database: "defaultdb",
  password: "AVNS_epkzl0bfqf-3-4Z",
  port: 25060,
  host: "db-postgresql-ams3-12882-do-user-11373447-0.b.db.ondigitalocean.com",
});

module.exports = { pool };
