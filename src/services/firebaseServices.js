import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyD5yTd9FGofjfFjEbG4usVOKHa3PzlsD5w",
    authDomain: "pwa-notification-app-c585d.firebaseapp.com",
    databaseURL: "https://pwa-notification-app-c585d.firebaseio.com",
    projectId: "pwa-notification-app-c585d",
    storageBucket: "pwa-notification-app-c585d.appspot.com",
    messagingSenderId: "310559560414",
    appId: "1:310559560414:web:b804d5d998d6d8bade684f"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                      alert(currentToken)
                     prompt('currentToken',currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}
