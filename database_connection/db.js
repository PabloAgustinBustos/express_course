const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "13112012pab",
    host: "localhost",
    port: 5432,
    database: "psql_course"
});

module.exports = pool;