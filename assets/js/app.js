import { playersGrid } from "./render-data.js";
import { playersPage } from "./player-page.js";
import { nav } from "./nav.js";
import { slider } from "./slider.js";

const app = {};

app.init = async () => {
  playersGrid();
  playersPage();
  nav();
  slider();
};

app.init();
