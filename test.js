import test from 'ava';
import levenshtein from './';

test(t =>
     {
       t.is(levenshtein('a', 'b'), 1);
       t.is(levenshtein('ab', 'ac'), 1);
       t.is(levenshtein('ac', 'bc'), 1);
       t.is(levenshtein('abc', 'axc'), 1);
       t.is(levenshtein('kitten', 'sitting'), 3);
       t.is(levenshtein('xabxcdxxefxgx', '1ab2cd34ef5g6'), 6);
       t.is(levenshtein('cat', 'cow'), 2);
       t.is(levenshtein('xabxcdxxefxgx', 'abcdefg'), 6);
       t.is(levenshtein('javawasneat', 'scalaisgreat'), 7);
       t.is(levenshtein('example', 'samples'), 3);
       t.is(levenshtein('sturgeon', 'urgently'), 6);
       t.is(levenshtein('levenshtein', 'frankenstein'), 6);
       t.is(levenshtein('distance', 'difference'), 5);
       t.is(levenshtein('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), 2);

       // Tests with max option
       // max === 1
       t.is(levenshtein('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文', 1), Infinity);
       t.is(levenshtein('distance', 'difference', 1), Infinity);
       t.is(levenshtein('distance', 'distance', 1), 0);
       t.is(levenshtein('zéphïr', 'zéphïr', 1), 0);
       t.is(levenshtein('zéphir', 'zéphïr', 1), 1);
       // max === 2
       t.is(levenshtein('kitten', 'sitting', 2), Infinity);
       t.is(levenshtein('xabxcdxxefxgx', '1ab2cd34ef5g6', 2), Infinity);
       t.is(levenshtein('cat', 'cow', 2), 2);
       t.is(levenshtein('xabxcdxxefxgx', 'abcdefg', 2), Infinity);
       t.is(levenshtein('javawasneat', 'scalaisgreat', 2), Infinity);
       t.is(levenshtein('example', 'samples', 2), Infinity);
       t.is(levenshtein('sturgeon', 'urgently', 2), Infinity);
       t.is(levenshtein('abcdefghij', 'axbcdefghij', 2), 1);
       t.is(levenshtein('abcdefghij', 'abcdefghij', 2), 0);
       // max === 3
       t.is(levenshtein('abcdefghij', 'abcdefghij', 3), 0);
       t.is(levenshtein('abcdefghij', 'axbcdefghij', 3), 1);
       t.is(levenshtein('abcdefghij', 'acefghij', 3), 2);
       t.is(levenshtein('abcdefghij', 'acefhj', 3), Infinity);
       t.is(levenshtein('abcdefghij', 'accdffghii', 3), 3);
       t.is(levenshtein('abcdefghij', 'accdffhhii', 3), Infinity);
     });
