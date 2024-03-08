import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from './routes/web'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3006;

configViewEngine(app);
initWebRoute(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
