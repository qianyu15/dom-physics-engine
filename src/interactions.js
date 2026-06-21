export const enableInteractions = (engine, bodies) => {
  const { Mouse, MouseConstraint, World, Body } = window.Matter;

  const mouse = Mouse.create(document.body);

  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
    },
  });

  World.add(engine.world, mouseConstraint);

  document.addEventListener("click", (e) => {
    for (const p of bodies) {
      const dx = p.body.position.x - e.clientX;
      const dy = p.body.position.y - e.clientY;

      Body.applyForce(
        p.body,
        p.body.position,
        {
          x: dx * 0.0025,
          y: dy * 0.0025,
        }
      );
    }
  });
};
