import firebaseAdmin from 'firebase-admin';

const serviceAccount = require('../etest-7e948-firebase-adminsdk-fbsvc-92b3c92dc8.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://etest-7e948-default-rtdb.firebaseio.com',
});

const db = firebaseAdmin.firestore();

export { db };