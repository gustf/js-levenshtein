# js-levenshtein [![Build Status](https://travis-ci.org/gustf/js-levenshtein.svg?branch=master)](https://travis-ci.org/gustf/js-levenshtein)

The most efficient JS implementation calculating the Levenshtein distance, i.e. the difference between two strings.

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
  
                      50 paragraphs, length max=500 min=240 avr=372.5
             126 op/s » js-levenshtein
              88 op/s » talisman
              80 op/s » leven
              74 op/s » levenshtein-edit-distance
              59 op/s » fast-levenshtein
              27 op/s » levenshtein-component
              13 op/s » levdist
              11 op/s » ld
               8 op/s » natural
               8 op/s » levenshtein
  
                      100 sentences, length max=170 min=6 avr=57.5
           2,520 op/s » js-levenshtein
           1,804 op/s » talisman
           1,498 op/s » leven
           1,543 op/s » levenshtein-edit-distance
           1,209 op/s » fast-levenshtein
             539 op/s » levenshtein-component
             249 op/s » levdist
             244 op/s » ld
             146 op/s » natural
             144 op/s » levenshtein
  
                      2000 words, length max=20 min=3 avr=9.5
           2,906 op/s » js-levenshtein
           2,314 op/s » talisman
           1,938 op/s » leven
           2,026 op/s » levenshtein-edit-distance
           1,937 op/s » fast-levenshtein
             851 op/s » levenshtein-component
             415 op/s » levdist
             433 op/s » ld
             207 op/s » natural
             207 op/s » levenshtein
```

Benchmarks was performed with node v8.1.2 on a MacBook pro 15", 2.9 GHz Intel Core i7

## License

MIT © Gustaf Andersson