'use strict';

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbname = 'medicompare';

const faker = require('faker');

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    console.error(err);
    throw err;
  }

  const db = client.db(dbname);
  const collection = db.collection('drugs');

  collection.insert(
    [
      {
        "name": "TestA",
        "activeCompound": "CompoundA",
      },
      {
        "name": "TestB",
        "activeCompound": "CompoundB",
      },
      {
        "name": "TestC",
        "activeCompound": "CompoundC",
      },
      {
        "name": "TestD",
        "activeCompound": "CompoundD",
      },
    ],
    (err, result) => {
      collection.find({}).toArray((err, items) => {
        if (err) {
          throw err;
        }
        console.log('items', items);
        client.close();
      });
    }
  )
});