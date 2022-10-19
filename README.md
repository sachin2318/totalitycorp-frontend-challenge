# Tesla Clone Made By Sachin Anand

Tesla Clone made with Reactjs. 

## Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

## How To Use 🔧

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/sachin2318/totalitycorp-frontend-challenge.git
# Go into the repository
$ cd tesla-clone
# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using NPM:

```bash
# Install dependencies
$ npm install
# Start development server
$ npm start
```
Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server.


## Technologies used 🛠️
- [ReactJS](https://reactjs.org) - Javascript library
- Download the images from the tesla website and icons are download from https://feathericons.com/ here.
- [React-router](https://www.npmjs.com/package/react-router) - Routing tool but not used in our project
- CSS
-No external package is used for all the components like sections of cars, header, and footer made by HTML and CSS only.
-I made a hook called useWindowDimensions for getting the dimension of the user browser.
- Break components into small components like the homepage is broken into the header, footer, and section further section is divided into the Hero component.
Footer
