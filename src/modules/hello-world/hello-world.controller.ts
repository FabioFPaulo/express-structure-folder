import { Request, Response } from "express";
import { HelloWorldUseCase } from "./hello-world.usecase";

export class HelloWorldController {
  constructor() {}

  async handle(request: Request, response: Response) {
    const usecase = new HelloWorldUseCase();
    const message = await usecase.execute();
    return response.status(500).json({
      message,
    });
  }
}
