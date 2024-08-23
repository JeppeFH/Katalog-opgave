import { playersList } from "./player-lists.js";
import { playersPage } from "./player-page.js";
const app = {};

app.init = async () => {
  playersList();
  playersPage();
};

app.init();
