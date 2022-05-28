const { Pool } = require('pg');

const config = {
    host: 'db-postgresql-ams3-12882-do-user-11373447-0.b.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'AVNS_epkzl0bfqf-3-4Z',
    database: 'defaultdb',
    port: 25060,
};

const pool = new Pool(config);

const getBooks = async () => {
    try {
        const res = await pool.query('select * from Empleado');
        // console.log(res)
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};



editUser();
