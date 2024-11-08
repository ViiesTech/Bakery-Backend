const express = require('express');
const app = express();
const port = 3020; // Example port, change as needed
const Route = require('./Routes/Routes.js')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
const dotenv = require('dotenv')
dotenv.config()


const DB = require('./Config/ConnectDB.js')
DB()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json()) 
app.use(express.urlencoded({ extended: true }));

app.use("/api", Route)


app.get('/',(req, res)=>{
    res.send({
        success: true,
        dev: "Project runs"
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});


module.exports = app;
