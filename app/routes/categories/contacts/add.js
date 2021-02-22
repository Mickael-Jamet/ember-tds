import Route from '@ember/routing/route';

export default class CategoriesContactsAddRoute extends Route {
  model(){

  }

  @action save(data) {
    let contact = this.store.createRecord('contact', data);
    contact.save().then(() => this.transitionTo('categories.contacts'));
  }
}
