import Ember from 'ember';

export default Ember.Controller.extend({
  // the initial value of the `search` property
  searchQuery: '',

  actions: {
    runSearch: function() {
      // the current value of the text field
      var query = this.get('searchQuery');
      this.transitionToRoute('search', { query: query });
    }
  }
});
