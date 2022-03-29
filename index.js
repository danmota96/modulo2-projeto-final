const express = require("express");
const { set } = require("express/lib/application");
const { get } = require("express/lib/response");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


app.listen(3000);