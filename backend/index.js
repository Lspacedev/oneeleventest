import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("IS ALIVE!");
});

app.post("/api", (req, res) => {
  try {
    console.log(req);
    const { data } = req.body;
    if (data.length === 0) {
      return res.status(500).json({ error: "Invalid input provided!" });
    }
    let arr = data.split("");
    arr.sort();

    return res.status(200).json({ word: arr });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occured while transforming string!" });
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
