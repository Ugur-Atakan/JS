const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');

const muayene_hasta="SELECT * FROM Hastalar inner join Muayeneler on  Muayeneler.hastaId=Hastalar.id;";
const hasta_hastane="SELECT * FROM Hastalar inner join Hastaneler on  Hastaneler.id=Hastalar.hastaneId;";
const recete_muayene="SELECT * FROM Receteler inner join Muayeneler on  Muayeneler.id=Receteler.muayeneid;";


const connection = mysql.createConnection({
  host     : '192.168.1.42',
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

  app.get('/query/:q', (req, res) => {
    connection.query(req.params.q, (error, results, fields) => {
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

app.listen(port, () => {
  console.log(`${port}portu aktif!`)
})