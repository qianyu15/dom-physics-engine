export const createEngine = () => {
  const { Engine, World, Bodies } = window.Matter;

  const engine = Engine.create();
  const world = engine.world;

  const W = window.innerWidth;
  const H = window.innerHeight;

  const walls = [
    Bodies.rectangle(W / 2, H + 50, W, 100, { isStatic: true }),
    Bodies.rectangle(-50, H / 2, 100, H, { isStatic: true }),
    Bodies.rectangle(W + 50, H / 2, 100, H, { isStatic: true }),
    Bodies.rectangle(W / 2, -50, W, 100, { isStatic: true }),
  ];

  World.add(world, walls);

  return engine;
};
