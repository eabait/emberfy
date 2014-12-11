import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var new_payload = {artists: payload.artists.items};
    return this._super(store, type, new_payload);
  }
});
