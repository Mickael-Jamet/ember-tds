export default class Services{
  services=[];
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
}
