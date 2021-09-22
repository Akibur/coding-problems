let start = 0;
let end = height.length - 1;
let maxWater = -Infinity;

while (start != end) {
    let minHeight = Math.min(height[start], height[end]);

    if (height[start] >= height[end]) {

        maxWater = Math.max(maxWater, minHeight * (end - start));
        end--;

    } else {
        maxWater = Math.max(maxWater, minHeight * (end - start));
        start++;
    }

    console.log(minHeight);


}

return maxWater;