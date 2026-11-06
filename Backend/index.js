const express = require("express")
require("dotenv").config()
const mongo = require("mongoose")
const cors = require("cors")


const app = express()
// app.use(cors()) // middleware   connect to one domain to another domain 
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json())  // when send data from client side like (react js)

// mongo connection -------
mongo.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB connected ✅");
    }).catch((error) => {
        console.log(error);
    })

// C R U D

const MyUser = require("./model/db")
// create api ----

app.post("/create", (req, res) => {
    MyUser.create(req.body)  //  name  email  number
        .then((re) => res.json(re))
        .catch((error) => res.json(error))
})

// read api ---
app.get("/", (req, res) => {
    MyUser.find({})  // return all data from DB
        .then((re) => res.json(re))
        .catch((error) => res.json(error))
})

// delete api ------
app.delete("/delete/:id", (req, res) => {
    const myid = req.params.id
    MyUser.findByIdAndDelete({ _id: myid }) // _id means get data from mongodb
        .then((re) => res.json(re))
        .catch((error) => res.json(error))
})




// Update -----
app.get('/getdata/:id', (req, res) => {
    const myid = req.params.id
    MyUser.findById({ _id: myid })
        .then((re) => res.json(re))
        .catch((error) => res.json(error))
})

app.put("/update/:id", (req, res) => {
    const myid = req.params.id
    console.log(myid);

    MyUser.findByIdAndUpdate({ _id: myid }, {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
    })
        .then((re) => res.json(re))
        .catch((error) => res.json(error))
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server is running on 4500 port");
})