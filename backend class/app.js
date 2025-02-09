const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const process = require("process")
const multer = require("multer")
const path = require("path")
const app = express()

dotenv.config({path: "./config.env"})
app.use(express.json(bodyParser))
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"))

main().catch((err) => console.log("this is the error: " + err));


async function main() {
  await mongoose.connect(process.env.DATABASE_LOCAL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const blogSchema = mongoose.Schema({
        title: String,
        content: String,
        file: String,
        
})

const Blog = mongoose.model("Blog", blogSchema) 

const corsOptions = {
        origin: "*",
        credentials: true,
        optionSuccessStatus: 200
}

app.use(cors(corsOptions))


app.get("/adminData", (req, res) => {
  Blog.find({})
    .then((blogPosts) => {
       res.json({
         message: blogPosts,
       })
    }).catch(err => console.log(err))
})

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    return callback(null, "./public/uploads");
  },
  filename: function (req, file, callback) {
    return callback(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// app.post("/upload", upload.single("file"), (req, res) => {
//    console.log(req.file.filename);
//    console.log(req.body);
// })

app.post("/adminData", upload.single("file"), (req, res) => {
  const { title, desc} = req.body;
  const file = req.file.filename
  const post = { title: title, content: desc, file: file };
  Blog.create(post)
    .then(() => console.log("created in the database"))
    .catch((err) => console.log(err));

  console.log(post);
  return;
});

app.get("/blog/:id", (req, res) => {
        const requestedUrl = {_id: req.params.id} 
  Blog.findOne(requestedUrl)
   .then(post => {
     res.json({
      message: post
    })
   }).catch(err => console.log(err))
})

app.get("/edit/:id", (req, res) => {
        const requestedUrl = {_id: req.params.id} 
  Blog.findOne(requestedUrl)
   .then(post => {
     res.json({
      message: post
    })
   }).catch(err => console.log(err))
})

app.put("/edit/:id", upload.single("file"), (req, res) => {
  const requestedUrl = { _id: req.params.id }
  const file = req.file.filename
  if (file != undefined)
  {
    Blog.updateOne(requestedUrl, {
      $set: {
        title: req.body.title,
        content: req.body.content,
        file: req.file.filename
      }
    }) .then(post => {
      console.log(post)
     }).catch(err => console.log(err))


  } else
  {
    Blog.updateOne(requestedUrl, {
      $set: {
        title: req.body.title,
        content: req.body.content,
      },
    })
      .then((post) => {
        console.log(post);
      })
      .catch((err) => console.log(err));
  }
})


app.delete("/delete/:id", (req, res) => {
   const requestedUrl = {_id: req.params.id} 
   Blog.deleteOne(requestedUrl)
    .then(() => console.log("Deleted Successfully"))
    .catch(err => res.send(err))
})

app.get("*", (req, res) => {
        res.send("404 this page does not exist")
})
const port = process.env.PORT
app.listen(port, () => {
    console.log("listening on port " + port)
})