import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import url from "rollup-plugin-url";
import alias from "@rollup/plugin-alias";
import importAssertions from 'rollup-plugin-import-assertions';

import TsConfig from "./tsconfig.json" assert { type: "json" };
import PackageJSON from "./package.json" assert { type: "json" };

function resolveEntries() {
  return Object.entries(TsConfig.compilerOptions.paths).map(([find, [replacement]]) => ({
    find,
    replacement,
  }));
}

export default [
  {
    input: "src/index.ts",
    external: ["styled-components"],
    output: [
      {
        file: PackageJSON.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: PackageJSON.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        resolve: [".ts", ".tsx"],
        entries: resolveEntries(),
      }),
      importAssertions(),
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
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
