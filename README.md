# LinkVault — Bookmark & Collection Manager (Starter)

A starter repository for building **LinkVault**, a bookmark and collection manager using **Vanilla HTML, CSS, and JavaScript**, persisted in **`localStorage`**.

---

## 🎨 Figma Design

- **Figma File:** [LinkVault Figma Design](https://www.figma.com/design/s2rHdDGdqAtgBEyA3VR2G6/Untitled?node-id=0-1&t=dKUZ5uh8ycpnMFBO-1)

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/daniel-d7a/linkvault-starter.git
   cd linkvault-starter
   ```
2. **Run the project:**
   - Open `index.html` directly in your browser, **or**
   - Use the **Live Server** extension in VS Code.
   - No build tools or package installation required!

---

## 🛠️ Tech Stack (Pre-configured via CDN)

- **Tailwind CSS (CDN):** Configured in `index.html` with `darkMode: 'class'` and `Inter` font.
- **Font Awesome 6 (CDN):** Ready to use with `<i class="fa-solid fa-bookmark"></i>`, etc.
- **Google Fonts:** `Inter` (`400`, `500`, `600`, `700`) imported in `index.html`.
- **Storage:** Browser `localStorage` (initial mock data provided in `js/db.js` / `db.json`).

---

## 📁 Project Structure

```text
linkvault-starter/
├── index.html          # Main HTML with Tailwind, Font Awesome & Google Fonts CDNs
├── db.json             # Reference mock data (collections & bookmarks schema)
├── styles/
│   └── main.css        # Custom CSS
└── js/
    └── db.js           # Initial mock data (INITIAL_DB) for seeding localStorage
```

---

## 💾 Data & `localStorage`

Use `INITIAL_DB` from `js/db.js` (same structure as `db.json`) to seed `localStorage` on first load, and read/write your collections and bookmarks from `localStorage`.

---

## 🔔 Toast Notifications (Recommended)

Use **Toastify JS** via CDN for feedback (e.g., bookmark added, deleted, copied):

- **Toastify JS:** [Docs & Demo](https://apvarun.github.io/toastify-js/) | [jsDelivr CDN](https://www.jsdelivr.com/package/npm/toastify-js)

### Quick Toastify JS Example

Add to `<head>` / before `</body>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css" />
<script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
```

Show a toast in JS:

```js
Toastify({
  text: "Bookmark saved!",
  duration: 3000,
  gravity: "bottom",
  position: "right",
  style: { background: "#0f172a" },
}).showToast();
```

---

## 🔗 LinkPreview API (`linkpreview.net`)

Use **LinkPreview** to auto-fetch a URL's title, description, and preview image when adding a bookmark.

- **Website:** [linkpreview.net](https://www.linkpreview.net/)
- **Documentation:** [docs.linkpreview.net](https://docs.linkpreview.net/)

### Example Usage (Vanilla JS `fetch`)

```js
const API_KEY = "YOUR_LINKPREVIEW_API_KEY";

async function fetchLinkPreview(url) {
  const endpoint = `https://api.linkpreview.net/?q=${encodeURIComponent(url)}`;

  const res = await fetch(endpoint, {
    headers: {
      "X-Linkpreview-Api-Key": API_KEY,
    },
  });

  if (!res.ok) {
    throw new Error(`LinkPreview error: ${res.status}`);
  }

  return res.json();
}
```

### Example Response

Calling `fetchLinkPreview("https://react.dev")` returns JSON like:

```json
{
  "title": "React",
  "description": "The library for web and native user interfaces",
  "image": "https://react.dev/images/og-home.png",
  "url": "https://react.dev/"
}
```

> **Tip:** Always handle errors or missing fields gracefully (e.g., fall back to the URL's hostname as the title and an empty string for `image` if the API fails or hits rate limits).
