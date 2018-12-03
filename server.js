const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('helloooodddddddd')
});

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(3000, () => {
    console.log('server port is running on 3000')
})