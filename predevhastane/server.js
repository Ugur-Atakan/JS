const express = require('express');
var cors = require('cors');
const app = express()
const port = 3001;
const con = require('./Connection');

app.use(cors());
app.use(express.json());

const muayene_hasta="SELECT * FROM Hastalar inner join Muayeneler on  Muayeneler.hastaId=Hastalar.id;";
const hasta_hastane="SELECT * FROM Hastalar inner join Hastaneler on  Hastaneler.id=Hastalar.hastaneId;";
const recete_muayene="SELECT * FROM Receteler inner join Muayeneler on  Muayeneler.id=Receteler.muayeneid;";
const hastalar="SELECT * FROM Hastalar";
const hastaneler="SELECT * FROM Hastaneler";
const muayeneler="SELECT * FROM Muayeneler";
const receteler="SELECT * FROM Receteler";
const sorgu2="SELECT * FROM Receteler inner join Muayeneler on  Muayeneler.muayeneid=Receteler.muayeneid inner join Hastalar on Hastalar.id=Muayeneler.hastaid inner join Hastaneler on Hastaneler.hastaneid=Hastalar.hastaneid;";
const karma="SELECT hastanename, type, description, code FROM Receteler inner join Muayeneler on  Muayeneler.muayeneid=Receteler.muayeneid inner join Hastalar on Hastalar.id=Muayeneler.hastaid inner join Hastaneler on Hastaneler.hastaneid=Hastalar.hastaneid where Hastalar.id=1;";


con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});


// DİKKAT BU SQL AÇIĞINA NEDEN OLAN BİR KODDURÇ. KULLANMAYIN
app.post('/query', (req, res) => {
  const sqldata=req.body.sqlquery;
  // bodyde JSON olarak gidecek {"sqlquery":"SELECT * FROM Hastalar"}
   con.query(sqldata, (error, results, fields) => {
     if (error) throw error;
     res.send(results);
   });
});

// DİKKAT BU SQL AÇIĞINA NEDEN OLAN BİR KODDURÇ. KULLANMAYIN
app.get('/sqlsorgu/:q', (req, res) => {
  con.query(req.params.q, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/hastalarvehastaneler', (req, res) => {
    con.query(hasta_hastane, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
  
  app.get('/hastalarmuayeneler', (req, res) => {
    con.query(muayene_hasta, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });


  app.get('/recetevemuayene', (req, res) => {
    con.query(recete_muayene, (error, results, fields) => {
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

  app.get('/ozelsorgu/:id', (req, res) => {
    con.query(`SELECT hastanename, type, description, code FROM Receteler inner join Muayeneler on  Muayeneler.muayeneid=Receteler.muayeneid inner join Hastalar on Hastalar.id=Muayeneler.hastaid inner join Hastaneler on Hastaneler.hastaneid=Hastalar.hastaneid where Hastalar.id=${req.params.id}`, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

app.listen(port, () => {
  console.log(`${port} portu aktif!`)
});