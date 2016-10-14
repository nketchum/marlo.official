/**
 * Inline form field labels
 * @return void
 */
function inFieldLabels(ele) {
  require('jquery.infieldlabel/lib/jquery.infieldlabel');
  jQuery(ele).inFieldLabels();
}
inFieldLabels('label');
