const make = (template, num) => {
  return Array.from({length: num}).map((i, idx) => {
    let id = Math.floor(Math.random() * 10000)
    let newTemplate = Object.assign({}, template)
    for (let field in newTemplate) {
      if (Array.isArray(newTemplate[field])) {
        newTemplate[field] = newTemplate[field][idx % newTemplate[field].length]
      }
    }
    return Object.assign({}, {id}, newTemplate)
  })
}
export {make}
