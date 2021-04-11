import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class SectionsAddProductRoute extends Route {
  model() {
    return {};
  }
  @action save(data) {
    let product = this.store.createRecord('product', data);
    product.save().then(() => this.transitionTo('product'));
  }
}
