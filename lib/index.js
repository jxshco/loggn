const loggn = (data, type = 'log') => console[type](data)
const log = (data) => console.log(data)
const warn = (data) => console.warn(data)
const error = (data) => console.error(data)
const table = (data) => console.table(data)
const clear = () => console.clear()
const count = () => console.count()
const info = (data) => console.info(data)
const trace = (data) => console.trace(data)

export {
  log,
  warn,
  error,
  table,
  clear,
  count,
  info,
  trace
}

export default loggn
