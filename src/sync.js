export const syncBodies = (bodies) => {
  const loop = () => {
    for (const p of bodies) {
      const { el, body, w, h } = p;

      el.style.left = body.position.x - w / 2 + "px";
      el.style.top = body.position.y - h / 2 + "px";
    }

    requestAnimationFrame(loop);
  };

  loop();
};
