import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://127.0.0.1:8091/rest';
  urlForQuery(query, modelName) {
    if (query.sql) {
      query.filter = query.sql;
      delete query.sql;
    }
    return super.urlForQuery(...arguments);
  }
}
