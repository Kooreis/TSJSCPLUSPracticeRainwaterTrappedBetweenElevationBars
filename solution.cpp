```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int calculateRainwater(std::vector<int>& heights) {
    int n = heights.size();
    if(n <= 2) return 0;
    std::vector<int> left(n, 0), right(n, 0);
    left[0] = heights[0];
    right[n-1] = heights[n-1];
    for(int i = 1; i < n; i++) {
        left[i] = std::max(left[i-1], heights[i]);
        right[n-i-1] = std::max(right[n-i], heights[n-i-1]);
    }
    int totalWater = 0;
    for(int i = 0; i < n; i++) {
        totalWater += std::min(left[i], right[i]) - heights[i];
    }
    return totalWater;
}

int main() {
    std::vector<int> heights;
    int n, temp;
    std::cout << "Enter number of elevation bars: ";
    std::cin >> n;
    std::cout << "Enter heights of elevation bars: ";
    for(int i = 0; i < n; i++) {
        std::cin >> temp;
        heights.push_back(temp);
    }
    int totalRainwater = calculateRainwater(heights);
    std::cout << "Total rainwater trapped is: " << totalRainwater << std::endl;
    return 0;
}
```