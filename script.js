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

const font = new FontFace(
  'Gotham',
  chrome.runtime.getURL('fonts/GothamPro.woff2')
);
document.fonts.add(font);
