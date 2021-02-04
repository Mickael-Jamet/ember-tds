import Route from '@ember/routing/route';

export default class Ex1bRoute extends Route {
  modle(){
    return this.modelFor('ex1').items;
  }
}
