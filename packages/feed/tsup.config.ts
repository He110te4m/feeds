import { defineConfig } from 'tsup'

export default defineConfig(() => {
  return {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    splitting: true,
    minify: false,
    sourcemap: false,
    clean: true,
    treeshake: true,
    noExternal: [
    ],
    platform: 'browser',
    outDir: './libs',
  }
})
