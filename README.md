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
- **Storage:** Browser `localStorage` (seeded automatically from `js/db.js` / `db.json` structure).

---

## 📁 Project Structure

```text
linkvault-starter/
├── index.html          # Main HTML with Tailwind, Font Awesome & Google Fonts CDNs
├── db.json             # Reference mock data (collections & bookmarks schema)
├── styles/
│   └── main.css        # Custom CSS
└── js/
    ├── db.js           # localStorage helpers (getDB, saveDB, resetDB) + mock seed data
    └── app.js          # Application entry point
```

---

## 💾 Data & `localStorage`

On first load, `getDB()` in `js/db.js` automatically seeds `localStorage` under the key `linkvault_db` using the mock data (same structure as `db.json`):

```js
const db = getDB();      // Read { collections, bookmarks } from localStorage
saveDB(db);              // Save updated { collections, bookmarks } to localStorage
resetDB();               // Reset back to initial mock data
```

---

## 🔔 Toast Notifications (Recommended)

Use a lightweight toast library via CDN for feedback (e.g., bookmark added, deleted, copied):

- **Toastify JS:** [Docs & Demo](https://apvarun.github.io/toastify-js/) | [jsDelivr CDN](https://www.jsdelivr.com/package/npm/toastify-js)
- **SweetAlert2 (Toasts & Confirm Modals):** [sweetalert2.github.io](https://sweetalert2.github.io/)

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
