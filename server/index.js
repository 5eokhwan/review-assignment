const express = require("express");
const app = express();
const port = 5000;
const data = require("./data");

app.get("/front_test_review", (req, res) => {
  const resData = { ...data, data: [...data.data] };
  if (req.query.SUBJECT) {
    resData.data = resData.data.filter(
      (v) => v.subject_view_name === req.query.SUBJECT
    );
  }
  if (req.query.YEAR) {
    resData.data = resData.data.filter((v) => v.year_name === req.query.YEAR);
  }

  resData.total = resData.data.length;

  const idx_min = req.query.SIZE * (req.query.OFFSET - 1);
  const idx_max =
    req.query.SIZE * req.query.OFFSET > resData.total
      ? resData.total
      : req.query.SIZE * req.query.OFFSET;
  resData.data = resData.data.slice(idx_min, idx_max);
  console.log(idx_min, idx_max);
  res.json(resData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
