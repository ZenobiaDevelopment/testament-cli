const esbuild = require('esbuild');

esbuild.buildSync({
    entryPoints: ['main.js'],
    bundle: true,
    external: ["puppeteer", "readline"],
    platform: 'node',
    outfile: 'out.js',
})