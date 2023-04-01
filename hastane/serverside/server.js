const express = require('express');
var cors = require('cors');
const app = express()
const port = 3001;
const con = require('./Connection'); // Veritabanı bağlantısı için gerekli olan dosya

app.use(cors());
app.use(express.json());
/*
Aşağıda bazı örnek sorgular var. Bunları kullanabilirsiniz.
Dilerseniz kendi sorgularınızı da yazabilirsiniz.
*/
const hastalar="SELECT * FROM Hastalar";
const hastaneler="SELECT * FROM Hastaneler";
const muayeneler="SELECT * FROM Muayeneler";
const receteler="SELECT * FROM Receteler";

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});


  app.get('/ilaclar/:q', (req, res) => {
    con.query(`SELECT * FROM ilaclar Where ReceteID=${req.params.q}`, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

  app.get('/ozelsorgu/:id', (req, res) => {
    con.query(`SELECT HastaneAdi,MuayenePol,MuayeneTipi,ReceteKod,ReceteID FROM Muayeneler inner join Hastaneler on Muayeneler.HastaneID=Hastaneler.HastaneID inner join Hastalar on Muayeneler.HastaID=Hastalar.id inner join Receteler on Receteler.MuayeneID=Muayeneler.MuayeneID where Hastalar.id=${req.params.id}`, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });


  app.get('/hastalar', (req, res) => {
    con.query(hastalar, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

  app.get('/hastaneler', (req, res) => {
    con.query(hastaneler, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });

  });
  app.get('/muayeneler', (req, res) => {
    con.query(muayeneler, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
  app.get('/receteler', (req, res) => {
    con.query(receteler, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

  // DİKKAT BU SQL AÇIĞINA NEDEN OLAN BİR KODDUR. SUNUCUZDA KULLANMAYIN
app.post('/query', (req, res) => {
  const sqldata=req.body.sqlquery;
   con.query(sqldata, (error, results, fields) => {
     if (error) throw error;
     res.send(results);
   });
});

// DİKKAT BU SQL AÇIĞINA NEDEN OLAN BİR KODDUR. SUNUCUZDA KULLANMAYIN
app.get('/sqlsorgu/:q', (req, res) => {
  con.query(req.params.q, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});


app.listen(port, () => {
  console.log(`${port} portu aktif!`)
});