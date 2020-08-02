# js-levenshtein [![Build Status](https://travis-ci.org/gustf/js-levenshtein.svg?branch=master)](https://travis-ci.org/gustf/js-levenshtein)

A very efficient JS implementation calculating the Levenshtein distance, i.e. the difference between two strings.

Based on Wagner-Fischer dynamic programming algorithm, optimized for speed and memory
 - use a single distance vector instead of a matrix
 - loop unrolling on the outer loop
 - remove common prefixes/postfixes from the calculation
 - minimize the number of comparisons
 - always allocate a new distance vector in order to not leak memory
 
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
            672 op/s » fastest-levenshtein
            612 op/s » fast-levenshtein 
            121 op/s » js-levenshtein
             78 op/s » talisman
             71 op/s » levenshtein-edit-distance
             71 op/s » leven

                      100 sentences, length max=170 min=6 avr=57.5
          10,551 op/s » fastest-levenshtein
           9,851 op/s » fast-levenshtein
           2,326 op/s » js-levenshtein
           1,647 op/s » talisman
           1,377 op/s » levenshtein-edit-distance
           1,378 op/s » leven

                      2000 words, length max=20 min=3 avr=9.5
           7,528 op/s » fastest-levenshtein 
           7,228 op/s » fast-levenshtein
           2,659 op/s » js-levenshtein
           2,186 op/s » talisman
           1,847 op/s » levenshtein-edit-distance
           1,906 op/s » leven
```

Benchmarks were performed with node v14.7.0 on a Pentium G4560 @ 3.50 GHz

## License

MIT © Gustaf Andersson
