Here is a JavaScript solution for the problem:

```javascript
function calculateRainwater(heights) {
    let left = 0, right = heights.length - 1;
    let maxLeft = 0, maxRight = 0;
    let rainwater = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left];
            } else {
                rainwater += maxLeft - heights[left];
            }
            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                rainwater += maxRight - heights[right];
            }
            right--;
        }
    }

    return rainwater;
}

console.log(calculateRainwater([0,1,0,2,1,0,1,3,2,1,2,1]));
```

This console application calculates the amount of rainwater that can be trapped between elevation bars. The input is an array of integers where each integer represents the height of an elevation bar. The output is the total amount of rainwater that can be trapped.