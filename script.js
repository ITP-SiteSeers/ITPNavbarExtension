// Solution to allow for access to webpage context
// Through injecting script tag
const contentScript = document.createElement('script');
contentScript.src = chrome.runtime.getURL('contentScript.js');
contentScript.onload = function () {
  this.remove();
};

const webpageScript = document.createElement('script');
webpageScript.src = chrome.runtime.getURL('webpageScript.js');
webpageScript.onload = function () {
  this.remove();
};

(document.head || document.documentElement).appendChild(contentScript);
(document.head || document.documentElement).appendChild(webpageScript);

// window.addEventListener('DOMContentLoaded', () => {
//   const tischLogo = chrome.runtime.getURL(`img/TischLogo.svg`);
//   const tischLogoDOM = document.getElementById(`tisch-logo`);
//   tischLogoDOM.src = tischLogo;
// });
