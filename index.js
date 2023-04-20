const express = require("express");
const app = express();
const port = 3001


app.get("/", (req,res) => {
    return res.status(200).send({
        message: "Hellow Docker", status: 200
    })
})


app.listen(port, () => console.log(`server ruuning in ${port}`));