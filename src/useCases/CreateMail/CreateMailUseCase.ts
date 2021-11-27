import { Mail } from "../../model/Mail";
import { IMailProvider } from "../../providers/IMailProvider";
import { IMailRepository } from "../../repositories/IMailRepository";
import { ICreateMailRequestDTO } from "./CreateMailDTO";

export class CreateMailUseCase{
    constructor(
        private mailRepository: IMailRepository,
        private mailProvider: IMailProvider,
    ){}

    async execute(data: ICreateMailRequestDTO){
        const keyAlreadyExists = await this.mailRepository.findByKey(data.id)

        if(keyAlreadyExists){
            throw new Error('A chave já foi criada');
        }

        const mail = new Mail(data);

        await this.mailRepository.save(mail);

        this.mailProvider.sendMail({
            to:{
                name: data.toName,
                email: data.toEmail
            },
            from:{
                name: data.fromName,
                email: data.fromEmail
            },
            subject: data.subject,
            body: data.body
        })
    }
}