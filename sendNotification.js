function sendNotification(email) {
  if (typeof email !== 'string' || !email.includes('@') || email.split('@').length > 2) {
    return "Invalid Email";
  }

  const [username, domain] = email.split('@');
  return `${username} sent you an email from ${domain}`;
}
