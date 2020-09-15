<p align="center">common-utils-plus </p>
<p align="center">
  <a href="https://npmcharts.com/compare/common-utils-plus?minimal=true"><img src="https://img.shields.io/npm/dm/common-utils-plus.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/common-utils-plus"><img src="https://img.shields.io/npm/v/common-utils-plus.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/common-utils-plus"><img src="https://img.shields.io/npm/l/common-utils-plus.svg?sanitize=true" alt="License"></a>
</p>
- common utils plus makes your life easier.

## uuid 
param is a number which the length of return string value is.
```javascript 1.8
import { uuid } from 'common-utils-plus'

console.log(uuid(36))
```

> the min param number is 24,if we don't pass it to the function, we get a string that has 36 characters.

## shuffle
param is an array
```javascript 1.8
import { shuffle } from 'common-utils-plus'
let arr = [1, 2, 3, 4, 5]
console.log(shuffle(arr))
```
