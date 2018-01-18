let loggn = (data, type = 'log') => console[type](data)

let {
  assert,
  clear,
  count,
  error,
  group,
  groupCollapsed,
  groupEnd,
  info,
  log,
  profile,
  profileEnd,
  table,
  time,
  timeEnd,
  trace,
  warn
} = console

export {
  assert,
  clear,
  count,
  error,
  group,
  groupCollapsed,
  groupEnd,
  info,
  log,
  profile,
  profileEnd,
  table,
  time,
  timeEnd,
  trace,
  warn
}

export default loggn
