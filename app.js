const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("index", {
		meta: {
			title: "Floema",
			description:
				"The surprise of what is possible to make with a simple and thin thread.",
		},
	});
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
