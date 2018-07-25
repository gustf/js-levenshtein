/**
 * Naive implementation of the levenstein distance algorithm.
 * 
 * TODO: Requires a major speed boost!
 * 
 * Test outcomes: 
                      50 paragraphs, length max=500 min=240 avr=372.5
             100 op/s » js-levenshtein
              61 op/s » talisman
              51 op/s » levenshtein-edit-distance
              57 op/s » leven
              26 op/s » fast-levenshtein
              10 op/s » leva

                      100 sentences, length max=170 min=6 avr=57.5
           1,980 op/s » js-levenshtein
           1,234 op/s » talisman
           1,221 op/s » levenshtein-edit-distance
           1,088 op/s » leven
             527 op/s » fast-levenshtein
             218 op/s » leva

                      2000 words, length max=20 min=3 avr=9.5
           2,046 op/s » js-levenshtein
           1,381 op/s » talisman
           1,491 op/s » levenshtein-edit-distance
           1,298 op/s » leven
             885 op/s » fast-levenshtein
             378 op/s » leva
 *
 */

module.exports = {
  levensteinDistance: (text, search) => {
    // aliases for the two strings
    const sa = text;
    const sb = search;
    // initialize the two dimensional array
    let dist = []
    // populate the array
    for (let i = 0; i <= sa.length; i++) {
      dist[i] = [i]; // define array 
    }
    for (let i = 0; i <= sb.length; i++) {
      dist[0][i] = i;
    }
    // the bottom up computation of the matrix
    for (let i = 1; i <= sa.length; i++) {
      for (let j = 1; j <= sb.length; j++) {
        if (sa.charAt(i - 1) == sb.charAt(j - 1)) {
          dist[i][j] = dist[i - 1][j - 1];
        } else {
          dist[i][j] = Math.min(
            dist[i - 1][j - 1] + 1, // substitution
            Math.min(dist[i][j - 1] + 1, // insertion
              dist[i - 1][j] + 1) // deletion
          );
        }
      }
    }

    return dist[sa.length][sb.length];
  }
}
