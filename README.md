# UI Test Zemoga - Server - Marco Useche

Live Project [here](https://rule-of-thumb-marco-useche.herokuapp.com/ "here")

Client Code [here](https://github.com/MarUser04/ui-test-marco-useche "here")

This project was developed with:

- Node, version 14.17.0
- Express, version 4.17.2
- Mongoose
- Nodemon

This project meets the requirements of fetching the data of controversial celebrities and their information to be loaded into the client code.  This data is in a **MongoDB Atlas** collection, which is connected via **Mongoose** and its client for **Node**. 

Steps to run the project locally

- Run `npm install`

- Create an `.env` file that has the following environment variable:

`MONGO_URI=mongodb+srv://Ebnb:Ebnb123**@rulethumb.3veg9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

This variable will be used for the connection to MongoDB Atlas.

- You can also add the port on which you want the application to run. By default, port **4000** is set

The chosen port must be updated in the environment variables of the client project, in its API_URL variable, [here](https://github.com/MarUser04/ui-test-marco-useche/blob/main/src/environments/environment.ts "here").

- Run the project with `npm run dev`

The project consists of two main paths

- `GET /api/controversial`, which returns the array of celebrities

- `POST /api/controversial/vote/:id`, which receives an** id** of a celebrity by parameter and a value in the body of the request (called **voteStatus**, being a string with two possible values *positive* or *negative*) and will update the votes for that celebrity, and return the updated object.
