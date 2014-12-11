import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  popularity: DS.attr('number'),
  href: DS.attr('string'),
});
