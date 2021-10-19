const admin = require('firebase-admin');

const serviceAccount = require('../website-backend-a17fd-firebase-adminsdk-x11g8-ea7d0ba0d4.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };