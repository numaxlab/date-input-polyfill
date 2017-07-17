import babel from 'rollup-plugin-babel';
import babili from 'rollup-plugin-babili';
import sass from 'rollup-plugin-sass';

export default {
  entry: `nodep-date-input-polyfill.js`,
  dest: `nodep-date-input-polyfill.dist.js`,

  plugins: [
    babel({
      include: `*.js`,
      exclude: `node_modules/**`,
      presets: [[`env`, {modules: false}]],
      plugins: [`external-helpers`]
    }),
    babili({
      comments: false,
      sourceMap: false
    }),
    sass({
      insert: true
    })
  ],

  format: 'umd'
};
