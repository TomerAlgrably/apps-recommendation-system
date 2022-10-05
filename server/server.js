const express = require('express');
const { httpLogger } = require('./middlewares');
var bodyParser = require('body-parser');
const recommendation = require('./routes/recommendation');
const categories = require('./routes/categories');
var cors = require('cors')




const app = express();
//Middlewares
app.use(httpLogger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

// app.use((req, res, next) => {
//     // res.header('Access-Control-Allow-Origin', '*');
//     // res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
//   });


// app.use('/', (req, res) => {
//     res.send('Nothing to see here');
//     // res.json(apps)
//     // res.json(categories)
// });

app.use('/recommendation', recommendation);
app.use('/categories', categories);


app.listen(3000, () =>
    console.log(`Server running on port 3000`));

module.exports = app;
