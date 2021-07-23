//get computed style to solve click become double click issue
if (!window.getComputedStyle) {
  // Fallback for obsolete IE
  window.getComputedStyle = function (e) {
    return e.currentStyle;
  };
}
// /*explore drop down onclick*/
function exploreDropDown() {
  console.log('clicked');
  const bottomBar = document.getElementById('bottom-bar');
  if (getComputedStyle(bottomBar).display === 'none') {
    bottomBar.style.display = 'block';
  } else {
    bottomBar.style.display = 'none';
  }
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
