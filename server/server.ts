import next from 'next'
import express from "express";
import cookieParser from 'cookie-parser';
import cors from "cors";

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const server: express.Application = express();


app.prepare().then(() => {

  server.use(express.json());
  server.use(cors());
  server.use(cookieParser());

  server.get("/test", (req: express.Request, res: express.Response) => {
      res.status(200).send("working");
  });

  server.all("*", (req: express.Request, res: express.Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    // our only exception to avoiding console.log(), because we
    // always want to know when the server is done starting up
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  })
})
