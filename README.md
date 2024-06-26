# Notes.tsx

## Notes.tsx Security Overview:

### Insecure Data Storage:
- Vulnerability Type: Storing sensitive data without proper encryption or protection.
- Description: User notes are stored in AsyncStorage without encryption, making them susceptible to unauthorized access if the device is compromised or the data store is breached.

### Improper Authentication:
- Vulnerability Type: Reliance on a simplistic authentication mechanism.
- Description: The application relies on a basic username-password combination for accessing notes. This method lacks robustness, especially if passwords are not securely hashed and stored.

### Insufficient Input Validation:
-  Vulnerability Type: Absence of adequate input validation.
- Description: The application does not thoroughly validate user inputs for note titles and equations, leaving it open to injection attacks or unexpected behavior.

### Insecure Code Practices:
- Vulnerability Type: Use of poor coding practices leading to security risks.
- Description: The codebase exhibits potential security risks, including lack of HTTPS for network communication, insecure storage methods for sensitive data, and insufficient session management or access control.

## Addressing Vulnerabilities: 
- To mitigate these vulnerabilities, we must implement comprehensive security measures, including:

### Encrypting Sensitive Data and Using Secure Storage Methods: 
- Ensuring sensitive data, like user notes, is encrypted and stored securely to prevent unauthorized access.
### Implementing Secure Authentication Practices:
- Enhancing authentication methods to protect user accounts from compromise, such as adopting multi-factor authentication or robust password hashing.
### Implementing Proper Input Validation and Sanitization Techniques:
- Validating and sanitizing user inputs to prevent injection attacks and ensure data integrity.
### Identifying and Rectifying Insecure Code Practices:
- Addressing security risks in the code structure, such as hardcoded credentials or improper error handling, to strengthen the application's security posture.

### Importance of Security Measures: 
- Implementing these security measures is crucial for protecting user data, preventing unauthorized access, and ensuring the application's overall security and trustworthiness. By proactively addressing vulnerabilities and adopting best practices, we can maintain a robust security posture and effectively mitigate potential threats.

## Final Notes
- In reflecting on the process and lessons learned, it's evident that prioritizing comprehensive security measures is paramount to safeguarding user data and maintaining trust in the application's security. The vulnerabilities identified, ranging from insecure data storage and authentication methods to insufficient input validation and insecure code practices, underscore the critical need for a proactive approach. Moving forward, implementing encryption for sensitive data storage, enhancing authentication mechanisms with multi-factor authentication, rigorously validating and sanitizing user inputs, and rectifying insecure code practices are essential best practices. By diligently adhering to these measures, we can effectively mitigate potential risks, fortify the application's security posture, and ensure the protection of user data against unauthorized access and breaches.
<br/>

# Login.tsx

## Login.tsx Security Overview:

### Storing Passwords in Code:
- Type of vulnerability: Storing sensitive data in plain text
- Description: The login page of the application stores the user’s password in the code in plain text. This is a serious vulnerability that can be exploited by attackers and should be patched immediately. Passwords should be stored securely and properly hashed/salted to prevent unauthorized access.
- Importance: Storing sensitive data in plain text anywhere, especially in code, is a major security vulnerability. Attackers can easily gain access to sensitive data if the code is exposed.

### No HTTPS:
- Type of vulnerability: Missing secure protocols
- Description: The login flow in the application does not employ a secure protocol for data transfer. This opens communication between client and server to interception from attackers, allowing them access to sensitive data.
- Importance: Server-client communication over non-secure protocols allows attackers to easily intercept sensitive information

### Protection Against Brute Force:
- Type of Vulnerability: Brute Force Attacks
- Description: The application does not use any methods to prevent brute force attacks, where a malicious actor can try multiple username and password combinations to access an account. This could be solved through rate limiting, 2FA or CAPTCHA.
- Importance: Lack of protection against brute force attacks provides an easy mechanism for malicious actors to gain access to an account

### Weak Passwords:
- Type of Vulnerability: Weak authentication
- Description: The application does not enforce password complexity and allows simple passwords to be used (e.g., ‘secret’, ‘password’). This is a major security vulnerability because it allows attackers to easily guess passwords and gain access to a user’s account.
- Importance: Lack of password complexity makes it easy for attackers to guess a password (especially through brute force) and makes a user susceptible to account takeover

### No Input Sanitization
- Type of Vulnerability: SQL Injection
- Description: Input from the client side login form is not properly sanitized. This introduces serious risk if he application communicates with a database, as attackers can use SQL injection to exploit the system and gain access to sensitive information.
- Importance: It is important to protect against SQL injection and sanitize form inputs, otherwise attackers can gain access to sensitive user information such as passwords or other data stored in the database.

## Addressing Vulnerabilities:
- The following measures have been implemented to login.tsx to improve security:

### Password Encryption and Hashing
- Stored passwords are now hashed
- Password input is now hidden
- Passwords are hashed on login before being compared

### Brute Force Protection
- Login attempts are now tracked and rate limited. If too many attempts, user will be denied login and will need to come back later

### Final Notes:
- If this were a production application that interacted with a database or had a sign-up method, we could implement input sanitation and password complexity. This would help to mitigate account takeovers and SQL injections. We could also implement session management to create more secure communication with the server-side
  
# Note.tsx

## Note.tsx Security Overview:

### Insecure Code Practices:
- Type of Vulnerability: Poor Coding Practice Leading to Security Risks
- Description: Code lacks sufficient error handling and may introduce vulnerabilities that can compromise the application.

### Improper Input Validation:
- Type of Vulnerability: Input Validation
- Description: Lacks proper input validation when evaluating text. may lead to injection attacks such as SQL injection.

## Addressing Vulnerabilities:
- The following has been implemented to improve security

### Regex Check
- Created Function IsValidText()
- Uses a regex expression to check the user input for valid and appropriate mathematical expressions

### Error Handling
- Implemented Try-Catch Block
- Is used to improve error handling when evaluating mathematical expression.

### Final Notes:
- It is obvious that the application needs proper error handling and input validation to reduce security risks from attacks such as SQL injection.

<br/>


# App.tsx

## App.tsx Security Overview:


### Insecure Storage of Sensitive Data
- Insecure Storage, app does not implement any encryption or secure storage methods for data. This leads to unauthorized access to information. 

### Improper Authentication
- App uses simple state to handle users login status. This approach does not provide security measure against unauthorized access or session hijacking. 

### Input Validation 
- App does not perform any input validation on users input such as those during login process. This could lead to code injection attacks. 

### Reflection and Best Practices
- Always encrypt sensitive data , implement secure authentication mechanisms. 

### Updates in APP.tsx
- Async Storage saves users login state across app restarts. By storing the user's data in AsyncStorage and retrieving it asynchronously, the app ensures that sensitive information is stored securely.
