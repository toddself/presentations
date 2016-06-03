module.exports = function (sortable) {
  if (Array.isArray(sortable)) {
    return sortable.sort((a, b) => a - b).reverse()
  }

  if (typeof sortable === 'string') {
    return sortable.split('').sort().reverse().join('')
  }

  if (Object.prototype.toString.call(sortable) === '[object Object]') {
    if (Object.keys(sortable).length > 1) {
      const sorted = {}
      Object.keys(sortable).sort().reverse().forEach(k => sorted[k] = sortable[k])
      return sorted
    } else {
      return sortable
    }
  }

  return sortable
}
