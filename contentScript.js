const urlRoots = [
  {
    url: `https://itp.nyu.edu/help/`,
    root: `.header-main`,
    colorScheme: `dark`,
  },
  {
    url: `https://itp.nyu.edu/camp2021/`,
    root: `.headerWrapper`,
    colorScheme: `light`,
  },
  {
    url: `https://itp.nyu.edu/`,
    root: `body`,
    colorScheme: `light`,
  },
];

const headerDOM = [
  // Option 1
  `
  <div id="top-bar">
    <img src="https://gist.githubusercontent.com/EthanPrintz/85179b3d35743f2096297982c5aba404/raw/24e1aab8693cde6ff8a04f1079ce0992dcea6c2b/TischLogoWhite.svg" id="tisch-logo" alt="Tisch logo">
    <img src="https://gist.githubusercontent.com/EthanPrintz/4f09bb9cbabdf03d890955cbf91e5dd0/raw/cf9c4b6e86a91b7a5a3174cf39dcc531675986c3/IMLogoWhite.svg" id="im-logo" alt="IM logo">
    <button id="explore-button" onClick="exploreDropDown()">
      EXPLORE
    </button>
    <div id="dropdown" class="dropdown-content">
        <div>Academic Resources</div>
        <div>Floor Resources</div>
        <div>Career Resources</div>
        <div>Student Life</div>
        <div>Getting Help</div>
        <div>Community</div>
        <div>Contact</div>
    </div>
  </div>
  <menu id="bottom-bar">
    <ul>
      <li><a href="https://itp.nyu.edu">ITP</a></li>
      <li><a href="https://itp.nyu.edu/ima">IMA</a></li>
      <li><a href="https://itp.nyu.edu/lowres">LowRes</a></li>
      <li><a href="https://itp.nyu.edu/camp">Camp</a></li>
    </ul>
  </menu>
  
  `,
  // Option 2
  `
  Option 2
  `,
  // Option 3
  `
  Option 3
  `,
  // Option 4
  `
  Option 4
  `,
];

console.log(`====================================`);
console.log(`🗽 ITP Header Bar Testing`);
console.log(`====================================`);

// Get webpage URL
const url = window.location.href;
console.log(`🔗 URL: ${url}`);

// Determine root selector used for webpage
const root = urlRoots
  .map((webpage) => (url.includes(webpage.url) ? webpage.root : null))
  .filter((webpage) => webpage)[0];
console.log(`🌳 Root selector: ${root}`);

// Query root container by selector
const containerNav = document.querySelector(root);
console.log(`📦 Container element: ${{ containerNav }}`);

// Create new nav element
const newITPHeader = document.createElement(`nav`);
newITPHeader.id = `new-itp-header`;
newITPHeader.className = `nav-1`;
console.log(`🎁 New header: ${{ newITPHeader }}`);
newITPHeader.innerHTML = headerDOM[0];

// Append new nav element
try {
  containerNav.prepend(newITPHeader);
  console.log(`🎉 Header appended successfully!`);
} catch (err) {
  console.log(`❌ ${root} is an invalid root for webpage`);
}

// ================================================
// For testing purposes only– create navbar selector
// ================================================
const navSelector = document.createElement(`div`);
navSelector.id = `nav-selector`;
navSelector.innerHTML = `
<div class="ns ns-selected" id="ns-1">Option 1</div>
<div class="ns" id="ns-2">Option 2</div>
<div class="ns" id="ns-3">Option 3</div>
<div class="ns" id="ns-4">Option 4</div>
`;
document.querySelector(`body`).prepend(navSelector);

const generateNavBar = (navId, colorScheme) => {
  document.querySelector(`nav`).innerHTML = headerDOM[navId];
  document.querySelector(`nav`).className = ``;
  document.querySelector(`nav`).classList.add(`nav-${navId + 1}`);
  document.querySelectorAll(`.ns`).forEach((button) => {
    button.classList.remove(`ns-selected`);
  });
  document.querySelector(`#ns-${navId + 1}`).classList.add(`ns-selected`);
};

document.querySelectorAll(`.ns`).forEach((button) => {
  button.addEventListener(`click`, function () {
    generateNavBar(this.id.split(`-`)[1] - 1);
  });
});
