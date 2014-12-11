import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, type, payload) {
    var newPayload = {artists: payload.artists.items};
    return this._super(store, type, newPayload);
  }
});
