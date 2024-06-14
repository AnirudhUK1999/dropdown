import { dropdownClick } from "./dropdown";
import "./style.css";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  //   element.innerHTML = _.join(["Hello", "webpack"], " ");
  const title = document.querySelector(".drop-down-title");
  const dropDownList = document.querySelector(".drop-down-content");
  element.textContent = dropdownClick(title, dropDownList);

  return element;
}

document.body.appendChild(component());
