const path = require('path');
const esbuild = require('esbuild');
const { externalGlobalPlugin } = require('esbuild-plugin-external-global');
const manifest = require('esbuild-plugin-manifest');

(async () => {
  const ctx = await esbuild.context({
    entryPoints: ['src/index.jsx'],
    outfile: 'dist/index.js',
    bundle: true,
    plugins: [
      manifest({
        hash: false,
        shortNames: true,
        generate(entries) {
          return Object.entries(entries).reduce((prev, [k, v]) => {
            prev[path.parse(k).name] = `http://localhost:3000/${v}`;
            return prev;
          }, {});
        }
      }),
      externalGlobalPlugin({
        react: 'window.React',
        'react-dom': 'window.ReactDOM',
        dayjs: 'window.dayjs',
        antd: 'window.antd',
        lodash: 'window._'
      })
    ]
  });

  await ctx.watch();
  console.log('watching...');
})();
