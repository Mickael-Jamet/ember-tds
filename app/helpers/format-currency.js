import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params/*, hash*/) {
  let [amount,symbol]=params;
  symbol=symbol || '€';
  return amount + ' ' + symbol;
});
