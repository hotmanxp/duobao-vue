import _ from 'lodash'

const templateToInstance = (template, idx) => {
  let newTemplate = _.cloneDeep(template)
  for (let field in newTemplate) {
    if (Array.isArray(newTemplate[field]) && newTemplate[field][newTemplate[field].length - 1] === true) {
      newTemplate[field] = newTemplate[field][idx % (newTemplate[field].length - 1)]
    }
    if (typeof newTemplate[field] === 'function') {
      newTemplate[field] = newTemplate[field](idx)
    }
    if (typeof newTemplate === 'object') {
      newTemplate[field] = templateToInstance(newTemplate[field], idx)
    }
  }
  return newTemplate
}

const makeList = (template, num) => {
  return Array.from({length: num}).map((i, idx) => {
    let id = Math.floor(Math.random() * 10000)
    let newTemplate = templateToInstance(template, idx)
    return Object.assign({}, {id}, newTemplate)
  })
}
export { makeList }
