const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const app = express();
const credential = require("./credential.ts");

admin.initializeApp({
  credential: admin.credential.cert(credential),
});

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization"
  );
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

const db = admin.firestore().collection("products");

app.get("/products", async (req, res) => {
  const query = await db.get();
  const retorno = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  res.status(200).json(retorno);
});

app.post("/products/delete", (req, res) => {
  db.doc(`${req.body.id}`).delete();
  res.status(200).json();
});

app.post("/products/insert", (req, res) => {
  db.add(req.body);
  res.status(200).json();
});

app.post("/products/update", (req, res) => {
  db.doc(req.body.id).update({ ...req.body.changedProduct });
  res.status(200).json();
});

app.listen(3000, () => {
  console.log("Run Auth API Server");
});
