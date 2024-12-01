const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const routes = require("./Routes/index");
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());


const port =  process.env.PORT||8080;

app.use("/api" , routes);


app.listen(port, () => {
	console.log(`Server is running on  http://localhost:${port}/`);
});