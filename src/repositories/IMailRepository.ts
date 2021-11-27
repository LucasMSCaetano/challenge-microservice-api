import { Mail } from "../model/Mail";

export interface IMailRepository{
    findByKey(id: string): Promise<Mail>;
    save(mail: Mail): Promise<void>;
}