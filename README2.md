# Name of Application
​
One Paragraph of project description goes here. Link to the live version of the app if it's hosted on Heroku.
​
## Built With
​
React, Redux, Express, Passport, PostgreSQL, Nodemailer, SweetAlerts2,
​
## Getting Started
​
These instructions will get you a copy of the project up and running on your local machine for development purposes. See deployment for notes on how to deploy the project on a live system.
​
### Prerequisites
​
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)
​

### Create database and table​s

* Create a databse named 'voila'. If you would like to name your database something else, you will need to change `voila` to the name of your new database name in `server/modules/pool.js`
* See the database.sql files for the tables and initial data to set up your database. 

### Installing
​
* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`
​

​
## Screen Shot
​
Include one or two screen shots of your project here (optional). Remove if unused.
​
## Documentation
​
Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.
​
### Completed Features
​
High level list of items completed.
​
- [x] Feature a
- [x] Feature b
​
### Next Steps
​
Features that you would like to add at some point in the future.
​
- [ ] Feature c
​
## Deployment
​
1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Heroku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
7. In the deploy section, select manual deploy
​
## Authors
​
* Mike Lynch
* Khou Thao
* Ryan McCartan
* See Yang
* Naomi Price
​
​
## Acknowledgments
​
* Thank you to Prime Digital Academy for teaching us all we knwo and letting us soar. 




