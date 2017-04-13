exports.isChinese = issue => {
  const reg = new RegExp('[\u4e00-\u9fa5]')
  return reg.test(issue.body) || reg.test(issue.title)
}

exports.isValid = issue => {
  return /generated by https:\/\/eleme-issue\.surge\.sh DO NOT REMOVE/.test(issue.body)
}