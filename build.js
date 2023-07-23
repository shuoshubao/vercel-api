const esbuild = require('esbuild');
const { externalGlobalPlugin } = require('esbuild-plugin-external-global');

esbuild.build({
  entryPoints: ['src/index.jsx'],
  outfile: '.vercel/output/static/index.js',
  bundle: true,
  minify: true,
  plugins: [
    externalGlobalPlugin({
      react: 'window.React',
      'react-dom': 'window.ReactDOM',
      antd: 'window.antd'
    })
  ]
});
