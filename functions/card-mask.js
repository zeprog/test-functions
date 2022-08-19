function cardMask(card) {
  const mask = /\S/.test(card) ? card.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ') : card.toString()
  const hiddenCard = mask.replace(/.(?<=((?<=.{4}).(?=.{4})+(?!\d{4})))/g, "*")
  return hiddenCard
}

module.exports = {
  cardMask
}