
const express = require('express');
const app = express();
const port = 5000 ;

app.get('api/student' , (req , res)=>{
    const student = [
        {
            id : 1 ,
            name : 'Suman Bhattarai' ,
            age : 21
        } ,
        {
            id : 2 ,
            name : 'Anil Tiwari' ,
            age : 20
        } ,
        {
            id : 3 ,
            name : 'Mikal Poudel' ,
            age : 19
        } ,
        {
            id : 4 ,
            name : 'Sujan Bhattarai' ,
            age : 22
        }
    ];
    res.json(student) ;
})

app.listen(port , ()=>{
    console.log('Server running at : ' + port ) ;
})