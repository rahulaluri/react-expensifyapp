const path          = require('path');
const express       = require('express');
const app           = express();
const publicPath    = path.join(__dirname,"..","Public");
const port          = 3000 || process.env.PORT;

app.use(express.static(publicPath));

app.get("*",(req,res)=> {
    res.sendFile(path.join(publicPath,'/index.html'))
})
app.listen(port,()=> {
console.log("Expensify server has started")
console.log(publicPath);
})