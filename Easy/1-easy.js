//169. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
      t=1;
      for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
          obj[nums[i]] += 1;
        }else {
          obj[nums[i]] = 1;
        }
      }
    
    let max=0, maxN=0;
    
    for(const [key,val] of Object.entries(obj)){
      if(val > max) {
        max = val;
        maxN = Number(key);
      }
    }
    return maxN;
  };