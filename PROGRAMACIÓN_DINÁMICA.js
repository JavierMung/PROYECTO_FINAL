<script>
    // A Dynamic Programming solution for subset sum problem
     
    // Returns true if there is a subset of
    // set[] with sun equal to given sum
    function isSubsetSum(set, n, sum)
    {
        // The value of subset[i][j] will be
        // true if there is a subset of
        // set[0..j-1] with sum equal to i
        let subset = new Array(sum + 1);
         
        for(let i = 0; i < sum + 1; i++)
        {
            subset[i] = new Array(sum + 1);
            for(let j = 0; j < n + 1; j++)
            {
                subset[i][j] = 0;
            }
        }
  
        // If sum is 0, then answer is true
        for (let i = 0; i <= n; i++)
            subset[0][i] = true;
  
        // If sum is not 0 and set is empty,
        // then answer is false
        for (let i = 1; i <= sum; i++)
            subset[i][0] = false;
  
        // Fill the subset table in botton
        // up manner
        for (let i = 1; i <= sum; i++) {
            for (let j = 1; j <= n; j++) {
                subset[i][j] = subset[i][j - 1];
                if (i >= set[j - 1])
                    subset[i][j] = subset[i][j]
                                   || subset[i - set[j - 1]][j - 1];
            }
        }
  
        /* // uncomment this code to print table
        for (int i = 0; i <= sum; i++)
        {
        for (int j = 0; j <= n; j++)
            System.out.println (subset[i][j]);
        } */
  
        return subset[sum][n];
    }
     
    let set = [ 3, 34, 4, 12, 5, 2 ];
    let sum = 9;
    let n = set.length;
    if (isSubsetSum(set, n, sum) == true)
      document.write("Found a subset" + " with given sum");
    else
      document.write("No subset with" + " given sum");
     
    // This code is contributed by decode2207.
</script>
