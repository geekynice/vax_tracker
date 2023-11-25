const PORT = 8000;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

//get all the restaurant data
app.get("/tracker", (req, res) => {
  const url = process.env.ENDPOINT;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": process.env.ASTRA_TOKEN,
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => res.json(json))
    .catch((err) => console.log("error:" + err));
});

function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not Found");
  next(error);
}

function errorHandler(error, req, res) {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));


// {
//   "clientId": "RaOxwUxGQUdWGCSneCoogiiG"
//   "secret": "5rac,-6QivzIE92d6uKw07nnkFdm7yEPAkqKBUhoPF6IZuakX,cAA3e0R7Z.tZlz4jva+pwX+7b2Ck5H3S9UT0B5zZ8JE8pcn5E3JJXjGIEtC6tWaBW9aUymo77xkJKf"
//   "token": "AstraCS:RaOxwUxGQUdWGCSneCoogiiG:73bbd81c407660c796c47fd8aeca43211f5ea2ab1d064040a5ab0752ddc3f7c9"
// }

// {
//   "clientId": "arGEAsFMWqXzvLPHWyQkRTjQ"
//   "secret": "pfCLbgN53U.6qbdmWZtr2QT-MW3,XdD3f+rQRgY_vpgr6ZI6IrcxhLo_eY5MZrTDlP1pIWQA7WmEGHEofWXxHI95lTIlc1XFjOs-THzbrPK+2+i8qBqlOzqY-R09MJIf"
//   "token": "AstraCS:arGEAsFMWqXzvLPHWyQkRTjQ:69bad1bb3b0f177374e314d608c7a9f616efab463ed60be8ecec46a6ec3f313e"
// }