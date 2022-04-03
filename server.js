const express = require("express");
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
//Prepeare Custom Server
app
  .prepare()
  .then(() => {
    const server = express();
    // apply proxy in dev mode
    if (dev) {
      server.use(
        "/api",
        createProxyMiddleware({
          target: "https://vast-mesa-19498.herokuapp.com",
          changeOrigin: true,
        })
      );
    }

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on https://vast-mesa-19498.herokuapp.com");
    });
  })
  .catch((err) => {
    console.log("Error", err);
  });
