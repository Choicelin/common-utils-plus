import {uuid, shuffle} from "../dist"

test('uuid length is equals to the input number', () => {
  for (let i = 24; i < 150; i++) {
    const uuidStr = uuid(i)
    expect(uuidStr.length).toBe(i)
  }
})

test('if we don\'t pass param, we get the return length should be 36', () => {
  const uuidStr = uuid()
  expect(uuidStr.length).toBe(36)
})