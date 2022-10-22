# Model-View-Controller (MVC) Challenge - Tech Blog

This project is intended for devellopers to share information online with each other and the world

## Project Description

This application takes in user information like email and password, and validates for future logins and logouts. It also takes in the information of the user's comment and publishes it, showing the User who made the post as well. 

## Technologies Used

This project makes use of mySQL2 for the database, as well as bycript for sensitive information protection, Sequelize, dotenv, Express.js, Handlebars, and Express-Session.

## Challenges

As with anything recently learned, the main challenge is the connection between the concepts and the application of the concepts. The way the technologies work individually and together, at least for me, represented a great challenge that took failure after failure to get to work. As with anything, it's all about messing up time and time again, after all it's just a coumputer and cannot do anything of real harm if you do mess up. Further improvement of understanding of the concepts, as well as the interaction between them and the technologies was of great help for the project.

## Install and Run!

The project is still not deployed on Heroku, and is henceforth only availabe to be ran locally. However, doing this is simple!
Once you've cloned the repository and opened it on VS Code, open the integrated terminal and run the following commands:

* npm i
* mysql - u root

Make sure you've created a .env file. You can do this on the integrate terminal by typing: 

* touch .env

Open the file and copy-paste the following:
```
DB_NAME='techBlog_db'
DB_USER='root'
DB_PASSWORD=''
```

 Then, open your terminal and type in the following command: 
    * mysql -u root

 Source the database and quit mysql

Then, type in the following commands:

* npm i
* npm run seed
* node server.js

The app should be listening on localhost:3001

## User Story: 

AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

## Acceptance Criteria:

GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments