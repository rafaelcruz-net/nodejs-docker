const app = require("express")();

app.get("/", (req, res) => {
  res.json({ message: "Node on Docker is cool 😍😍" });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
