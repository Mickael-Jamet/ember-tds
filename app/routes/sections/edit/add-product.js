import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class SectionsEditAddProductRoute extends Route {
  model() {
    return RSVP.hash({
      section: this.modelFor('sections.edit'),
    });
  }

  @action save(data) {
    let product = this.store.createRecord('product', data);
    product.save().then(() => this.transitionTo('sections'));
  }
}
