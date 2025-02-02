import convertToRomanNumerals from '../src/utils/romanNumerals'

describe('convertToRomanNumerals', () => {
  test.each`
    number  | romanNumeral
    ${0}    | ${''}
    ${1}    | ${'I'}
    ${2}    | ${'II'}
    ${3}    | ${'III'}
    ${4}    | ${'IV'}
    ${5}    | ${'V'}
    ${6}    | ${'VI'}
    ${7}    | ${'VII'}
    ${8}    | ${'VIII'}
    ${9}    | ${'IX'}
    ${10}   | ${'X'}
    ${40}   | ${'XL'}
    ${50}   | ${'L'}
    ${90}   | ${'XC'}
    ${100}  | ${'C'}
    ${400}  | ${'CD'}
    ${500}  | ${'D'}
    ${900}  | ${'CM'}
    ${999}  | ${'CMXCIX'}
    ${1000} | ${'M'}
    ${1001} | ${'MI'}
  `(
  'should convert $number to $romanNumeral',
  ({ number, romanNumeral }) => {
    expect(convertToRomanNumerals(number)).toBe(romanNumeral)
  }
)
})
