export const parseDOM = (root, world) => {
  const { Bodies, World } = window.Matter;

  const isIgnorable = (el) => {
    const tag = el.tagName;
    return (
      !tag || ["SCRIPT", "STYLE", "META", "LINK", "NOSCRIPT"].includes(tag)
    );
  };

  const elements = Array.from(root.querySelectorAll("*"))
    .filter((el) => !isIgnorable(el))
    .filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    });

  const bodies = [];

  elements.forEach((el) => {
    const r = el.getBoundingClientRect();

    el.style.position = "absolute";
    el.style.margin = 0;

    const body = Bodies.rectangle(
      r.left + r.width / 2,
      r.top + r.height / 2,
      r.width,
      r.height,
      { restitution: 0.6, friction: 0.4 }
    );

    World.add(world, body);

    bodies.push({
      el,
      body,
      w: r.width,
      h: r.height,
    });
  });

  return { bodies, elements };
};
