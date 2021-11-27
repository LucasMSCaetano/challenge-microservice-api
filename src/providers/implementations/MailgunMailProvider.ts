import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import "dotenv/config";
import mailgunTransport from "nodemailer-mailgun-transport";
export class MailgunMailProvider implements IMailProvider{
    async sendMail(message: IMessage): Promise<void> {
        const auth = {
            auth: {
              api_key: process.env.API_KEY,
              domain: process.env.DOMAIN
            }
          }
        const nodemailerMailgun = nodemailer.createTransport(mailgunTransport(auth));

        nodemailerMailgun.sendMail({
            to:{
                name: message.to.name,
                address: message.to.email
            },
            from:{
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}