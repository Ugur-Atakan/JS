const express = require('express');
var cors = require('cors');
const app = express()
const port = 3001;
const con = require('./Connection'); // Veritabanı bağlantısı için gerekli olan dosya
const token="token1234";
app.use(cors());
app.use(express.json());
/*
Aşağıda bazı örnek sorgular var. Bunları kullanabilirsiniz.
Dilerseniz kendi sorgularınızı da yazabilirsiniz.
*/
const hastalar = "SELECT * FROM Hastalar";
const hastaneler = "SELECT * FROM Hastaneler";
const muayeneler = "SELECT * FROM Muayeneler";
const receteler = "SELECT * FROM Receteler";
const ilaclar = "SELECT * FROM ilaclar";
const sorgu="SELECT * FROM Hastalar INNER JOIN Muayeneler on Hastalar.id=Muayeneler.HastaID INNER JOIN Hastaneler on Muayeneler.HastaneID=Hastaneler.HastaneID WHERE Hastalar.id=1";

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
app.get('/tcnosorgula/:q', (req, res) => {
  con.query({
    sql: `SELECT * FROM Hastalar INNER JOIN Muayeneler on Hastalar.id=Muayeneler.HastaID INNER JOIN Hastaneler on Muayeneler.HastaneID=Hastaneler.HastaneID WHERE Hastalar.TCNo=${req.params.q}`,
    
  }, (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});
app.get('/ozelsorgu/:id', (req, res) => {
  con.query(`SELECT HastaneAdi,MuayenePol,MuayeneTipi,ReceteKod,ReceteID FROM Muayeneler inner join Hastaneler on Muayeneler.HastaneID=Hastaneler.HastaneID inner join Hastalar on Muayeneler.HastaID=Hastalar.id inner join Receteler on Receteler.MuayeneID=Muayeneler.MuayeneID where Hastalar.id=${req.params.id}`, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

//Hasta ekleme sistemi tokensiz çalışmıyor.
app.post('/hastaekle', (req, res) => {
  const hastaTc = req.body.hastaTc;
  const hastaAdi = req.body.hastaAdi;
  const hastaSoyadi = req.body.hastaSoyadi;
  const dogumYeri = req.body.dogumYeri;
  const dogumYili = req.body.dogumYili;
  const token = req.body.token;
  if (req.body) {
    if (req.body.token === token) {
      const sqldata = req.body.sqlquery;
      con.query(`INSERT INTO Hastalar (TCNo,Adi,Soyadi,DY,DT) VALUES (${hastaTc},'${hastaAdi}','${hastaSoyadi}','${dogumYeri}','${dogumYili}')`, (error, results, fields) => {
        if (error) throw error;
        res.send("Hasta Eklendi");
      });
    }             
    else {
      res.status(401).send("Token Hatası");
    }
  }
  else {
    res.status(401).send("Token yok");
  }
}
);

app.post('/hastanakil',(req,res)=>{
  const hastaneID=req.body.hastaneID;
  const muayeneID=req.body.muayeneID;

  con.query(`UPDATE Muayeneler SET HastaneID=${hastaneID} WHERE MuayeneID=${muayeneID}`,(error,results,fields)=> {
    if (error) throw error;
    res.send("Hasta Nakil İşlemi Başarılı");
  });

});

app.get('/hastaneler', (req, res) => {
  con.query(hastaneler, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });

});

app.get('/muayeneler', async (req, res) => {
  con.query(muayeneler, (error, results, fields) => {
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

app.get('/receteler', (req, res) => {
  con.query(receteler, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

app.post('/query', (req, res) => {
  const token = req.body.token;
  const sqldata = req.body.sqlquery;
  
  if (req.body) {
    if (req.body.token === token) {
      con.query(sqldata, (error, results, fields) => {
        if (error) throw error;
        res.send(results);
      });
    }
    else {
      res.status(401).send("Token Hatası");
    }
  }
  else {
    res.status(401).send("Token yok");
  }
}
);


app.listen(port, () => {
  console.log(`${port} portu aktif!`)
});