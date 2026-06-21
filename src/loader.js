export const loadMatter = () =>
  new Promise((resolve) => {
    if (window.Matter) return resolve();

    const s = document.createElement("script");
    s.src =
      "https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js";

    s.onload = () => resolve(window.Matter);
    document.head.appendChild(s);
  });
