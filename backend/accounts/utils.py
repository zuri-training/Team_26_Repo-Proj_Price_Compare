from django.core.mail import EmailMessage

class Util:
    @staticmethod
    def send_mail(data):
        mail = EmailMessage(
            subject=data['email_subject'], body=data['email_body'], to=[data['to_email']]
        )
        mail.send()