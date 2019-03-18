// Pull in Express.
const express = require('express');
// The glue layer between graphQL and Express JS
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

// Create a new express application.
const app = express();

// any request coming to server with route /graphql will be handled here.
app.use('/graphql', expressGraphQL({
    // schema: schema, can be replaced as below since the name and property are same [ES6]
    schema,
    graphiql: true          // dev tool to make query against dev platform
}));

// listen to port 40000.
app.listen(4000, () => {
    // callback: after listening -- do something.
    console.log('Listening');
});