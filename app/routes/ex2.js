import Route from '@ember/routing/route';
import { datas } from 'tds/data/datas';
import Services from 'tds/classes/services';
import { action,set } from "@ember/object";

export default class Ex2Route extends Route {
  promo=false;

  model() {
    return new Services(datas);
  }

  @action toggleActive(s){
    set(s,'active',!s.active);
  }

  @action togglePromo(){
    this.promo=!this.promo;
    if(!this.promo){
      this.transitionTo('ex2');
    }else{
      this.transitionTo('ex2.promo')
    }
  }
}
