const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", async (req, res) => {
	return res.json("Hello World.");
});

app.listen(port, () => console.log(`Server stared port : ${port}`));
