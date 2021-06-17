var firebaseConfig = {
    apiKey: "AIzaSyDcGokLQ1qtKSkdf6Br27Ut3EVELkuqi8g",
    authDomain: "project-1e746.firebaseapp.com",
    databaseURL: "https://project-1e746-default-rtdb.firebaseio.com",
    projectId: "project-1e746",
    storageBucket: "project-1e746.appspot.com",
    messagingSenderId: "185396215932",
    appId: "1:185396215932:web:3192a7c60943dc5e9b89f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var name= localStorage.getItem("Username");
  var roomname= localStorage.getItem("Roomname");
//YOUR FIREBASE LINKS
function send(){
    var message= document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
          name:name,message:message,like:0
    });
    document.getElementById("msg").innerHTML=" ";
}
function logout(){
    window.location="kwitter_room.html";
}