const domain = {};

if (process.env.NODE_ENV === 'development') {
  domain.web = 'http://0.0.0.0:9521';
  domain.static = 'http://0.0.0.0:9521';
  domain.img = 'http://0.0.0.0:9522/map/';
  domain.api = 'http://0.0.0.0:9522';
} else {
  domain.web = 'http://m.guwenming.org';
  domain.static = 'http://m.guwenming.org';
  domain.img = 'http://admin.guwenming.org/map/';
  domain.api = 'http://0.0.0.0:9522';
}

export default domain;
