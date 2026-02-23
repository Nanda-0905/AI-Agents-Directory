import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Simple script to send a plain-text email via an SMTP server.
#
# Notes / explanation:
# - This uses the standard library `smtplib` and the `email.mime` helpers
#   to construct and send a MIME message.
# - We attempt an EHLO handshake, upgrade to TLS with STARTTLS when
#   supported by the server, and only call `login()` if the server advertises
#   the `AUTH` extension. Some relays allow unauthenticated sending if the
#   client IP is trusted; in that case authentication is skipped.
# - DO NOT hardcode real passwords in source files. Use environment
#   variables, a secrets manager, or a configuration file with restricted
#   permissions for production use.

# --- SMTP server configuration ---
smtp_server = "apps-relay.smtp.broadcom.com"
smtp_port = 587  # 587 is the standard port for STARTTLS
sender_email = "iss.appuser@broadcom.com"
# WARNING: storing passwords in source is insecure. Replace with a secure
# retrieval method (e.g. os.environ or keyring) before using in production.
sender_password = "P@ssw0rd202602BRCM"  # Use app password if required

# --- Email details ---
recipient_email = "nandakumartr@gmail.com"
subject = "Test Email from Python"
body = "Hello,\n\nThis is a test email sent using Python SMTP.\n\nRegards."

# Build a multipart MIME message and attach the plain-text body.
message = MIMEMultipart()
message["From"] = sender_email
message["To"] = recipient_email
message["Subject"] = subject
message.attach(MIMEText(body, "plain"))

try:
    # Create an SMTP client session object connected to the server.
    # The `timeout` parameter prevents indefinite blocking on network errors.
    server = smtplib.SMTP(smtp_server, smtp_port, timeout=10)

    # EHLO tells the server who we are and requests supported extensions.
    server.ehlo()

    # If the server supports STARTTLS, upgrade the connection to use TLS.
    # STARTTLS protects credentials and message contents in transit.
    if server.has_extn("starttls"):
        server.starttls()
        # Re-issue EHLO after STARTTLS to refresh server feature list.
        server.ehlo()

    # Debugging: print server features to help diagnose connectivity issues.
    # Remove or lower log level in production.
    print("Server features:", server.esmtp_features)

    # If the server advertises AUTH, attempt to authenticate.
    # Otherwise, assume the relay accepts unauthenticated sends (e.g., IP allowlist).
    if server.has_extn("auth"):
        if not sender_password:
            raise SystemExit(
                "Server requires AUTH but no password provided. Provide credentials or use an unauthenticated relay."
            )
        # `login()` sends the credentials to the server (over TLS if STARTTLS used).
        server.login(sender_email, sender_password)
    else:
        # Many internal relays accept mail without AUTH if the client IP is trusted.
        print("Server does not advertise AUTH — sending without authentication (relay must allow this).")

    # Send the message object built above. `send_message` handles MIME headers.
    server.send_message(message)
    print("Email sent successfully!")

except smtplib.SMTPAuthenticationError as e:
    # Authentication failed (bad credentials or not allowed).
    print("Authentication failed:", e)
except Exception as e:
    # Catch-all for other SMTP/network errors.
    print(f"Error sending email: {e}")

finally:
    # Attempt to close the connection cleanly. Ignore errors during shutdown.
    try:
        server.quit()
    except Exception:
        pass