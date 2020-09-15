export const uuid: (length: number) => string = (length) => {
  const s: string[] = []
  const randomStr: string = '0123456789abcdef'
  for (let i = 0; i < length; i++) {
    s[i] = randomStr.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = randomStr.substr((+s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'
  return s.join('')
}

export const shuffle: (arr: any[]) => any[] = (arr) => {
  let len = arr.length;
  while (len > 1){
    let index = Math.floor(Math.random() * len--);
    [arr[len] , arr[index]] = [arr[index] , arr[len]]
  }
  return arr;
}