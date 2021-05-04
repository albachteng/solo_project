const express = require('express'); 

const app = express();
const path = require('path'); 
const apiRouter = require('./routes/api');

// handle parsing request body
app.use(express.json);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// TODO: character ROUTER logic
app.use('/api', apiRouter);

// TODO: DB ROUTER logic?

// catch-all route handler
app.use((req, res) => res.status(404).send('A Fightr knows not this path. A Fightr must fight!')); 

// global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(3000, () => {
    console.log('Listening on port 3000');
}); 