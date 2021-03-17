# JSON-Article

![mian page](https://github.com/janStolc5/JSON-Article/blob/master/readme_img/repoarticlesimg_1.JPG?raw=true)
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## The content of the documentation
* [General info](#general-info)
* [Features](#features)
* [Technologies](#technologies)
* [Setup](#setup)
* [License](#license)

## General info
<p>I finished my second portfolio project which show us how we can use JS Fetch Api. JS methods used in this project are GET, POST, PUT and DELETE. It is a simple application which allow us adding articles to database JSON and manage it.</p>

## Features
* Adding an article
* Searching
* Pagination
* Editing an article
* Deleting an article

<h3>Adding</h3>

![addin page](https://github.com/janStolc5/JSON-Article/blob/master/readme_img/repoarticlesimg_2.JPG?raw=true)

<h3>Read more content artcile</h3>

![addin article](https://github.com/janStolc5/JSON-Article/blob/master/readme_img/repoarticlesimg_3.JPG?raw=true)

<h3>Editing</h3>

![editing article](https://github.com/janStolc5/JSON-Article/blob/master/readme_img/repoarticlesimg_4.JPG?raw=true)

## TechnologieS

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

<a href="https://www.npmjs.com/package/json-server">JSON-SERVER</a><br>
<a href="https://nodejs.org/en/">NODE.JS</a>

## Setup

If you want configure start your application locally, you need to install JSON-SERVER. Below is showing in which order it must be done.

- Insall the latest version <a href="https://nodejs.org/en/">NODE.JS.</a>

- Install <a href="https://nodejs.org/en/">NODE.JS</a> according to the instruction.


For simplicity, open command prompt or Windows PowerShell and type the code below. In this case, directory is irrelevant <br> ```npm install -g json-server```
  
- create ```database.json``` file directory where you have a project.
- in json file, create some json template object:

  ``` {
      "articles": [
          {
          "title": "Lorem, ipsum dolor.",
          "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, harum!",
          "img": "https://cdn.pixabay.com/photo/2021/02/08/07/51/fishermen-5994018_960_720.jpg",
          "id": 1
          },
        ]
       }
   ```    
 
- in VS Code (i used it) start powershell terminal.
- go to the project directly. For example: ```C:\Users\Mike\Documnents\projects\JSON-API\``` and start json-server typing: <br>
  ``` json-server --watch data/database.json```
  
- the result should look like this:<br>
![mian page](https://github.com/janStolc5/JSON-Article/blob/master/readme_img/repoarticlesimg_5.JPG?raw=true)

## License

<a href="https://github.com/IgorAntun/node-chat/blob/master/LICENSE">MIT</a>


