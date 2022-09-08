import * as breaking from "./utils";

fetch("https://www.breakingbadapi.com/api/characters/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    var ocultar = document.getElementById("root");
    ocultar.style.display = "none";
    data.forEach((element) => {
      let character = breaking.createCharacterRow(element);
      document.body.appendChild(character);
    });

    let capas = document.getElementsByTagName("span");
    for (let i = 0; i < capas.length; i++) {
      capas[i].addEventListener("click", function () {
        breaking.showCharacter(data[i]);
      });
    }
  });
