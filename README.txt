SHRADDHA NAYAK — PORTFOLIO

HOW TO RUN
1. Extract this ZIP.
2. Open the PORTFOLIO folder in VS Code.
3. Open index.html in a browser, or use the Live Server extension.

PAGES
- index.html: Overview
- about.html: About me
- skills.html: Skills
- projects.html: Selected projects and project purpose/status
- experience.html: Experience and education
- certificates.html: Certificates (original PDFs included)
- contact.html: Contact

INTERACTIVE TERMINAL
Try: help, home, about, skills, projects, experience, certificates, contact.
You can also use: go projects, cd about, ls, clear, whoami, stack, date, email.
The homepage includes a rotating introduction, animated profile frame and profile system panel.

EDITING
- style.css contains the styling.
- script.js contains navigation, animations and terminal behavior.
- assets/ contains profile, project and certificate images/PDFs.

NOTES
- Google Fonts and external technology logos need an internet connection.
- Contact links are configured for the supplied email, LinkedIn and GitHub profiles.
- The contact dialog opens the visitor's default email application with a pre-filled message; it does not send or store messages on the website.
- Review all personal metrics and project descriptions before competition submission.

CONTACT FORM EMAIL DELIVERY
--------------------------
The contact dialog submits through FormSubmit's standard HTML POST endpoint
to shraddhanayak159@gmail.com. This avoids the previous AJAX/fetch request,
which could fail because of browser CORS or response handling.

IMPORTANT FIRST-TIME SETUP
1. Run the portfolio from VS Code Live Server or a deployed website.
2. Submit one test message using the Contact dialog.
3. Check Inbox, Spam, Promotions and All Mail for FormSubmit's activation
   email sent to shraddhanayak159@gmail.com.
4. Open the activation email and confirm the form.
5. Submit another test message. It should then be forwarded to that inbox.

If no activation email arrives after a successful form submission, the issue
is on FormSubmit's delivery/activation side, not the portfolio JavaScript.
Check the FormSubmit help page or use a different email delivery provider.

The form requires an internet connection. Do not open the site using file://.
