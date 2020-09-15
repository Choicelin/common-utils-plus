# tools 
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
