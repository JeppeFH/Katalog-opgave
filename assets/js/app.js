import { playersList } from "./player-lists.js";
import { playersPage } from "./player-page.js";
import { nav } from "./nav.js";
import { slider } from "./slider.js";

const app = {};

app.init = async () => {
  playersList();
  playersPage();
  nav();
  slider();
};

app.init();
