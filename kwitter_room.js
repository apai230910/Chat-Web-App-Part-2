// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD00PMxIvKTC7Pb7lj6ymzIm4tQxiv--U4",
  authDomain: "chat-web-app-63e69.firebaseapp.com",
  databaseURL: "https://chat-web-app-63e69-default-rtdb.firebaseio.com",
  projectId: "chat-web-app-63e69",
  storageBucket: "chat-web-app-63e69.appspot.com",
  messagingSenderId: "923481120051",
  appId: "1:923481120051:web:02e511d8959a61e1a53246"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add() {

 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update ({
 purpose : "add room"
  });

}