import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('int') id;
  @attr('String') name;
  @attr('String') email;
  @attr('String') password;
}
