const express = require("express"); 
const app = express(); 

app.use(express.json()); 

app.get("/hello", (req, res) => {
    const numbers = Array.from({ length: 101 }, (_, i) => i).join("-");
    res.send(`The numbers are: ${numbers}`);  
}); 

app.get("/test", (req, res) => {
    res.sendFile("./view/home.html", { root: __dirname }); 
}); 

app.post("/path", (req, res) => { // Changed to POST
    console.log(req.body); 
    res.send("wnek ay"); 
}); 

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000"); 
}); 