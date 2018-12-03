const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;
mongoose
.connect(db)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// passport middleware
app.use(passport.initialize());

require('./config/passport')(passport);


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.listen(3000, () => {
    console.log('server port is running on 3000')
})