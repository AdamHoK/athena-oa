# Athena Technical Assessment

The project aims to emulate this carousel feature from https://www.athenaclub.com/
![image](https://user-images.githubusercontent.com/20019850/221440497-fa0fe4a7-2928-49cd-a43e-c9e3e7f5c1dc.png)

I used an Angular front end with a NodeJS backend and ExpressJS for the API retrieving the product information. The product data is kept as a .json file.
The carousel is an [ngx component](https://www.npmjs.com/package/ngx-owl-carousel-o): the owl-carousel component was originally built for jQuery, but this version was built for Angular. The icons used are from Bootstrap Icon pack, except for the stars for which I used the IonIcons, and all the styling is done with bootstrap and SASS.

In order to deploy, clone repository and run "npm start" in root directory. The NodeJS server is on port 8080 and Angular is on port 4200. Navigate to http://localhost:4200 to see the site. 
