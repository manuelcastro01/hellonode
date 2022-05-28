const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node siu!\n '
  res.end(msg);
});

const { pool } = require("./db");

async function retrieveData() {
  try {
    const res = await pool.query("SELECT * FROM shark");
    console.log(res.rows);
  } catch (error) {
    console.error(error);
  }
}

retrieveData()

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
