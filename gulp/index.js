import requireDirectory from 'require-directory';

export default requireDirectory(module, {
  visit: (obj) => obj.default
});
