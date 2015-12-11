var config = {};

config.publicConfig = {
  key: process.env.GM_API_KEY,
  stagger_time:       1000, // for elevationPath
  encode_polylines:   false,
  secure:             false, // use http <-- true if using https
};

module.exports = config;