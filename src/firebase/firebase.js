import * as firebase from "firebase";
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Expense 1",
//   note: "",
//   amount: 23,
//   createdAt: 90803209235
// });

// database.ref("expenses").push({
//   description: "Expense 2",
//   note: "",
//   amount: 432,
//   createdAt: 840785370252
// });

// database.ref("expenses").push({
//   description: "Expense 3",
//   note: "",
//   amount: 78593,
//   createdAt: 895739857834567
// });

// database.ref("notes/-L_RUfD9wGXmzI5G6iFC").remove();

// database.ref("notes").push({
//   title: "To learn",
//   body: "Learn some French"
// });

// const firebaseNotes = {
//   notes: {
//     sth: {
//       title: "First note",
//       body: "This is my note"
//     },
//     sth2: {
//       title: "Another note",
//       body: "This is my note"
//     }
//   }
// };

// const notes = [
//   {
//     id: "12",
//     title: "First note",
//     body: "This is my note"
//   },
//   {
//     id: "123",
//     title: "Another note",
//     body: "This is my note"
//   }
// ];

// database.ref("notes").set(notes);
// database.ref("notes/12");

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7500);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Andrew",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: {
//       city: "Philadelphia",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(error => {
//     console.log("This failed", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref().update({
//   job: "Manager",
//   "location/city": "Boston"

//   //   location: {
//   //     city: "Boston"
//   //   }
// });

// database.ref().update({
//   name: "Mike",
//   age: 29,
//   job: "Software developer",
//   isSingle: null
// });

// database.ref("isSingle").set(null);

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Data removed").catch(e => {
//       console.log("Data not removed", e);
//     });
//   });

// database.ref().set("This is my data");
// database.ref("age").set(27);
// database.ref("location/city").set("New York");

// database
//   .ref("attributes")
//   .set({
//     height: 170,
//     weight: 50
//   })
//   .then(() => {
//     console.log("Yeey, you got that!");
//   })
//   .catch(e => {
//     console.log("Ups, sth went wrong", e);
//   });

// console.log("I made a request to change the data");
