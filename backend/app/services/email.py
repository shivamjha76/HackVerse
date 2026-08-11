import smtplib
from email.message import EmailMessage

from app.core.config import settings


def send_verification_email(

    recipient_email: str,
    verification_token: str,
):
    verification_link = (
    f"http://localhost:3000/verify-email"
    f"?token={verification_token}"
)

    message = EmailMessage()

    message["Subject"] = "Verify your HackVerse email"
    message["From"] = settings.SMTP_USER
    message["To"] = recipient_email

    message.set_content(
        f"""
Hello,

Thank you for registering on HackVerse.

Please verify your email address by opening this link:

{verification_link}

This verification link will expire in 24 hours.

If you did not create this account, you can safely ignore this email.

Regards,
HackVerse Team
"""
    )

    with smtplib.SMTP(
        settings.SMTP_HOST,
        settings.SMTP_PORT
    ) as smtp:
        smtp.starttls()

        smtp.login(
            settings.SMTP_USER,
            settings.SMTP_PASSWORD
        )

        smtp.send_message(message)
        
def send_password_reset_email(
    recipient_email: str,
    reset_token: str,
):
    reset_link = (
        f"http://localhost:3000/reset-password"
        f"?token={reset_token}"
    )

    message = EmailMessage()

    message["Subject"] = "Reset your HackVerse password"
    message["From"] = settings.SMTP_USER
    message["To"] = recipient_email

    message.set_content(
        f"""
Hello,

We received a request to reset your HackVerse password.

You can reset your password by opening this link:

{reset_link}

This password reset link will expire in 1 hour.

If you did not request a password reset, you can safely ignore this email.

Regards,
HackVerse Team
"""
    )

    with smtplib.SMTP(
        settings.SMTP_HOST,
        settings.SMTP_PORT
    ) as smtp:
        smtp.starttls()

        smtp.login(
            settings.SMTP_USER,
            settings.SMTP_PASSWORD
        )

        smtp.send_message(message)