/*explore drop down onclick*/
function exploreDropDown() {
  document.getElementById('dropdown').classList.toggle('show');
}
/*close drop down when clicked other places*/
window.onclick = function (event) {
  if (!event.target.matches('#explore-button')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
