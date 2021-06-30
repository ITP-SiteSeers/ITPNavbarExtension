// Solution to allow for access to webpage context
// Through injecting script tag
var s = document.createElement('script');
s.src = chrome.runtime.getURL('contentScript.js');
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
