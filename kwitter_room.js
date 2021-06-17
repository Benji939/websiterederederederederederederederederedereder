
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
var username= localStorage.getItem("Username");
document.getElementById("usernamewelcome").innerHTML= "Welcome "+username+" !";
function addroom(){
 var roomname= document.getElementById("roomname").value;
 firebase.database().ref("/").child(roomname).update({
       purpose:"adding room"
 });
 localStorage.setItem("Roomname",roomname);
 window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

console.log("Room-Name:"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+= row;

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location="index.html";
}