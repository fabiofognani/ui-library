import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import tsConfigPaths from "rollup-plugin-tsconfig-paths";
import url from "rollup-plugin-url";

export default [
  {
    input: "src/index.ts",
    external: ["styled-components"],
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      tsConfigPaths(),
      peerDepsExternal(),
      url({
        // by default, rollup-plugin-url will not handle font files
        include: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.eot"],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      terser(),
    ],
  },
];
