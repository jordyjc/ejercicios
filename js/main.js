var hotels;
var dataPost;
var disabledHotels = false;
var repeatView = false;
var activeHotels = false;
var activePromedio = false;
var activeMayor = false;
var activePal = false;
let alumnos = [
  { name: "Jorge", lastName: "Camarillo", average: 29 },
  { name: "Jorge", lastName: "Camarillo", average: 30 },
  { name: "Jorge", lastName: "Camarillo", average: 18 },
  { name: "Jorge", lastName: "Camarillo", average: 19 },
];

fetch("https://my-json-server.typicode.com/dered-dev/hotelsapi/db")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    hotels = data.hotels;
  })
  .catch((error) => {
    console.error(error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dataPost = data;
  })
  .catch((error) => {
    console.error(error);
  });

function cargarDatos() {
  let button = document.querySelector(".button");
  button.disabled = true;

  document.getElementById("alumnos").style.display = "none";
  document.getElementById("mayor").style.display = "none";
  document.getElementById("pal").style.display = "none";

  let buttonMax = document.querySelector(".buttonMax");
  buttonMax.disabled = false;
  let buttonAlumnos = document.querySelector(".buttonPromedio");
  buttonAlumnos.disabled = false;
  let buttonPalindromo = document.querySelector(".buttonPalindromo");
  buttonPalindromo.disabled = false;

  if (activeHotels) {
    document.getElementById("hotels").style.display = "block";
  } else {
    activeHotels = true;
    document.getElementById("hotels").style.display = "block";
    var DatosJson = JSON.parse(JSON.stringify(hotels));
    $("#table").append(
      "<tr><th align='center'>Codigo</th>" +
        "<th align='center'>Etiqueta</th>" +
        "<th align='center'>Marca</th>" +
        "<th align='center'>Tipo</th>" +
        "<th align='center'>Valor</th>"
    );
    for (i = 0; i < DatosJson.length; i++) {
      $("#table").append(
        "<tr>" +
          '<td align="center" ">' +
          DatosJson[i].codigo +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].label +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].marca +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].tipo +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].value +
          "</td>" +
          "</tr>"
      );
    }
  }
}

function promedio() {
  let button = document.querySelector(".buttonPromedio");
  button.disabled = true;

  document.getElementById("hotels").style.display = "none";
  document.getElementById("mayor").style.display = "none";
  document.getElementById("pal").style.display = "none";

  let buttonMax = document.querySelector(".buttonMax");
  buttonMax.disabled = false;
  let buttonHotels = document.querySelector(".button");
  buttonHotels.disabled = false;
  let buttonPalindromo = document.querySelector(".buttonPalindromo");
  buttonPalindromo.disabled = false;
  if (activePromedio) {
    document.getElementById("alumnos").style.display = "flex";
  } else {
    document.getElementById("alumnos").style.display = "flex";
    activePromedio = true;
    const promedio =
      alumnos
        .map((item) => item.average)
        .reduce((prev, curr) => prev + curr, 0) / alumnos.length;

    document.getElementById("result").innerHTML = "El promedio es: " + promedio;

    var DatosJson = JSON.parse(JSON.stringify(alumnos));
    $("#tableAlumnos").append(
      "<tr><th align='center'>Name</th>" +
        "<th align='center'>LastName</th>" +
        "<th align='center'>Average</th>"
    );
    for (i = 0; i < DatosJson.length; i++) {
      $("#tableAlumnos").append(
        "<tr>" +
          '<td align="center" ">' +
          DatosJson[i].name +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].lastName +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].average +
          "</td>" +
          "</tr>"
      );
    }
  }
}

function max() {
  let button = document.querySelector(".buttonMax");
  button.disabled = true;

  document.getElementById("alumnos").style.display = "none";
  document.getElementById("hotels").style.display = "none";
  document.getElementById("pal").style.display = "none";

  let buttonHotels = document.querySelector(".button");
  buttonHotels.disabled = false;
  let buttonAlumnos = document.querySelector(".buttonPromedio");
  buttonAlumnos.disabled = false;
  let buttonPalindromo = document.querySelector(".buttonPalindromo");
  buttonPalindromo.disabled = false;

  if (activeMayor) {
    document.getElementById("mayor").style.display = "block";
  } else {
    activeMayor = true;
    document.getElementById("mayor").style.display = "block";
    var DatosJson = JSON.parse(JSON.stringify(dataPost));
    ordenarDesc(DatosJson, "userId");
    $("#tablePost").append(
      "<tr><th align='center'>UserId</th>" +
        "<th align='center'>Id</th>" +
        "<th align='center'>Title</th>" +
        "<th align='center'>Body</th>"
    );
    for (i = 0; i < DatosJson.length; i++) {
      $("#tablePost").append(
        "<tr>" +
          '<td align="center" ">' +
          DatosJson[i].userId +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].id +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].title +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].body +
          "</td>" +
          "</tr>"
      );
    }
  }
}

function palindromo() {
  let button = document.querySelector(".buttonPalindromo");
  button.disabled = true;

  document.getElementById("alumnos").style.display = "none";
  document.getElementById("hotels").style.display = "none";
  document.getElementById("mayor").style.display = "none";

  let buttonHotels = document.querySelector(".button");
  buttonHotels.disabled = false;
  let buttonAlumnos = document.querySelector(".buttonPromedio");
  buttonAlumnos.disabled = false;
  let buttonMax = document.querySelector(".buttonMax");
  buttonMax.disabled = false;

  if (activePal) {
    document.getElementById("pal").style.display = "block";
  } else {
    activePal = true;
    document.getElementById("pal").style.display = "block";
    var DatosJson = JSON.parse(JSON.stringify(hotels));
    $("#table").append(
      "<tr><th align='center'>Codigo</th>" +
        "<th align='center'>Etiqueta</th>" +
        "<th align='center'>Marca</th>" +
        "<th align='center'>Tipo</th>" +
        "<th align='center'>Valor</th>"
    );
    for (i = 0; i < DatosJson.length; i++) {
      $("#table").append(
        "<tr>" +
          '<td align="center" ">' +
          DatosJson[i].codigo +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].label +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].marca +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].tipo +
          "</td>" +
          '<td align="center">' +
          DatosJson[i].value +
          "</td>" +
          "</tr>"
      );
    }
  }
}
function validarPalindromo() {
  event.preventDefault();
  var regex = /[^a-zA-Z]/g;
  var word = document.getElementById("txt").value;
  word = word.toLowerCase().replace(regex, "");
  var cantidad = word.length;

  for (var i = 0; i < cantidad / 2; i++) {
    if (word[i] !== word[cantidad - 1 - i]) {
      document.getElementById("notPal").style.display = "flex";
      document.getElementById("isPal").style.display = "none";
      return false;
    }
  }
  document.getElementById("isPal").style.display = "flex";
  document.getElementById("notPal").style.display = "none";
}

function cleanView() {
  document.getElementById("hotels").style.display = "none";
  document.getElementById("alumnos").style.display = "none";
  document.getElementById("mayor").style.display = "none";
  document.getElementById("pal").style.display = "none";
  document.getElementById("txt").value = "";

  let button = document.querySelector(".button");
  button.disabled = false;
  let buttonAlumnos = document.querySelector(".buttonPromedio");
  buttonAlumnos.disabled = false;
  let buttonMax = document.querySelector(".buttonMax");
  buttonMax.disabled = false;
  let buttonPalindromo = document.querySelector(".buttonPalindromo");
  buttonPalindromo.disabled = false;
}

function ordenarAsc(array, key) {
  array.sort(function (a, b) {
    return a[key] > b[key];
  });
}

function ordenarDesc(array, key) {
  ordenarAsc(array, key);
  array.reverse();
}
