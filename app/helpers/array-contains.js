import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params/*, hash*/) {
  const [items, value, prop] = params; // attribution des paramètres aux variables items, value et prop
  let id = prop || 'id'; // on initialise id avec prop suivi d'un texte id
  return items.filterBy(id, value).length > 0; // on retourne true si la longueur de la valeur de l'id correspondant est supérieur à 0 sinon, on retourne false
});
