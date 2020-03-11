const express = require('express') ;
const bodyParser = require('body-parser') ;
const mongoose = require('mongoose') ;
const items = require('./routes/api/items') ;
const PORT = process.env.PORT || 5000 ;


const app = express();

//Body middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI ;

// connect to mongo
mongoose.connect(db , {useNewUrlParser: true , useUnifiedTopology: true })
    .then(()=>{
        console.log('DB connnected.')
    })
    .catch(err=>{
        console.log(err)
    })

// use routes
app.use('/api/items' , items) ;

app.listen(PORT , ()=> console.log(`Server is running at ${PORT}`))