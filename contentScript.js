let urlRoots = [
  {
    url: `https://itp.nyu.edu/help/`,
    root: `#masthead`,
  },
  {
    url: `https://itp.nyu.edu/camp2021/`,
    root: `.headerWrapper`,
  },
  {
    url: `https://itp.nyu.edu/itp/people/`,
    root: `body`,
  },
  {
    url: `https://itp.nyu.edu/redburnsfund/`,
    root: `body`,
  },
];

console.log(`====================================`);
console.log(`🗽 ITP Header Bar Testing`);
console.log(`====================================`);

const url = window.location.href;
console.log(`🔗 URL: ${url}`);

const root = urlRoots
  .map((webpage) => (url.includes(webpage.url) ? webpage.root : null))
  .filter((webpage) => webpage)[0];
console.log(`🌳 Root selector: ${root}`);

let containerDiv = document.querySelector(root);
console.log(`📦 Container element: ${{ containerDiv }}`);

let newITPHeader = document.createElement('div');
newITPHeader.id = 'new-itp-header';
console.log(`🎁 New header: ${{ newITPHeader }}`);

try {
  containerDiv.prepend(newITPHeader);
  console.log(`🎉 Header appended successfully!`);
} catch (err) {
  console.log(`❌ ${root} is an invalid root for webpage`);
}
