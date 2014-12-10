import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import DS from 'ember-data';

Ember.MODEL_FACTORY_INJECTIONS = true;

var inflector = Ember.Inflector.inflector;

inflector.irregular('search', 'search');

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver,
  ApplicationAdapter: DS.RESTAdapter.extend({
    host: 'https://api.spotify.com',
    namespace: 'v1',
    inflector: inflector,
    ajax: function(url, method, hash) {
      hash.crossDomain = true;
      hash.xhrFields = {withCredentials: true};
      return this._super(url, method, hash);
    }
  })
});

loadInitializers(App, config.modulePrefix);

export default App;
