import { Router } from "express";
import { HelloWorldController } from "../modules/hello-world/hello-world.controller";

const router = Router();

router.get("/", (request, response) => {
  new HelloWorldController().handle(request, response);
});

export { router };
