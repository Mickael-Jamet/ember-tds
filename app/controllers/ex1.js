import Controller from '@ember/controller';
import {action} from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class Ex1Controller extends Controller {
  @tracked content='Entrez votre texte';
  @tracked info="";
  MAX=100;

  get style(){
    if(this.MAX-this.content.length >=50 ){
      return 'info';
    }
    else{
      if(this.MAX-this.content.length >=20 ){
        return 'warning';
      }
      else{
        if(this.MAX-this.content.length <20 ){
          return 'danger';
        }
      }
    }
  }

  get size(){
    return this.MAX-this.content.length;
  }

  @action
  clear(){
    this.content="";
    this.info="";
  }

  @action
  save(){
    this.info='Note sauvegardée';
  }

  @action
  update(){
    this.info='Note modifiée';
  }
}
