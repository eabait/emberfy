import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    query: {
      refreshModel: true
    }
  },

  model: function(params) {
    if (!params.query) {
      return [];
    }

    return this.store.findQuery('artist', {
      q: params.query
    });
  }

});
