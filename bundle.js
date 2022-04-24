const esbuild = require('esbuild');

esbuild.buildSync({
    entryPoints: ['main.js'],
    bundle: true,
    external: ["node-fetch", "readline"],
    platform: 'node',
    outfile: 'out.js',
})