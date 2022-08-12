module.exports = function check(str, bracketsConfig) {
  let res = str;
  for (let i = 0; i < str.length / 2; i++) {
    bracketsConfig.forEach(item => {
      res = res.replace(item.join(''), '')
    })
  }
  return res.length === 0 ? true : false
}
