const mongoose = require('mongoose') ;
const schema = mongoose.Schema ;

// Create Scheme
const ItemSchema = new schema({
    name : {
        type : String,
        require : true
    },
    date : {
        type : Date ,
        default : Date.now
    }
});

module.exports = Item = mongoose.model('item' , ItemSchema) ;