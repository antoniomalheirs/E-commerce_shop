const express = require("express");
const passport = require("passport");
const router = express.Router();
const React = require("react");
const ReactDOM = require("react-dom/server");

const { default: Newshop } = require("../../frontend/views/Newshop.jsx");
const { default: Feetpage } = require("../../frontend/views/Feetpage.jsx");

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
};
  
router.use((req, res, next) => {
    console.log("Shop Time: ", Date.now());
    next();
});

router.get("/newB", isAuthenticated, (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <title>Hot Dog Adams</title>
      </head>
      <body>
        ${ReactDOM.renderToString(<Newshop />)}
        ${ReactDOM.renderToString(<Feetpage />)}
      </body>
    </html>`;
  res.send(html);
});

module.exports = router;