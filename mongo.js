const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017';

MongoClient.connect(URL, (err, client) => {
  if (err) throw err;

  const db = client.db('cards');
  let sorgu = {};
  db.collection('cards').find(sorgu).sort({ adi: -1 }).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    client.close();
  });

});