import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  //déclaration des variables de la classe MultiSelectComponent
  @tracked elements = [];
  selected = [];
  id = 'id';

  // Initialisation des différentes variables de la classe MultiSelectComponent
  constructor() {
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  @action
  change(event) {
    let select = event.target; // Récupération de l'élement cliqué
    let selectedIds = [...select.selectedOptions].map((option) => option.value); // Récupération d'un tableau avec les différentes options de l'élement cliqué

    // Condition qui vérifie si il y a un changement
    if (this.args.onChange) {
      // Récupération du changement
      this.args.onChange(
        // Filtrage des élements que l'on veut par sa longueur
        this.elements.filter(
          // on filtre de nouveau pour récupérer un élement précis et récupérer sa longueur
          (elm) => selectedIds.filter((e) => e === elm[this.id]).length > 0
        )
      );
    }
  }
}
