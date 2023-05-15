import Validator from '../validateUsername';

test('экземпляр класса создается', () => {
  const testName = new Validator('Regex');
  const res = {
    userName: 'Regex',
  };
  expect(testName).toEqual(res);
});
test.each([
  ['regex', true],
  ['123regex123', false],
  ['re_gex', true],
  ['r3-g3x', true],
  ['R3636X', false],
])(('тестирую %s на валидность'), (userName, expected) => {
  const boolean = new Validator(userName).validateUsername();
  expect(boolean).toBe(expected);
});
