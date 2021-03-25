import Route from '@ember/routing/route';

export default class SectionsEditRoute extends Route {
  model(params) {
    return this.store.find('section', params.section_id);
  }
}
