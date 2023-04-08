const express = require('express');
var cors = require('cors');
const app = express()
const port = 3002;
const pgcon = require('./pgconnect');
const token="token1234";
app.use(cors());
app.use(express.json());


  pgcon.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  const categories = 'SELECT * FROM public."Categories"';
  const foods = `SELECT * FROM public."Foods"`;

async function query(q) {
    const query = await pgcon.query(q);
    return query.rows;
}


app.get('/categories', async (req, res) => {
  res.send(await query(categories));
});

app.get('/foods/:CategoryId', async (req, res) => {
  const catergoryId = req.params.CategoryId;
  res.send(await query(`SELECT * FROM public."Foods" WHERE "Foods"."foodCategory" =${catergoryId};`));
});


app.listen(port, () => {
  console.log(`${port} portu aktif!`)
});