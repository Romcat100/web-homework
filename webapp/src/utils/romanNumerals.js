let dictionary = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

function convertToRomanNumerals (number) {
  if (number === 0) {
    return ''
  }
  for (let key of Object.keys(dictionary)) {
    if (number >= dictionary[key]) {
      return key + convertToRomanNumerals(number - dictionary[key])
    }
  }
}

export default convertToRomanNumerals
