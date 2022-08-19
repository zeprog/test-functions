const {cardMask} = require('../functions/card-mask')

describe('hidden card', () => {
  test('hidden card number 1234567890123456', () => {
    expect(cardMask('1234567890123456')).toBe('1234 **** **** 3456')
  })
  
  test('hidden card number 1234 5678 9012 3456', () => {
    expect(cardMask('1234 5678 9012 3456')).toBe('1234 **** **** 3456')
  })
  
  test('hidden card number 1234567890123456 on number', () => {
    expect(cardMask(1234567890123456)).toBe('1234 **** **** 3456')
  })
  
  test('hidden card number 12345678901234567890', () => {
    expect(cardMask('12345678901234567890')).toBe('1234 **** **** **** 7890')
  })
})