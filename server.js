const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const server = express();
const connection = require("./config/connection")
const userRouter = require("./routes/userRouter")
const detergentRouter = require("./routes/detergentRouter")
const snacksRouter = require("./routes/snacksRouter")
const orderRouter = require("./routes/orderRouter")



server.use(cors());
server.use(express.json());
server.use("/user", userRouter);
server.use("/detergent", detergentRouter);
server.use("/snacks", snacksRouter);
server.use("/order", orderRouter);



server.get("/", (req, res) => {
    res.send("hello world");
})


server.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`server is running on ${process.env.PORT} and db connected`);

    } catch (error) {
        console.log(error);

    }
})



