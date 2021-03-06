import * as firebase from 'firebase'; //* as takes all the named exports and imports it to this file
import moment from 'moment'

const config = {
    apiKey:process.env.FIREBASE_API_KEY ,
    authDomain:process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL:'https://expensifty-test.firebaseio.com',
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId:process.env.FIREBASE_PROJECT_ID,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.FIREBASE_SENDER_ID
    // appId: "1:622385349508:web:2edc6d237cb3a1562d13d1",
    // measurementId: "G-JR0FRCTWKX"
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();




  
export {firebase, googleAuthProvider,database as default};
