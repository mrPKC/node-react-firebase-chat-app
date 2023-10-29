var firebase = require("firebase/app");
var { getFirestore, collection, getDocs } = require("firebase/firestore/lite");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
