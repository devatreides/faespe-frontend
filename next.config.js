const config = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false
      }
    ];
  }
};
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv(config);
