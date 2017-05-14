# js-levenshtein

An efficient JS implementation calculating the Levenshtein distance, i.e. the difference between two strings.

Based on Wagner-Fischer dynamic programming algorithm, optimized for speed and memory
 - use a single distance vector instead of a matrix
 - loop unrolling on the outer loop
 - remove common prefixes/postfixes from the calculation
 - minimize the number of comparisons

## Install

```
$ npm install --save js-levenshtein
```


## Usage

```js
const levenshtein = require('js-levenshtein');

levenshtein('kitten', 'sitting');
//=> 3
```


## Benchmark

```
$ npm run bench
```

```
         655,992 op/s » js-levenshtein
         542,796 op/s » leven
         497,966 op/s » talisman
         386,839 op/s » levenshtein-edit-distance
         254,941 op/s » fast-levenshtein
          69,857 op/s » levenshtein-component
          21,688 op/s » levdist
          24,631 op/s » ld
          21,834 op/s » natural
          13,984 op/s » levenshtein
```



## License

MIT © Gustaf Andersson