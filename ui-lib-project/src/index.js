import Tooltip from "./levi-ui/tooltip";
import Dropdown from "./levi-ui/dropdown";
import Tabs from "./levi-ui/tabs";
import Snackbar from "./levi-ui/snackbar";

//create a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

//create a dropdown

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

const snackbar = new Snackbar(document.querySelector(".snackbar"));
snackbar.init();
const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("show something very interesting");
});
