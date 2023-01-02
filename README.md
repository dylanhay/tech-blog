# Tech Blog

## Description
Tech blog where users can create their own posts about tech news outlets and comment on other users' posts.

## Table of Contents
[Deployed Application](#deployed-application)  
[Built With](#built-with)  
[Landing Page](#landing-page)  
[Installation](#installation)   
[Testing](#testing)  
[Contribution](#contribution)  

## Deployed Application
https://tech-news-blog-dch.herokuapp.com/  

## Built With
* JavaScript
* Node.js
* Express.js
* MySQL2
* Sequelize
* Sessions
* dotenv
* bcrypt
* Handlebars
* HTML
* CSS
* Jest
* Git
* Insomnia
* Heroku
* JawsDB

## Landing Page
![Screenshot](./public/images/tech-blog-landpage.png "Landing Page")

## Installation
npm, Node.js, Express.js, MySQL, MySQL2, Sequelize, dotenv, bcrypt, Handlebars, express-session and connect-session-sequelize must be installed to use this application locally.

* To initialize npm, enter "npm init" in terminal while in the root folder of the project
* Node.js can be downloaded and installed from https://nodejs.org/en/download/  
* MySQL can be downloaded and installed from https://dev.mysql.com/downloads/mysql/
* To install Express.js, MySQL2 and Sequelize, enter "npm install express sequelize mysql2" in terminal while in the root folder of the project
* To install the dotenv package, enter "npm install dotenv" in terminal while in the root folder of the project
* To install the bcrypt package, enter "npm install bcrypt" in terminal while in the root folder of the project  
* To install Handlebars, enter "npm install express-handlebars" in terminal while in the root folder of the project
* To install express-session and connect-session-sequelize, enter "npm i express-session connect-session-sequelize" in terminal while in the root folder of the project

Once the above steps have been followed, follow the steps below to run the application: 
* Enter the database name, your MySQL username and your password into the .env file
* Enter "mysql -u root -p" and enter your MySQL password to navigate to the MySQL Shell
* Enter "source db/schema.sql" in the MySQL Shell to create the "tech_blog_db" database
* Enter "npm start" in terminal to launch live server

## Testing
* Enter `npm test` in the CLI while in the root folder to run Jest

## Contribution
Made with ❤️ by Dylan Hay