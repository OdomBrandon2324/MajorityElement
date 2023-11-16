Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
const majorityElement= (nums) => {
  // created object to map our current index/total count
  let obj = {};
  // created to store highest value of object 
  let majorityIndex = 1;
  // created to store the key of the highest count object key value
  let majorityKey;
  // sorting the nums array in increasing order from 0 index
  nums.sort((a,b) => a - b)
  // running forEach loop to add counts in object as key, value pairs
  nums.forEach((x) => {
  // If a key is present in the object it will add 1 to the value currently present. Otherwise it will set the value for the key as 0 and then add 1 as a representative of the count for that element found in the arr
    obj[x] = (obj[x] || 0) + 1;
    // used to keep track and store the highest key/value
    obj[x] > majorityIndex ? (majorityIndex = obj[x], majorityKey = x) : '';  
  })
  
  console.log(majorityKey);
  return majorityKey;
}

majorityElement(nums = [3,2,3])
majorityElement(nums = [2,2,1,1,1,2,2])