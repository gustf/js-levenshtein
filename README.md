# js-levenshtein [![Build Status](https://travis-ci.org/gustf/js-levenshtein.svg?branch=master)](https://travis-ci.org/gustf/js-levenshtein)

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

                      js-levenshtein
         745,590 op/s » js-levenshtein/cached
         667,378 op/s » js-levenshtein
         533,400 op/s » leven
         525,475 op/s » talisman
         381,433 op/s » levenshtein-edit-distance
         287,224 op/s » fast-levenshtein
          80,848 op/s » levenshtein-component
          24,762 op/s » levdist
          27,333 op/s » ld
          19,505 op/s » natural
          13,413 op/s » levenshtein
```



## License

MIT © Gustaf Andersson