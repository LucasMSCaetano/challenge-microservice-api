import {IListMailRequestDTO} from "./ListMailRequestDTO";
import "dotenv/config";

var mailgun = require('mailgun-js')({ apiKey: process.env.API_KEY, domain: process.env.DOMAIN });

export class ListMailUseCase{
     async execute(data: IListMailRequestDTO){
        
        mailgun.get(`/${data.domain}/events`,  function (error, body) {
            console.log(body.items);
          });
    }
}