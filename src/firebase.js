import * as firebase from 'firebase';

const config =  {
    apiKey: "AIzaSyA36nK7lM2OpJ-a-LXehAyo5EjTjXZOfIo",
    authDomain: "goalcoach-cfef0.firebaseapp.com",
    databaseURL: "https://goalcoach-cfef0.firebaseio.com",
    projectId: "goalcoach-cfef0",
    storageBucket: "goalcoach-cfef0.appspot.com",
    messagingSenderId: "672705216887"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals')
  export const completeGoalRef = firebase.database().ref('completeGoals')