const express = require("express");
require("dotenv/config");
const mongoose = require("mongoose");
const cors = require("cors");
const postsRouter = require("./routes/posts");

const MONGOOSE_URL = `mongodb+srv://ska7:${process.env.MONGOOSE_PASSWORD}@main.xhae7.mongodb.net/ArtHub?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 4111;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/posts", postsRouter);

mongoose
  .connect(MONGOOSE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
