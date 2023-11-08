# ITP Navigation Header
This is the code for the universal navigation header bar on ITP/IMA/Low Res departmental websites. It lives on the ITP servers at https://www.itp.nyu.edu/branding/header/* and is injected onto each page. The base files can thus be modified on the server and the changes reflected in all associated websites.

## Installation Instruction for Wordpress:
1. Install the ITP/IMA Interactive Header plugin. Go to **Plugins**, click on **Add New**, and upload the zip file found on this repo.
   a. If the website is in a WP multisite, the installation should happen at the network admin level 
2. Activate the plugin on the WP site

## Installation Instruction for Vanilla HTML/CSS:
1. Connect to server over FTP
2. Download existing index.html
3. Copy and paste this code into index.html header:
```
<script async src="https://www.googletagmanager.com/gtag/js?id=G-54YGZP2VQT"></script>
<script defer src="https://www.itp.nyu.edu/branding/header/contentScript.js"></script>
<link rel="stylesheet" href="https://www.itp.nyu.edu/branding/header/style.css">
```
4. Save file
5. Upload file back to FTP server
