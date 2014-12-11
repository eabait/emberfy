import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.spotify.com',
  namespace: 'v1',
  ajax: function(url, method, hash) {
    hash.crossDomain = true;
    return this._super(url, method, hash);
  }
});
