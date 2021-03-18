import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsDeleteRoute extends Route {
  @action
  delete(section) {
    section.deleteRecord();
  }
}
