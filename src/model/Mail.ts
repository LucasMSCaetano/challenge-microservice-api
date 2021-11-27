import { v4 as uuidv4 } from "uuid";

export class Mail{
    public readonly id: string;

    public toName: string;
    public toEmail: string;
    public fromName: string;
    public fromEmail: string;
    public subject: string;
    public body: string;

    constructor(props: Omit<Mail, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id){
            this.id = uuidv4();
        }
    }
}