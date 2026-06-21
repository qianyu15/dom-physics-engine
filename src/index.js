import { loadMatter } from "./loader.js";
import { createEngine } from "./engine.js";
import { parseDOM } from "./domParser.js";
import { syncBodies } from "./sync.js";
import { enableInteractions } from "./interactions.js";

export const initPhysics = async (root = document.body) => {
  await loadMatter();

  const engine = createEngine();
  const { bodies, elements } = parseDOM(root, engine.world);

  syncBodies(bodies);
  enableInteractions(engine, bodies);

  return engine;
};
