const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/dist/Ecoffe.Frontend'));

app.get ('/*',(req,res)=> {
    res.sendFile(__dirname + '/dist/Ecoffe.Frontend/index.html');
});

app.listen(PORT,()=>{
    console.log('servidor iniciado na porta ' + PORT);
})