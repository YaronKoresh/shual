import path from "path";
import fs from "fs";
import esbuild from "esbuild";
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// require

esbuild.buildSync({
  entryPoints: ['./index.js'],
  bundle: true,
  outfile: './dist/bundle.cjs',
  minify: false,
  format: "cjs",
  platform: 'node',
  external: [
	"@yaronkoresh/math"
  ],
  target: ['esnext'],
  alias: {
    '@swc/helpers': path.dirname(require.resolve('@swc/helpers/package.json'))
  }
});

esbuild.buildSync({
  entryPoints: ['./index.js'],
  bundle: true,
  outfile: './dist/bundle.min.cjs',
  minify: true,
  format: "cjs",
  platform: 'node',
  external: [
	"@yaronkoresh/math"
  ],
  target: ['esnext'],
  alias: {
    '@swc/helpers': path.dirname(require.resolve('@swc/helpers/package.json'))
  }
});

// import

esbuild.buildSync({
  entryPoints: ['./index.js'],
  bundle: true,
  outfile: './dist/bundle.mjs',
  minify: false,
  format: "esm",
  platform: 'node',
  external: [
	"@yaronkoresh/math"
  ],
  target: ['esnext'],
  alias: {
    '@swc/helpers': path.dirname(require.resolve('@swc/helpers/package.json'))
  }
});

esbuild.buildSync({
  entryPoints: ['./index.js'],
  bundle: true,
  outfile: './dist/bundle.min.mjs',
  minify: true,
  format: "esm",
  platform: 'node',
  external: [
	"@yaronkoresh/math"
  ],
  target: ['esnext'],
  alias: {
    '@swc/helpers': path.dirname(require.resolve('@swc/helpers/package.json'))
  }
});

// <script>

esbuild.buildSync({
  globalName: "$shual",
  entryPoints: ['./index.js'],
  bundle: true,
  outfile: './dist/bundle.js',
  minify: false,
  format: "iife",
  platform: 'browser',
  external: [ ],
  target: ['esnext'],
  alias: {
    '@swc/helpers': path.dirname(require.resolve('@swc/helpers/package.json'))
  }
});

esbuild.buildSync({
  globalName: "$shual",
  entryPoints: ['./index.js'],
  bundle: true,
  outfile: './dist/bundle.min.js',
  minify: true,
  format: "iife",
  platform: 'browser',
  external: [ ],
  target: ['esnext'],
  alias: {
    '@swc/helpers': path.dirname(require.resolve('@swc/helpers/package.json'))
  }
});