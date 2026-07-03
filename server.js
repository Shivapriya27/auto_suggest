const express  = require('express');
const app = express();

const PORT  =  process.env.PORT || 3002;

app.listen(PORT, function(){
    console.log("Successfully Running at http://localhost:" + PORT);
})