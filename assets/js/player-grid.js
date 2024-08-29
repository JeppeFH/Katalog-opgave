import { fetchPlayers } from "./fetch-data.js";
import { playerGridTmpl, playerListTmpl } from "./templates.js";

// Array med produkter
let players = await fetchPlayers();

export function playersGrid() {
  let playerListContainer = document.querySelector(".player-container");

  if (playerListContainer) {
    players.forEach((event) => {
      playerListContainer.insertAdjacentHTML(
        "beforeend",
        playerGridTmpl(event)
      );
    });
  }

  /* List view */
  let listIcon = document.querySelector(".fa-bars");
  let gitterIcon = document.querySelector(".fa-grip");

  /* Click event gitter */

  /* gitterIcon.addEventListener("click", () => {
    playerListContainer.classList.remove("player-list");
    playerListContainer.classList.add("player-card");
    playerListContainer.innerHTML = "";
    players.forEach((post) => {
      playerListContainer.insertAdjacentHTML(
        "beforeend",
        profileGridTmpl(post)
      );
    });
  });*/

  /* Click event list */

  /* listIcon.addEventListxxener("click", () => {
    playerListContainer.classList.remove("player-card");
    playerListContainer.classList.add("player-list");
    playerListContainer.innerHTML = "";
    players.forEach((post) => {
      playerListContainer.insertAdjacentHTML(
        "beforeend",
        profileListTmpl(post)
      );
    });
  }); */
}

export function playersList() {
  let playerList = document.querySelector(".player-list");

  if (playerList) {
    players.forEach((event) => {
      playerList.insertAdjacentHTML("beforeend", playerListTmpl(event));
    });
  }
}
