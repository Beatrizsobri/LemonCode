let hotel = {
    name: "Mencey",
    location: "Tenerife",
    img: "./img/hotel.png",
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML =
    "Ubicado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;


let rating = prompt("Puntuación: del 1 al 5");
document.getElementById("rating").innerHTML = rating + " estrellas";

let anonymous = confirm("¿Quiere que la reseña sea anónima?");
document.getElementById("anonymous").checked = anonymous;