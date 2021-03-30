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

var Username = localStorage.getItem("Username");
var Roomname = localStorage.getItem("TheRoomName");

function send(){
      var Message = document.getElementById("msg").value;
      firebase.database().ref(Roomname).push({
            name: Username,
            like: 0,
            message: Message
      });
      document.getElementById("msg").value = "";
      
}

function getData() { firebase.database().ref("/"+Roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         GetName = message_data["name"];
         GetMsg = message_data["message"];
         GetLike = message_data["like"];

         var NameWithData = "<img src='tick.png' class='user_tick'> <h3>"+ GetName + "</h3>";
         var MessageWithData = "<h4 class='message_h4'>"+ GetMsg +"</h4>";
         var LikeWithData = "<button class='btn btn-warning' id=" + firebase_message_id + " value="+ GetLike + " onclick='updateLike(this.id)'>";
         var SpanWithData = "<span class='glyphicon glyphicon-thumbs-up'>&nbsp;LIKE: " + GetLike + "</span></button><hr>";
         var ROW = NameWithData + MessageWithData + LikeWithData + SpanWithData;
         document.getElementById("output").innerHTML += ROW;

      


      } });  }); }
getData();

function LOGOUT(){
      localStorage.removeItem("Username");
      localStorage.removeItem("TheRoomName");
      window.location = 'index.html';
    }

    function updateLike(message_id){
          console.log(message_id);
      var LIKES = document.getElementById(message_id).value;
      var updatedLike = Number(LIKES)+ 1;
      console.log(LIKES)
      firebase.database().ref(Roomname).child(message_id).update({like: updatedLike});


    }