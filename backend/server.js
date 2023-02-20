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

const productsDb = admin.firestore().collection("products");

app.get("/products", async (req, res) => {
  const query = await productsDb.get();
  const products = query.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  res.status(200).json(products);
});

app.post("/products/delete", (req, res) => {
  productsDb.doc(`${req.body.id}`).delete();
  res.status(200).json();
});

app.post("/products/insert", async (req, res) => {
  const doc = await productsDb.add(req.body);
  const query = await doc.get();
  const product = query.data();
  res.status(200).json({ ...product, id: query.id });
});

app.post("/products/update", (req, res) => {
  productsDb.doc(req.body.id).update({ ...req.body.changedProduct });
  res.status(200).json();
});

app.listen(3000, () => {
  console.log("Run Auth API Server");
});
