import { Request, Response } from "express";
import { CreateMailUseCase } from "./CreateMailUseCase";

export class CreateMailController{
    constructor(
        private createMailUseCase: CreateMailUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {id, toName, toEmail, fromName, fromEmail, subject, body} = request.body;
        try{
            await this.createMailUseCase.execute({
                id, toName, toEmail, fromName, fromEmail, subject, body
            })
            return response.status(201).send();
        } catch(err){
            return response.status(400).json({
                message: err.message || 'Erro Inesperado'
            })
        }
    }
}