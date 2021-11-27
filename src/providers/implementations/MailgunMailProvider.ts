import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import "dotenv/config";
import mailgunTransport from "nodemailer-mailgun-transport";

export class MailgunMailProvider implements IMailProvider{
    async sendMail(message: IMessage): Promise<void> {
        const auth = {
            auth: {
              api_key: 'a187576a934d1a450c12ae6e18e6317e-7dcc6512-fe12117d',
              domain: 'sandboxfc5413f331184bdfbf847efad4292c11.mailgun.org'
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