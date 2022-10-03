import express from "express";

const app = express();

app.get("/api/test", (req,res)=> {

    res.status(200).send({
        success:true,
        message: "Server is working..."
    })
})

export default app;