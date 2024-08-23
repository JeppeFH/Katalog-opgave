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
}
