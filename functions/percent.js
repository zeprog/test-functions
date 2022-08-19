function percent(money, percent) {
  const min = 0
  const max = 1
  if(percent >= min && percent <= max) {
    percent = +Number(percent).toFixed(2)
    const remainder = Math.round(money * percent)
    return remainder
  }
}

module.exports = {
  percent
}