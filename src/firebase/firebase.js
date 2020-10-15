import * as firebase from 'firebase';
// Temp config
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASURMENT_ID
};
// Initialize Firebase
firebase.initializeApp(config);

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider ,database as default}



// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//   const expenses = []
//   snapshot.forEach((child) => {
//    expenses.push({
//       id: child.key,
//       ...child.val()
//    })
//   })
//   console.log(expenses);
// })



// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((child) => {
//    expenses.push({
//       id: child.key,
//       ...child.val()
//    })
//   })
//   console.log(expenses);
// })


// database.ref('expenses')
// .push({
//   desc: 'Shoes for princess Zahra',
//   amount: 252,
//   not: '',
// })

// database.ref('expenses')
// .push({
//   desc: 'Princess Zahra ownership club',
//   amount: 345,
//   not: '',
// })

// database.ref('expenses')
// .push({
//   desc: 'Pray time to Princess Zahra',
//   amount: 564,
//   not: '',
// })

// database.ref('notes').push({
//   title: 'Course Topic',
//   body: 'How to be a good boy for princess'
// })



// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })

// setTimeout(() => {
//   database.ref('name').set('Mahdi')
// },3500)

// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val()
//   console.log(val);
// }).catch((e) => {
//   console.log('e',e);
// })


// database.ref().set({
//   name: 'Mahdi',

//   isSingle: false,
//   user: {
//     Owner: 'Princess Zahra',
//     Occupation: 'Using her slaves'
//   },
//   position: 'Owned by Princess Zahra'
// }).then(() => {
//   console.log('saved successfully');
// }).catch((error) => {
//   console.log('this failed', error);
// });




// database.ref().update({
//   name: 'Mahdi',
//   position: "Princess Zahra's Slaves",
//   isSingle: null,
//   tasks: 'worshiping princess zahra',
//   'user/Occupation': 'Using her slaves to make her life easy and fun'
// })

// database.ref('user/Occupation').set('having fun and using slaves')

// database.ref('attributes').set({
//   height: 163,
//   weight: 74
// })

// database.ref("isSingle")
// .remove()
// .then(() => {
//   console.log('data was removed');
// }).catch((error) => {
//   console.log('data was not removed')
// });