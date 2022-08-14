from django.core.mail import EmailMessage
from dotenv import load_dotenv

import os,smtplib

load_dotenv()


class Util:
    @staticmethod
    def send_mail(data):
        mail = EmailMessage(
            subject=data["email_subject"],
            body=data["email_body"],
            from_email=data["from_email"],
            to=[data["to_email"]],
        )
        mail.send()
    
