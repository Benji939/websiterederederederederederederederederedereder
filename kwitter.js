function login(){
    var name= document.getElementById("username").value;
    localStorage.setItem("Username",name);
    window.location="kwitter_room.html";
    
}