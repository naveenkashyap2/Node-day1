

//--------------------------REST API testing----------------------------\\



import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

// Logging Middleware
app.use((req, res, next) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Body:", req.body);

  next();
});

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome Naveen");
});

//admin
app.use("/admin",(req,res,next) =>{
  if(req.body.password === "secret"){
next();
  } else{
    res.end("Invalid Credentials");
  }
});

app.post('/admin',(req,res) =>{
  res.end("Hello Admin Bhai ji ");
});

// GET User
app.get("/user", (req, res) => {
  res.send("Home Route");
});

// POST User
app.post("/user", (req, res) => {
  console.log(req.body);

  res.status(200).json({
    success: true,
    message: "Post Naveen",
    data: req.body,
  });
});

// Login
app.get("/login", (req, res) => {
  res.send("Logged In");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
