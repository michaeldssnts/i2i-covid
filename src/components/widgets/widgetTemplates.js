import Bars from './widget-templates/bars';
import StackedBar from './widget-templates/stackedBar';

const widgetTemplates = new Map([
  ['Relationship Status', { component: Bars }],
  ['Urbanicity', { component: Bars }],
  ['Access to medicine (x2)', { component: Bars }],
  ['Change in cost to medicine (x2)', { component: Bars }],
  ['Reasons for not having access to medicine', { component: StackedBar }],
  ['Increase in household care due to Covid-19', { component: Bars }],
  ['Time spent caring for others', { component: Bars }],
  ['Time spouse spent caring for others', { component: StackedBar }],
  ['Change in chronic care', { component: Bars }],
  ['Change in ease of getting contraceptives', { component: Bars }],
  ['Amount willing to pay for Covid-19 vaccine', { component: Bars }],
  ['Likeliness to seek medical attention for mild symptoms', { component: Bars }],
]);

export default widgetTemplates;
