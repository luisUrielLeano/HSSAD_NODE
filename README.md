# HEALTHCARE SUPPORT SYSTEM AGAINST DEPRESSION - NODE
<img src="https://github.com/luisUrielLeano/HSSAD_REACT/blob/main/public/img/svg/logo.svg" width="250" height="250" />

Health Care Support System Against Depression is web platform designed to help common people to predict possible depression cases by
answering a specialized survey based on the CES-D scale; offering a reliable tool for accurate detection and prediction with Artificial Intelligence help using Neuronal Networks.
In this way, people can be aware of their mental health and seek professional help if necessary.

At the same time the project looks for collecting crucial data that could be useful for other projects and research studies. 

This project works in conjuntion with [HSSAD_REACT](https://github.com/luisUrielLeano/HSSAD_REACT) and [HSSAD_NN](https://github.com/luisUrielLeano/HSSAD_NN)

## General architecture of the project
<img src="https://github.com/luisUrielLeano/HSSAD_REACT/blob/main/public/img/generalArchitecture.png" />


## Installation
### Clone project
```bash
git clone https://github.com/luisUrielLeano/HSSAD_NODE.git
```
This Command will copy the full project to your local environment

### Setting up project
```bash
cd hssad_node
npm install
```
`cd hssad_node` Move into Node Project Folder and `npm install` to install all dependency.

### Run Project
```bash
npm start
```
Run `npm start` to start the node server


## Folder Structure
```
📦HSSAD_NODE
 ┣ 📂components             #All the main components organized by components folders.
 ┃ ┣ 📂auth.                #Each folder could contain controller, service and model files.
 ┃ ┃ ┣ 📜authController.js
 ┃ ┃ ┗ 📜authService.js
 ┃ ┣ 📂quiz
 ┃ ┃ ┣ 📜question.js
 ┃ ┃ ┣ 📜quizController.js
 ┃ ┃ ┗ 📜quizService.js
 ┃ ┣ 📂survey
 ┃ ┃ ┣ 📜survey.js
 ┃ ┃ ┣ 📜surveyController.js
 ┃ ┃ ┗ 📜surveyService.js
 ┃ ┗ 📂users
 ┃ ┃ ┣ 📜user.js
 ┃ ┃ ┣ 📜userController.js
 ┃ ┃ ┗ 📜userService.js
 ┣ 📂routes                 #Contains all routing logic.
 ┃ ┣ 📂middleware           #Code for specific actions in routing.
 ┃ ┃ ┗ 📜isAuth.js          #e.g authentication logic by JSON Web Token.
 ┃ ┗ 📜api.js               #Defines all the routes and its respective methods.
 ┣ 📂utils                  #Common use logic throughout the application.
 ┃ ┣ 📜asyncWrapper.js      #Wrapper to be able to use async-await style in controllers.
 ┃ ┣ 📜hashPassword.js      #Contains the methods to encrypt / decrypt passwords
 ┃ ┗ 📜isValidMail.js       #Checks that email is valid using regular expressions.
 ┣ 📜.eslintrc.json         #Specifies the ESLint configuration.
 ┣ 📜.gitignore             #Ignores specified files in the control version.
 ┣ 📜app.js                 #Contains the code for Server initialization.
 ┣ 📜config.js              #Logic to load all env variables into an object.
 ┣ 📜.env                   #Contains all api keys, DB string connection and environment variables. 
 ┗ 📜package.json           #Contains all the dependencies and their respective version.
```
## REST API
### API reference
You can use your own localhost server URL and the port you choose.


| Route |  Method | Parameters | Description |
|-------|:------:|:------:|---------|
| /auth | Post | username, password|Admin/super user login |
| /user | Post | userInfo |Create admin/super useer |
| /quiz | Get  | N/A     |Get the questions for the survey|
| /survey | Post | surveyInfo|Create new survey|
| /survey | Get | N/A | Get all the surveys aswered |

## Database
MongoDB used as Database.

## License
[MIT](https://choosealicense.com/licenses/mit/)
