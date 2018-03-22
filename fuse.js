const fs = require('fs')

const {
  FuseBox,
  BabelPlugin,
  QuantumPlugin,
  WebIndexPlugin,
  Sparky
} = require('fuse-box');


let fuse, app, vendor;

Sparky.task('config', () => {
  fuse = new FuseBox({
    homeDir: 'src/',
    sourceMaps: false,
    target: 'browser',
    output: 'out/$name.js',
    allowSyntheticDefaultImports: true,
    //polyfillNonStandardDefaultUsage: true,
    useJsNext : ["semantic-ui-react"],
    autoImport: {
      "Promise": "bluebird"
    },
    plugins: [
      WebIndexPlugin({
        template: 'src/index.html'
      }),
        QuantumPlugin({
            treeshake: true,
            uglify: false,
            css: true,
            ensureES5: true
        })
    ]
  });
  
  vendor = fuse.bundle('vendor').instructions('~ index.tsx');
  app = fuse.bundle('app').instructions('> [index.tsx]')

});

Sparky.task('default', ['clean', 'config'], () => {
    fuse.dev()
    return fuse.run()
});


Sparky.task('clean', () => Sparky.src('out/').clean('out/'));
