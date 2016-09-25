---
layout: post
title: "File Organization of an Electron App"
date: 2016-09-24 00:18:23 +0700
---

File organization of a programming project is vital for good engineering principles such as abstraction. It is also a good software engineering practice as good file organization makes it easier to maintain and modify the code. The Electron application I built during my internship mainly consists of "node_modules" folder, "public" folder, "main.js" file and "package.json" file as shown in the screenshot below:

![File Structure screenshot]({{ post.url }}/static/img/file-structure.jpg)

The package.json file contains meta data about the application. It also includes the list of dependencies to install from npm when running npm install. In Electron, the process that runs package.json’s main script is called the main process. The script that runs in the main process can display a GUI by creating web pages. Application’s package.json file has dependency node modules in it. These modules are installed into the “node_modules” folder. 

The main.js file creates windows and handles system events. When Electron finishes initialization and the application is ready, main.js first creates a new browser window and then loads the index.html file into that window.  

The chronological order of the file calls:
package.json ──> main.js ──> public/pages/index.html   

The “public” folder is a bundle of frontend items. “css” folder holds the css files. “js” files holds the js files corresponding to each page in the pages folder. The files in the “js” folder have the same name as the files in the “pages” folder. An Electron application can use multiple pages. The only difference is that js files have “.js” extension whereas pages files have “.html” extension. For index.html file in the “pages” folder, there is a corresponding index.js file in the “js” folder. “js-common” folder has js files used commonly by every page. js-resources folder has the database connection related file. 

