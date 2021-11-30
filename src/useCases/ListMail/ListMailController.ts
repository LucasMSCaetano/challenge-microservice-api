import { Request, Response } from "express";
import {ListMailUseCase} from './ListMailUseCase'

export class ListMailController {
    constructor(
        private listMailUseCase: ListMailUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {domain} = request.body;
        try{
            await this.listMailUseCase.execute({
                domain 
            })
            return response.status(200).send();
        }catch(err){
            return response.status(400).json({
                message: err.message || 'Erro Inesperado'
            })
        }
    }
}
