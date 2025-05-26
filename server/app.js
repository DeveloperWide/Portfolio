const express = require("express");
const app = express();
const cors = require("cors");

// Routes
const projectRoutes = require("./routes/projectRoutes");

let corsOptions = {
    origin: "http://localhost:5173/",
}

// middlewares
app.use(cors(corsOptions));

app.use("/api/projects/" , projectRoutes);

app.listen(8080, () => {
    console.log(`Server is running on PORT 8080`)
})