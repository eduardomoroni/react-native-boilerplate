module.exports = {
  getBlackListRE() {
    return blacklist([
      /Pods\/.*/,
    ]);
  },
};
