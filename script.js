function threeSum(arr, target) {
// write your code here
    let difference=Number.MAX_VALUE;
    let result=0;
    let n=arr.length;

    // Now sort the array
    arr.sort();

    // Now form triplets
    for(let i=0; i<n; i++)
    {
        let j=i+1;
        let k=n-1;   // two pointers
        while(j<k)
        {
            let sum=arr[i]+arr[j]+arr[k];
            if(Math.abs(sum-target) < Math.abs(difference))
            {
                difference=sum-target;
                result=sum;    // we need to return sum of triplets
            }

            // To update pointers
            if(sum<target)
            {
                // Increase smaller value
                j++;
            }
            else
            {
                // decrease larger value
                k--;
            }
        }
    }
    return result;
}

module.exports = threeSum;
