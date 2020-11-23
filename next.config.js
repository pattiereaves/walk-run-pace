module.exports = (phase) =>  {
  const isProd = phase === 'phase-production-build';
  return {
    assetPrefix: isProd ? '/walk-run-pace/' : '',
    basePath: isProd ? '/walk-run-pace': '',
  };
}