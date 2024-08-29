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

  /* Click event list */
}
