import { Mail } from "../../model/Mail";
import { IMailRepository } from "../IMailRepository";

export class PostgresMailRepository implements IMailRepository{
    private mails: Mail[] = [] 

    async findByKey(id: string): Promise<Mail>{
        const mail = this.mails.find(mail => mail.id === id);

        return mail;
    }

    async save(mail: Mail): Promise<void>{
        this.mails.push(mail);
    }
}