function AddUser(){
    var Username = document.getElementById("TheInput").value;
    localStorage.setItem("Username", Username);
    window.location = 'kwitter_room.html';
}