import * as firebase from 'firebase';


var config = {
    apiKey: 'AIzaSyAoK8C81LlVVlmqRauoXtsZ2SPmzSsP1co',
    authDomain: 'my-awesome-project-9e92d.firebaseapp.com',
    databaseURL: 'https://my-awesome-project-9e92d.firebaseio.com',
    projectId: "my-awesome-project-9e92d",
    storageBucket: "my-awesome-project-9e92d.appspot.com",
    messagingSenderId: "520755710621"

  };
  //firebase.initializeApp(config);

  export const firebaseRef = firebase.initializeApp(config);