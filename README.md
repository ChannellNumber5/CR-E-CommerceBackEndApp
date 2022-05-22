# E-Commerce Back End Application

This application's repo can be found [here](https://github.com/ChannellNumber5/CR-E-CommerceBackEndApp) on Github! 

## Description
This is a command line application that simulates the back end code for an internet retail website. The simulated website has products and associates them based on categories, tags and product tags and the client facing application interfaces with the server side application to create, retreive, update and delete (CRUD) products, tags, and categories. 

This application is an express application, running on a server and using API routes and RESTful CRUD operations to manipulate and retreive data. The hardest part of coding this application is understanding the associations between models, where products are associated with categories, because of the categories they fall into. Then products and tags are associated by another table that organizes Product Tags specifically. Trying to source individual rows in the product or tags tables, while still retrieving the necessary details proved difficult.

## User Instructions
If you're looking for a tutorial video, you can find it [here](https://youtu.be/7gjPtQ8Qmjo) on youtube.

This product is run in the command line, so the user must use some sort of command line application to effectively run it. One the code is cloned, the user must run an `npm i` to load in all the node manager packages that the application depends on. Then the user must create the database in mySQL by sourcing the schema.sql file and then seeding the created database by running `npm run seed`. 

Once the database is created and seeded, the user can run `npm start` to start up the server and can then run tests on insomnia or hook up the application to their front end website. If the user is performing the latter - be sure to seed your own data!

## Credits
The UW Coding Bootcamp for the project idea and the boilerplate code.

## License
No license on this code as of yet.


## Resources
- [Sequelize Validations](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)
- [Copying Files in the Command Line](https://www.earthdatascience.org/courses/intro-to-earth-data-science/open-reproducible-science/bash/bash-commands-to-manage-directories-files/#:~:text=Similarly%2C%20you%20can%20copy%20an,directory%2Dname%2D2%20).)
- [Model Default Values](https://sequelize.org/docs/v6/core-concepts/model-basics/)
