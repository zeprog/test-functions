const {percent} = require('../functions/percent')

describe('percentage of the number', () => {
  test('0.03 of 100', () => {
    expect(percent(100, 0.03)).toBe(3)
  })

  test('0.04 of 99', () => {
    expect(percent(99, 0.04)).toBe(4)
  })

  test('0.10 of 20', () => {
    expect(percent(20, 0.10)).toBe(2)
  })

  test('0.05 of 1000', () => {
    expect(percent(1000, 0.05)).toBe(50)
  })

  test('0.05 of 1000', () => {
    expect(percent('1000', '0.05')).toBe(50)
  })
})
