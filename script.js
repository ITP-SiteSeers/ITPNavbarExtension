// Solution to allow for access to webpage context
// Through injecting script tag
const contentScript = document.createElement('script');
contentScript.src = chrome.runtime.getURL('contentScript.js');
contentScript.async = true;
(document.head || document.documentElement).appendChild(contentScript);
