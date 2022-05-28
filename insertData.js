const { pool } = require("./db");

async function insertData() {
  const [name, color] = process.argv.slice(2);
  try {
    const res = await pool.query(
      "INSERT INTO Empleado values(1,'sirve','sirve',500,'sirve)",
      [name, color]
    );
    console.log(`Added a shark with the name ${name}`);
  } catch (error) {
    console.error(error)
  }
}

insertData()
