// Solution to allow for access to webpage context
// Through injecting script tag

const contentScript = document.createElement('script');
contentScript.src = chrome.runtime.getURL('contentScript.js');

const webpageScript = document.createElement('script');
webpageScript.src = chrome.runtime.getURL('webpageScript.js');

(document.head || document.documentElement).appendChild(contentScript);
(document.head || document.documentElement).appendChild(webpageScript);

const font = new FontFace(
  'Gotham',
  chrome.runtime.getURL('Gotham-Font/Gotham-Black.woff2')
);
document.fonts.add(font);
