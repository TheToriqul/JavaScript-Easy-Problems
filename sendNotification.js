// sendNotification.js

function sendNotification(email) {
  if (typeof email !== 'string' || !email.includes('@')) {
    return "Invalid Email";
  }

  const [username, domain] = email.split('@');
  return `${username} sent you an email from ${domain}`;
}
