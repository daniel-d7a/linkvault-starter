// Entry point for LinkVault
document.addEventListener('DOMContentLoaded', () => {
  const db = getDB();
  const statusEl = document.getElementById('db-status');

  if (statusEl) {
    statusEl.textContent = `Loaded ${db.bookmarks.length} bookmarks across ${db.collections.length} collections.`;
  }

  // TODO: Render sidebar collections, topbar, bookmarks grid/list, and modals
});
