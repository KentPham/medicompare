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
  const collection = db.collection('interactions');

  collection.insert(
    [
      {
        "id1": "TestA",
        "id2": "TestB",
        "interactionType": "Drug",
        "interaction": "Interaction A"
      },
      {
        "id1": "TestB",
        "id2": "TestC",
        "interactionType": "Drug",
        "interaction": "Interaction B"
      },
      {
        "id1": "TestB",
        "id2": "TestD",
        "interactionType": "Drug",
        "interaction": "Interaction C"
      },
      {
        "id1": "TestC",
        "id2": "TestD",
        "interactionType": "Drug",
        "interaction": "Interaction D"
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