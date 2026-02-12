/*
Remove Duplicates from Sorted Array
*/

function removeDuplicates(nums){
    let i=0;

    for(let j=1;j<nums.lengthl;j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
}

// Test Cases
console.log(removeDuplicates([1,1,2])); // Output: 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5
console.log(removeDuplicates([])); // Output: 0
console.log(removeDuplicates([1])); // Output: 1