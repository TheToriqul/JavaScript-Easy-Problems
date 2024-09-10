function sendNotification(email){
  if (typeof email !== 'string' || !email.includes('@') || email.split('@').length > 2){
    return "Invalid Email";
  }
  const [username, domain] = email.split ('@');
  return username + " sent you an email from " + domain;
}

// Test cases
console.log("\nProblem 2: Send Notification");
console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));

// Additional test case
console.log(sendNotification("john.doe@@example.co.uk"));