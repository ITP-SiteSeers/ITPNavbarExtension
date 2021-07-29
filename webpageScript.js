//get computed style to solve click become double click issue
if (!window.getComputedStyle) {
  // Fallback for obsolete IE
  window.getComputedStyle = function (e) {
    return e.currentStyle;
  };
}
// /*explore drop down onclick*/
function exploreDropDown() {
  const headerRoot = document.getElementById('new-itp-header');
  headerRoot.classList.toggle('nav-expanded');
  headerRoot.classList.toggle('nav-retracted');

  const exploreButton = document.getElementById('explore-button');
  exploreButton.innerHTML =
    exploreButton.innerHTML === 'EXIT' ? 'EXPLORE' : 'EXIT';
}

/*close drop down when clicked other places*/
// window.onclick = function (event) {
//   if (!event.target.matches('#explore-button')) {
//     var dropdowns = document.getElementsByClassName('dropdown-content');
//     if (dropdowns.style.display === "none") {
//         dropdowns.style.display = "flex";
//     } else {
//         dropdowns.style.display = "none";
//     }
//   }
// };
