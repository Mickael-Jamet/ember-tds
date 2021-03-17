import Model, { attr } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('int') id;
  @attr('timestamp') dateCreation;
  @attr('int') idUser;
  @attr('id') idEmployee;
  @attr('enum') status;
  @attr('decimal') amount;
  @attr('decimal') toPay;
  @attr('int') itemsNumber;
  @attr('int') missingNumber;
  @attr('int') idTimleslot;
}
