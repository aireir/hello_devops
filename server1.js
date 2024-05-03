const express = require("express")
var app = express()
app.get("/",function(request,response){response.send("Hello devops World!")})
app.listen(10001, function () {
    console.log("Started application on port %d", 10000)
});
