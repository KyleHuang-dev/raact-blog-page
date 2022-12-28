const express = require("express");
const app = express();
const cors = require("cors")

const mainRoutes = require("./routes/main");

require("dotenv").config({ path: "./config/.env" });
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", mainRoutes);

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on PORT ${process.env.PORT}, you better catch it!`);
});