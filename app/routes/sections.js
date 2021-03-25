import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsRoute extends Route {
  model() {
    return this.store.findAll('section', { include: 'products' });
  }

  @action
  delete(section) {
    section.destroyRecord();
  }
}
