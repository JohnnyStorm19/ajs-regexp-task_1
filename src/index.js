/* eslint-disable no-unused-vars */
import Validator from './js/validateUsername';

const invalidTest1 = new Validator('123Regex123').validateUsername();
const invalidTest2 = new Validator('re1234_gex').validateUsername();
const validTest1 = new Validator('Regex').validateUsername();
const validTest2 = new Validator('re_g3x').validateUsername();

function showNames(...args) {
  // eslint-disable-next-line no-console
  console.log(`Функция работает, выводим true/false: ${args}`);
}
showNames(invalidTest1, invalidTest2, validTest1, validTest2);
