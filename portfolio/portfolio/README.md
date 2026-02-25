# ✨ Your Portfolio Website

A simple, beautiful portfolio — no coding required to customize!

---

## 📁 File Structure

```
portfolio/
├── index.html          ← Homepage
├── css/
│   └── style.css       ← All the styles (colors, fonts, spacing)
├── js/
│   └── main.js         ← Interactions (don't need to edit this)
├── pages/
│   ├── projects.html   ← Your projects gallery
│   ├── about.html      ← About you
│   └── contact.html    ← Contact form + links
└── images/             ← Put your photos here (create this folder)
```

---

## 🚀 How to open locally

Just **double-click `index.html`** — it opens in your browser instantly.
No installation, no server, no compiling needed!

---

## ✏️ How to edit

Open any `.html` file in a **text editor** (Notepad on Windows, TextEdit on Mac, or the free app [VS Code](https://code.visualstudio.com)).

Look for comments like `<!-- ✏️ Edit this -->` — they show you exactly what to change.

### Change your name
Search for `Jane` or `Jane Doe` and replace with your name.

### Change colors
Open `css/style.css` and look at the top section called `:root { ... }`.
Change these values:
```css
--color-accent: #C4884A;      /* Main accent color (warm gold by default) */
--color-bg: #FAF8F5;          /* Page background */
--color-text: #1A1A1A;        /* Text color */
```

### Add a project (projects.html)
1. Open `pages/projects.html`
2. Find the commented-out block at the bottom of the projects grid
3. Copy it, uncomment it, and fill in your details

### Add a photo
1. Create an `images/` folder inside `portfolio/`
2. Put your photo in there, e.g. `photo.jpg`
3. In `about.html`, replace the emoji `<div class="about-photo">🧑‍🎨</div>` with:
   ```html
   <img src="../images/photo.jpg" alt="Your name" class="about-photo">
   ```

### Make the contact form send real emails (free!)
1. Go to [formspree.io](https://formspree.io) and sign up (free)
2. Create a new form → copy the URL (looks like `https://formspree.io/f/xxxx`)
3. In `contact.html`, change `<form id="contact-form">` to:
   `<form id="contact-form" action="https://formspree.io/f/xxxx" method="POST">`
4. In `js/main.js`, delete the line that says `e.preventDefault();`

---

## 🌐 Publish online for free

**Recommended: [Netlify Drop](https://app.netlify.com/drop)**
1. Go to netlify.com/drop
2. Drag and drop your entire `portfolio/` folder onto the page
3. Your site is live instantly with a free URL!

You can also use GitHub Pages, Vercel, or any web host.

---

Made with ♥ — feel free to customize everything!
