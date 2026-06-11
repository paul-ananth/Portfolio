# Anantha Kumar S — Portfolio

Premium personal portfolio website. Dark theme, glassmorphism, purple neon accents.

## Setup

1. Add your resume PDF → `assets/resume/resume.pdf`
2. Add your profile photo → `assets/images/profile.jpg` (update `avatar-img` div in `index.html`)
3. Update `js/script.js` → `PROJECTS` and `REPOS` arrays with real GitHub URLs
4. Update LinkedIn, GitHub, and phone links throughout `index.html`
5. Deploy to GitHub Pages

## URL-based project pages

Visit `index.html?project=inspectormatch` (or any project id) to open a full-screen project detail overlay. Supported ids: `inspectormatch`, `inspectiondepot`, `dronesnap`, `razorpay`.

To add a new project page, add an entry to `PROJECT_PAGES` in `js/script.js` following the existing pattern.

## Structure

```
/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/
│   ├── projects/
│   └── resume/
└── README.md
```
