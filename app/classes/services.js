export default class Services{
  services=[];
  promos={};

  //@tracked codePromo;

  constructor(services) {
    this.services=services;
  }
  get countActive(){
    /*let r=0;
    this.services.forEach(s=>{
      if(s.active){
        r++;
      }
    });
    return r;*/
    return this.services.filterBy('active', true).length;
  }

  get sumActive(){
    let services=this.services.filterBy('active',true);
    let r=0;
    services.forEach(s=>{
      r += s.price;
    });
    return r;
  }

  get promoTx(){
    return this.promos[this.codePromo]||'Code Invalide';
  }

  get montantPromo(){
    return this.promoTx*this.sumActive;
  }
}
