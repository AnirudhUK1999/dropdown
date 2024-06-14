export function dropdownClick(source, target) {
  target.style.display = "none";
  //   list.style.display = "none";
  toggleVisibility(source, target);
}

function toggleVisibility(source, target) {
  source.addEventListener("click", () => {
    if (target.style.display == "none") {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
  });
  //   source.addEventListener("mouseenter", () => {
  //     document.querySelector("h4").style.borderBottom = "3px solid red";
  //   });
  source.addEventListener("mouseleave", () => {
    document.querySelector("h4").style.borderBottom = "none";
  });
}
