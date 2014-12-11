import ApplicationAdapter from "./application";

export default ApplicationAdapter.extend({
  pathForType: function() {
    return 'artist';
  },
  findQuery: function(store, type, query) {
    query.type = type.typeKey;
    var url = this.buildURL(type.typeKey);
    var finalUrl = url.replace(this.pathForType(type), "search");
    return this.ajax(finalUrl, 'GET', { data: query });
  }
});
