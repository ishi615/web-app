username =localStorage.getItem("username");
document.getElementById("user_name").innerHTML= "Welcome" + username+ "!"; 
var firebaseConfig = {
    apiKey: "AIzaSyCx7tpiSf7NwwKdO1AFGGhZ6NnvgGiln04",
    authDomain: "let-s-chat-web-app-3c110.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-3c110-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-3c110",
    storageBucket: "let-s-chat-web-app-3c110.appspot.com",
    messagingSenderId: "679645237717",
    appId: "1:679645237717:web:3dc4bd8077ab2172eaed5c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




function add_Room(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose :"adding user"
    });
    localStorage.setItem("roomname", room_name);
    window.location="room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 row = "<div class = 'roomname' id ="+Room_names+" onclick= 'redirect(this.id)'>#" + Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;

 //End code
 });});}
getData();


function redirect(name)
 {
       localStorage.setItem("roomname", name);
       window.location = "kwitter_page.html";
 }
 function logout()
 {
       localStorage.removeItem("username");
       localStorage.removeItem("roomname");
       window.location = "index.html";

 }