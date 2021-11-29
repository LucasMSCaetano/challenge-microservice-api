import { Router } from "express";
import { createMailController } from "./useCases/CreateMail";
import { listMailController } from "./useCases/ListMail";

const router = Router();

router.post("/mail", (request, response) =>{
    return createMailController.handle(request, response);
})

router.post("/list", (request, response) =>{
    return listMailController.handle(request, response);
})

  
export { router }