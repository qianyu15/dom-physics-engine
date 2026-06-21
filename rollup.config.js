import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/dom-physics.esm.js",
      format: "es"
    },
    {
      file: "dist/dom-physics.umd.js",
      format: "umd",
      name: "DomPhysics"
    },
    {
      file: "dist/dom-physics.min.js",
      format: "umd",
      name: "DomPhysics",
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve()
  ]
};
