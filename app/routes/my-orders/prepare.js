import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class MyOrdersPrepareRoute extends Route {
  model(params) {
    return this.store.findRecord('order', params.order_id, {
      include: 'orderdetails.product,user',
    });
  }

  @action prepare(order) {
    order.get('orderdetails').forEach((i) => {
      i.set('preprared', true);
    });

    order.status = 'created';
    this.transitionTo('myOrders', order.id);
    console.log('created');
  }
}
