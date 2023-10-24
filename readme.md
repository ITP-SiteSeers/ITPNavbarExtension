# ITP Navigation Header
This is the code for the universal navigation header bar on ITP/IMA/Low Res departmental websites. It lives on the ITP servers at https://www.itp.nyu.edu/branding/header/* and is injected onto each page. The base files can thus be modified on the server and the changes reflected in all associated websites.

## Installation Instruction for Wordpress:
1. If plugin 'Custom CSS & JS' not added, install it from https://wordpress.org/plugins/custom-css-js/
2. Go to 'Custom CSS & JS' tab of the Wordpress admin sidebar
3. Click 'Add HTML Code' on the top bar
4. Copy and paste this code:
```
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-54952418-1"></script>
<script defer src='https://www.itp.nyu.edu/branding/header/contentScript.js'></script>
<link rel='stylesheet' href='https://www.itp.nyu.edu/branding/header/style.css'>
```
4. Make sure 'Where on page' is set to header and 'Where in site' is set to Frontend 
5. Click 'Update'

## Installation Instruction for Vanilla HTML/CSS:
1. Connect to server over FTP
2. Download existing index.html
3. Copy and paste this code into index.html header:
```
<script defer src='https://www.itp.nyu.edu/branding/header/contentScript.js'></script>
<link rel='stylesheet' href='https://www.itp.nyu.edu/branding/header/style.css'>
```
4. Save file
5. Upload file back to FTP server
