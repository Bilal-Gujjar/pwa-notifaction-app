importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyD5yTd9FGofjfFjEbG4usVOKHa3PzlsD5w",
    // authDomain: "pwa-notification-app-c585d.firebaseapp.com",
    // databaseURL: "https://pwa-notification-app-c585d.firebaseio.com",
    projectId: "pwa-notification-app-c585d",
    storageBucket: "pwa-notification-app-c585d.appspot.com",
    messagingSenderId: "310559560414",
    appId: "1:310559560414:web:b804d5d998d6d8bade684f"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();