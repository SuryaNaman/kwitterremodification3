var firebaseConfig = {
    apiKey: "AIzaSyBsVgNfBLfCKeHRTet9Zra7UAmlwVwqKsk",
    authDomain: "projectkwittermode.firebaseapp.com",
    databaseURL: "https://projectkwittermode-default-rtdb.firebaseio.com",
    projectId: "projectkwittermode",
    storageBucket: "projectkwittermode.appspot.com",
    messagingSenderId: "314159630802",
    appId: "1:314159630802:web:d68c48279e1c0f2c16e00b",
    measurementId: "G-FZMVELEQPT"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({ pupose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("room_name-" + Room_names);
            row = "<div class='room_name' id=" + Room_names + "onclick='redidirecttoroomnme(this.id)'>#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML = row;
        });
    });
}
getData();

function redidirecttoroomnme(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}