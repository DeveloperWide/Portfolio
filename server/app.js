const express = require("express");
const app = express();
const cors = require("cors");

// Routes
const userInfoRoutes = require("./routes/userInfoRoutes");

let corsOptions = {
    origin: "http://localhost:5173/",
}

// middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use("/api/user/" , userInfoRoutes);

app.listen(8080, () => {
    console.log(`Server is running on PORT 8080`)
})