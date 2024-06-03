import * as esbuild from 'esbuild';

export const esbuildConfig = {
  entryPoints: ['src/exports.js', 'src/manifest/metadata.ts'],
  bundle: true,
  minify: true,
  splitting: true,
  platform: 'node',
  sourcemap: true,
  format: 'esm',
  packages: 'external',
  outdir: 'dist',
};

async function build() {
  await esbuild.build(esbuildConfig);
}

build();
