export interface ICreateMailRequestDTO{
    id: string;
    toName: string;
    toEmail: string;
    fromName: string;
    fromEmail: string;
    subject: string;
    body: string;
}