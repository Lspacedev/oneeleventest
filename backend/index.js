import express from "express";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/api", (req, res) => {
  try {
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
