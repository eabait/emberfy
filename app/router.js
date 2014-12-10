import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('discover');
  this.resource('search', { path: 'search/:query' }, function() {
    this.route('search');
  });
  this.resource('artist', { path: 'artists/:artist_id' }, function() { });
});

export default Router;
