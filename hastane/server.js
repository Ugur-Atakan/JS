const express = require('express');
var cors = require('cors');
const app = express()
const port = 3001;
const mysql = require('mysql');

app.use(cors());

const muayene_hasta="SELECT * FROM Hastalar inner join Muayeneler on  Muayeneler.hastaId=Hastalar.id;";
const hasta_hastane="SELECT * FROM Hastalar inner join Hastaneler on  Hastaneler.id=Hastalar.hastaneId;";
const recete_muayene="SELECT * FROM Receteler inner join Muayeneler on  Muayeneler.id=Receteler.muayeneid;";
const hastalar="SELECT * FROM Hastalar;";
const hastaneler="SELECT * FROM Hastaneler;";
const muayeneler="SELECT * FROM Muayeneler;";
const receteler="SELECT * FROM Receteler;";



const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '205630',
  database : 'hastane'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

app.get('/hastalarvehastaneler', (req, res) => {
    connection.query(hasta_hastane, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
  
  app.get('/hastalarmuayeneler', (req, res) => {
    connection.query(muayene_hasta, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

  app.get('/sqlsorgu/:q', (req, res) => {
    connection.query(req.params.q, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

  app.post('/query', (req, res) => {
    const { sorgu } = req.body;
    connection.query(sorgu, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

  app.get('/recetevemuayene', (req, res) => {
    connection.query(recete_muayene, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

  app.get('/hastalar', (req, res) => {
    connection.query(hastalar, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

  app.get('/hastaneler', (req, res) => {
    connection.query(hastaneler, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
  app.get('/muayeneler', (req, res) => {
    connection.query(muayeneler, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });
  app.get('/receteler', (req, res) => {
    connection.query(receteler, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    });
  });

app.listen(port, () => {
  console.log(`${port} portu aktif!`)
})