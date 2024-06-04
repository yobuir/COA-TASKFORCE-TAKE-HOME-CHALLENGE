function hasContiguousSubarray(arr, target) {
    let left = 0;
    let right = 0;
    let currentSum = 0;

    while (right < arr.length) {
        currentSum += arr[right];

        while (currentSum > target) {
            currentSum -= arr[left];
            left++;
        }

        if (currentSum === target) {
            return true;
        }

        right++;
    }

    return false;
}
 
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarray(arr, target)); 
