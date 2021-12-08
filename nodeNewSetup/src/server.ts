// eslint-disable @typescript-eslint/no-var-requires 
import { config } from "dotenv";
import path from "path";
const ENV_FILE = path.join(__dirname, ".env");
config({ path: ENV_FILE });

import express, { NextFunction, Request, Response } from "express";
import fs from "fs";
import { dbConnection } from "./database/utils";
import loggerMiddleware from "./middleware/loggerMiddleware";

const useragent = require("express-useragent");
const cors = require("cors");
dbConnection();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(useragent.express());

/**
 * ----------------------------- Start of V2 APIs ------------------------
 */

fs.readdirSync(path.resolve(__dirname, "routes")).forEach((file) => {
  if (file.includes(".js") && !file.includes(".js.")) {
    console.log(file);
    const { router, basePath } = require(`./routes/${file}`);
    app.use(basePath, loggerMiddleware, router);
  }
});

/**
 * ----------------------------- End of V2 APIs ------------------------
 */

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({ message: "Hello world" });
});

app.get("*", function (req, res) {
  return res.status(404).send({ message: "APIs route not found" });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});

//This function need to have 4 parameters to work properly limitation from Express
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(`Something went wrong ${err.message}, Errors : ${err}`);
  return err;
});