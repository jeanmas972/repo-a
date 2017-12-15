import * as firebase from 'firebase';


var config = {
    apiKey: 'AIzaSyAoK8C81LlVVlmqRauoXtsZ2SPmzSsP1co',
    authDomain: 'my-awesome-project-9e92d.firebaseapp.com',
    databaseUrl: 'https://my-awesome-project-9e92d.firebaseio.com/',
    storageBucket: '',
    messagingSenderId: '',
  };
  //firebase.initializeApp(config);

  export const firebaseRef = firebase.initializeApp(config);