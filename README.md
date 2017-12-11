# React-Auth-Crud-Boilerplate

A React app boilerplate that includes both CRUD functionality (with a MongoDB connection) and authentication (with PassportJS).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

See a demo of this boilerplate at https://immense-shelf-44738.herokuapp.com/

### Installing

Clone the repository:

```shell
$ git clone https://github.com/jehunter5811/react-auth-crud-boilerplate
$ cd react-auth-crud-boilerplate
$ npm install
```

Before running this locally, you'll want to take care of a couple of tasks.

1) Get your DB up and running.

This project is a MERN project, so it makes use of MongoDB. I recommend using mLab's Sandboax tier to get started. Once you have set up your DB, you will see a connection link like this:

mongodb://<dbuser>:<dbpassword>@ds127436.mlab.com:27436/your-project-name

In the root of the project directory, find the config file. Create a file there called dev.js and include this:

```
module.exports = {
  googleClientID: '',
  googleClientSecret: '',
  mongoURI: '',
  cookieKey: ''
};
```
Enter your mLab connection link (with user name and password filled out properly in the designated area). Make sure you enter the link between the single-quotes.

2) Set up your Google Developer Console credentials.

The first step here is to go to https://console.developers.google.com/ and create a new project. Once done, click the Enable APIs and Services button. This project is set up with Google oAuth which actually runs through the Google+ API, so search for that on the API screen.

Once, selected, click the Credentials tab on the left and create new oAuth credentials. You'll have to give some basic info about your project, and then you'll be prompted to enter the "Authorized JavaScript origins" URL. Here, enter: http://localhost:5000

You'll also see the "Authorized redirect URIs." Here, you can enter: http://localhost:3000/auth/google/callback

Save that and you'll receive the Google Client ID and the Google Client Secret. Return to the project, go back to the dev.js file, and paste each into the respective slots (remember, between the single-quotes or it won't work).

Finally, in that same dev.js file, enter any random string of characters in the cookieKey section, again between the single-quotes only.

Now, you're ready to fire up the development server. If you haven't already, run:


```shell
$ npm run dev
```

With that, you'll be live at http://localhost:3000 and ready to log in and get started.


See a demo of this boilerplate at https://immense-shelf-44738.herokuapp.com/


### Extending the boilerplate

**Functionality**

There are a ton of ways to build this boilerplate into your real project. The user model and the item models can be updated so that you can collect any pieces of available info you want for your database. You can update the forms to collect specific pieces of information, update the action creators to make sure those forms fire off the necessary values, and more.

Some key files to remember if you are changing the data you want collected for your database:

-models  
--Items.js  
-client  
--src  
---actions  
----index.js  
---components  
----Form.js  
-routes  
--itemRoutes.js  

**Styling**

The base boilerplate code uses [Materialize](http://materializecss.com/). You can overwrite this by removing the link tag from the index.html file. Or, you can simply overwrite the styling in your own css file.

If you'd like to use another framework, be sure to update the classNames on all html elements within the React components.

## Deployment

To deploy, make sure you create production versions of both your mLab DB and your Google oAuth setup. These have to be setup as different projects. The project is already setup to feed the environment variable to your production server, so you just need to take a look at the prod.js file to see the structure to use when entering those environment variables in Heroku or whatever server you use.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [PassportJS](http://www.passportjs.org/) - The authentication framework used.

## Authors

**Justin Hunter**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Special hat tip to Stephen Grider's courses on building with React and MongoDB. His lessons were integral in my understanding of fullstack app development.
