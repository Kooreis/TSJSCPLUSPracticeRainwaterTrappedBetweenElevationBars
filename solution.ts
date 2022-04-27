Here is a TypeScript solution for the problem:

```typescript
class RainwaterTrap {
    calculateWater(arr: number[]): number {
        let n = arr.length;
        let left = new Array(n).fill(0);
        let right = new Array(n).fill(0);
        let water = 0;

        left[0] = arr[0];
        for (let i = 1; i < n; i++)
            left[i] = Math.max(left[i - 1], arr[i]);

        right[n - 1] = arr[n - 1];
        for (let i = n - 2; i >= 0; i--)
            right[i] = Math.max(right[i + 1], arr[i]);

        for (let i = 0; i < n; i++)
            water += Math.min(left[i], right[i]) - arr[i];

        return water;
    }
}

let rainwaterTrap = new RainwaterTrap();
let arr = [3, 0, 2, 0, 4];
console.log(rainwaterTrap.calculateWater(arr));
```

This TypeScript program calculates how much rainwater can be trapped between elevation bars. The `calculateWater` method takes an array of numbers as input, which represents the height of the bars. It then calculates the maximum height of the bar from the left and right side for every bar. The amount of water that can be stored in every bar is the minimum of maximum height of bars on both the sides minus its own height. This value is then added to the total amount of water stored. The result is then printed to the console.