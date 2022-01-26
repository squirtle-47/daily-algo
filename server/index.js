const express = require("express");
const app = express();
const path = require("path");
const router = require("./api");
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */

/**
 * define route handlers
 */

if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });
  app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });
  app.get("/signup", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });
  app.get("/stats", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });
}

app.get("/bundle.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/bundle.js"));
});

app.get("/main.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build/main.css"));
});

/**
 * handle API routes
 */
app.use('/api', router);

/**
 * catch-all route handler for any requests to an unknown route
 */

/**
 * express error handler
 */

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
