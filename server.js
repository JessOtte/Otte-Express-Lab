// require the Express module
const expressVariable = require('express');
const cartItems = require('./cartItems')


// creates an instance of an Express server
const app = expressVariable();

// Convert params and body into usable JSON
app.use(expressVariable.json());


app.use('/', cartItems);

// define the port
const port = 7878;

// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));



console.log('Listening at http://localhost:7878/cart-items ...')
