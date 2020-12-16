import nodemailer, { Transporter } from 'nodemailer';
import IMailProvider from  '../model/IMailProvider';



export default class EtherealMailProvider implements IMailProvider {
  private client:Transporter;

  constructor(){
    nodemailer.createTestAccount().then(account => {
      const transporter =  nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure, // true for 465, false for other ports
        auth: {
          user: account.user, // generated ethereal user
          pass: account.pass, // generated ethereal password
        },
      });
      this.client = transporter;
    });
  }
  public async sendEmail(to: string, body: string): Promise<void>{
    const message = await this.client.sendMail({
      from: 'Equipe GoBarber <equipe@gobarber.com.br>',
      to,
      subject:'Recuperação de senha',
      text: body,
    });

    console.log('Message sent: %s', message.messageId);
    console.log('PreView URl %s', nodemailer.getTestMessageUrl(message));
  }
}
