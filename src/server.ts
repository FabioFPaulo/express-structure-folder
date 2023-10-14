import express from "express";
import { router } from "./infra/routes";
import "dotenv/config";
import { loggerRequest } from "./infra/middlewares/logger";

console.log(process.env.NODE_ENV);
console.log(__dirname);
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(loggerRequest);
app.use(router);

// log all requests to access.log

app.listen(PORT, () =>
  console.log(`Server customer is running on port ${PORT}`)
);
