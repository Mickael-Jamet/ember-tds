import abstractroute from './abstractroute';
import { inject as service } from '@ember/service';

export default class MyOrdersRoute extends abstractroute {
  @service moment;
  beforeModel() {
    this.moment.updateLocale('fr');
  }

  model(params) {
    return this.store.findRecord('order', params.order_id, {include : 'orderdetails.product'});
  }
}
