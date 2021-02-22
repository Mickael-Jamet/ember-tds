import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesAddRoute extends Route {
  model() {
    return {};
  }

  @action save(data) {
    let category = this.store.createRecord('category', data);
    category.save().then(() => this.transitionTo('categories'));
  }
}
