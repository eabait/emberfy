import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['query'],
  query: null,

  queryField: Ember.computed.oneWay('query'),

  actions: {
    runSearch: function() {
      this.set('query', this.get('queryField'));
    }
  }
});
