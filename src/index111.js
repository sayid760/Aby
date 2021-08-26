
import { isPromise }  from '../_shared/utils'

const arrayMapPool = function (array, mapper, concurrentLimit) {
    const arrayLength = array.length,
      result = Array(arrayLength)
    let index = -1
    while (++index < arrayLength) {
  
      const resultItem = mapper(array[index])
      if (isPromise(resultItem)) {
        const promises = new Set(),
          selfDeletingPromise = resultItem.then(
            tapSync(() => promises.delete(selfDeletingPromise)))
        promises.add(selfDeletingPromise)
        result[index] = selfDeletingPromise
        return arrayMapPoolAsync(
          array, mapper, concurrentLimit, result, index, promises)
      }
      result[index] = resultItem
    }
    return result
}



pool = (concurrencyLimit, mapper) => function concurrentPoolMapping(value) {
    return arrayMapPool(value, mapper, concurrencyLimit)
}


const delayedLog = x => new Promise(function (resolve) {
    setTimeout(function () {
        console.log(x)
        resolve()
    }, 1000)
})
  
console.log('start')
pool(2, delayedLog)([1, 2, 3, 4, 5])


module.exports = pool 