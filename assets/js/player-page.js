import { fetchPlayers } from "./fetch-data.js";
import { playerPageTmpl } from "./templates.js";

let players = await fetchPlayers();

export function playersPage() {
  const playerPageContainer = document.querySelector(".player-page-container");

  if (playerPageContainer) {
    let search = location.search;

    let playerID = new URLSearchParams(search).get("id");

    let findPlayer = players.find((player) => player.id == playerID);
    console.log(findPlayer);
    playerPageContainer.insertAdjacentHTML(
      "beforeend",
      playerPageTmpl(findPlayer)
    );
  }
}
