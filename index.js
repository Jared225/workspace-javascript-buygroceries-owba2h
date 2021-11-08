// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyC97jVCrGFzT9ITY3EQRY8AoQWl3YEXueM',
  authDomain: 'csci225-fba7e.firebaseapp.com',
  projectId: 'csci225-fba7e',
  storageBucket: 'csci225-fba7e.appspot.com',
  messagingSenderId: '1090943276775',
  appId: '1:1090943276775:web:fd8f938f62c14414143442',
  measurementId: 'G-CC57Y5HC9K',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content

  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('mylist').add({
      item: value,
      name: "mom"//?
    });
  });
});
