
  var firebaseConfig = {
      apiKey: "AIzaSyCvY3LiTdqlfjmG11OM2nq61fO8lOlxnuA",
      authDomain: "c-93-whjr-kwitter.firebaseapp.com",
      databaseURL: "https://c-93-whjr-kwitter-default-rtdb.firebaseio.com",
      projectId: "c-93-whjr-kwitter",
      storageBucket: "c-93-whjr-kwitter.appspot.com",
      messagingSenderId: "769374827164",
      appId: "1:769374827164:web:2cae62178f50ce1b2c7359"
    };
    firebase.initializeApp(firebaseConfig);


    var Name = localStorage.getItem("Username");
    document.getElementById("WelcomeUserName").innerHTML = "Welcome " + Name + "!";
    
    function AddRoom(){
      var RoomName = document.getElementById("RoomNameTextInput").value;
      localStorage.setItem("TheRoomName", RoomName);

      firebase.database().ref("/").child(RoomName).update({purpose: "AddingRoom"});

      window.location = 'kwitter_page.html';
    }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       RoomNames = childKey;

       var row = "<div class='room_name' id=" + RoomNames + " onclick='RedirectToRoomName(this.id)'>#" + RoomNames + "</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function RedirectToRoomName(Name){
    localStorage.setItem("TheRoomName", Name);
    window.location = 'kwitter_page.html';

}

function LOGOUT(){
  localStorage.removeItem("Username");
  localStorage.removeItem("TheRoomName");
  window.location = 'index.html';
}