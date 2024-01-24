// import express
const express = require('express');
const UserRouter = require('./routers/userRouter');
const PostRouter = require('./routers/postRouter');

const cors = require('cors');

// initialize express app
const app = express();

const port = 5000;

// middleware
app.use(cors(
    {origin: ['http://localhost:3000']}
));

app.use(express.json());

app.use('/user', UserRouter);
app.use('/post', PostRouter);


app.get('/', (req, res) => {
    res.send("Response from express");
} );

app.get('/add', (req, res) => {
    res.send('Response from add route');
})

app.get('/all', (req, res) => {
    res.send('response from all route')
})

app.get('/update', (req, res) => {
    res.send('response from update route')
})

app.get('*', (req, res) => {
    res.send('404 not found')
})

app.listen(port, () => {console.log('server started'); } );