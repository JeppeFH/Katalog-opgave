import { fetchPlayers } from "./fetch-data.js";
import { playerListTmpl } from "./templates.js";

// Array med produkter
let players = await fetchPlayers();

export function playersList() {
  let playerListContainer = document.querySelector(".player-container");

  if (playerListContainer) {
    players.forEach((event) => {
      playerListContainer.insertAdjacentHTML(
        "beforeend",
        playerListTmpl(event)
      );
    });
  }

  /* List view */
  let listIcon = document.querySelector(".fa-bars");
  let gitterIcon = document.querySelector(".fa-grip");

  /* Click event gitter */

  /*  gitterIcon.addEventListener("click", () => {
    playerListContainer.classList.remove("player-list");
    playerListContainer.classList.add("player-card");
    playerListContainer.innerHTML = "";
    players.forEach((post) => {
      playerListContainer.insertAdjacentHTML(
        "beforeend",
        profileGridTmpl(post)
      );
    });
  }); */

  /* Click event list */

  /* listIcon.addEventListener("click", () => {
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
