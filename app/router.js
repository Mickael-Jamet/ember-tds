import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('board');
  this.route('logout');
  this.route('sections', function() {
    this.route('add');
    this.route('addProduct');
    this.route('delete', { path: '/:section_id' });
    this.route('edit', { path: '/:section_id' }, function() {
      this.route('addProduct');
      this.route('edit', { path: '/:product_id' });
      this.route('delete', { path: '/:product_id' });
    });
  });
  this.route('abstractroute');
  this.route('order', { path: 'order/:order_id' });
  this.route('products');
  this.route('myOrders', function() {
    this.route('prepare', function() {
      this.route('cancel');
      this.route('prepared');
    });
  });
});
