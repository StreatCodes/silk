const esbuild = require('esbuild');
const { spawn } = require('node:child_process');

const tailwind = spawn('tailwindcss', ['-i', './style.css', '-o', './dist/output.css', '--watch'], {
    shell: true
});

//Start tailwind watcher
tailwind.stdout.on('data', data => console.log(data.toString()));
tailwind.stderr.on('data', data => console.error(data.toString()));
tailwind.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
tailwind.on('exit', () => console.log('shutting down tailwind'))

//Start esbuild server
esbuild.serve({
    servedir: '.',
    host: 'localhost',
    port: 8080
}, {
    entryPoints: ['kitchen-sink.tsx'],
    outfile: 'dist/bundle.js',
    external: ['*.woff2'],
    bundle: true,
}).then(server => {
})