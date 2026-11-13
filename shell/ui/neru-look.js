// The desktop-wide look (org.neru.desktop): the panel's opacity follows it, live.
(() => {
  const tauri = window.__TAURI__;
  if (!tauri) return;
  const apply = (look) => document.documentElement.style.setProperty("--neru-opacity", String(look.opacity / 100));
  tauri.core.invoke("neru_look").then(apply).catch(() => {});
  tauri.event.listen("neru-look", ({ payload }) => apply(payload));
})();
