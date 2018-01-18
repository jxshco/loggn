describe('log', () => {
  let tester = inputs => (inputs)
  let log = jest.fn(tester)
  test('log string', () => {
    expect(log('Hello World')).toBe('Hello World')
    expect(log('')).toBe('')
    expect(log('123')).toBe('123')
  })
  test('log number', () => {
    expect(log(123)).toBe(123)
    expect(log(0)).toBe(0)
    expect(log(4148)).toBe(4148)
  })
  test('log object', () => {
    expect(log({Hello: 'World'})).toEqual({Hello: 'World'})
    expect(log({})).toEqual({})
    expect(log({hello: 'World', name: 'jxsh', number: 12345, active: true})).toEqual({hello: 'World', name: 'jxsh', number: 12345, active: true})
  })
  test('log array', () => {
    expect(log([1, 2, 3])).toEqual([1, 2, 3])
    expect(log([])).toEqual([])
    expect(log([{Hello: 'World'}])).toEqual([{Hello: 'World'}])
  })
  test('log boolean', () => {
    expect(log(true)).toBe(true)
    expect(log(false)).toBe(false)
  })
})
