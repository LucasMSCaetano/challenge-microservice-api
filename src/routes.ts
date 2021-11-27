import { Router } from "express";
import { createMailController } from "./useCases/CreateMail";

const router = Router();

router.post("/mail", (request, response) =>{
    return createMailController.handle(request, response);
})

export { router }