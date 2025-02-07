import firebaseAdmin from 'firebase-admin';

const serviceAccount = require('./path/to/your/serviceAccountKey.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com',
});

const db = firebaseAdmin.firestore();

export { db };