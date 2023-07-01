const firebaseConfig = {
  apiKey: "AIzaSyAyapY2O7bX9_bZaDTN6VV1XkPrh-qyBU4",
  authDomain: "vamos-conversar-88427.firebaseapp.com",
  databaseURL: "https://vamos-conversar-88427-default-rtdb.firebaseio.com",
  projectId: "vamos-conversar-88427",
  storageBucket: "vamos-conversar-88427.appspot.com",
  messagingSenderId: "716087546987",
  appId: "1:716087546987:web:67b2982d687cc5198b8d2e"
};
  // inicilizar firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "bem-vindo(a)" + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adicionado nome da sala"
});

localStorage.setItem("room_name",room_name);

window.location = "kwitter_page.html";
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Nome da Sala - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData()


function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
 window.location = "./index.html";

}
