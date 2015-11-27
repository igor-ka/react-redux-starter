import requireHacker from 'require-hacker';

[ 'css',
  'svg',
].forEach((type) => {
  requireHacker.hook(type, () => `module.exports = ""`);
});
