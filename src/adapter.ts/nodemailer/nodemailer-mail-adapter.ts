import { MailAdapter, SendMailData } from "../mail-adpter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "960137a2aa0689",
        pass: "8d267311a88e07"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <ali@feedget.com>',
            to: 'Alisson <alisson.julio.silveira@gmail.com>',
            subject,
            html: body
        });
    };
}