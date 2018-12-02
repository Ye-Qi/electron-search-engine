/**
 * local storage
 * @author zongqi
 */
import storage from 'electron-json-storage'

const store = Object.create(storage)

store.get = (...args) => new Promise((resolve, reject) => {
  const [key, ...rest] = args
  storage.get(key, (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  }, ...rest)
})

store.getMany = (...args) => new Promise((resolve, reject) => {
  const [keys, ...rest] = args
  storage.getMany(keys, (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  }, ...rest)
})

store.getAll = (...args) => new Promise((resolve, reject) => {
  storage.getAll((err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  }, ...args)
})

store.set = (...args) => new Promise((resolve, reject) => {
  const [key, json, ...rest] = args
  storage.set(key, json, (err) => {
    if (err) {
      reject(err)
    }
    resolve()
  }, ...rest)
})

store.has = (...args) => new Promise((resolve, reject) => {
  const [key, ...rest] = args
  storage.has(key, (err, hasKey) => {
    if (err) {
      reject(err)
    }
    if (hasKey) {
      resolve(true)
    }
    resolve(false)
  }, ...rest)
})

store.keys = (...args) => new Promise((resolve, reject) => {
  storage.keys((err, keys) => {
    if (err) {
      reject(err)
    }
    resolve(keys || [])
  }, ...args)
})

store.remove = (...args) => new Promise((resolve, reject) => {
  const [key, ...rest] = args
  storage.remove(key, (err) => {
    if (err) {
      reject(err)
    }
    resolve(true)
  }, ...rest)
})

store.clear = (...args) => new Promise((resolve, reject) => {
  storage.clear((err) => {
    if (err) {
      reject(err)
    }
    resolve(true)
  }, ...args)
})

export default store
