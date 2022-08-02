const firebaseConfig = {
      apiKey: "AIzaSyAPZ8oZtyuK7GOayvUa9VkiXrkfbcc2g38",
      authDomain: "kwitter-fbb94.firebaseapp.com",
      projectId: "kwitter-fbb94",
      storageBucket: "kwitter-fbb94.appspot.com",
      messagingSenderId: "761260701414",
      appId: "1:761260701414:web:77dd101796e8f9fb8bed27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!"

function addRoom() {
      room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room name"
            });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";



}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("roomname-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html"




}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}