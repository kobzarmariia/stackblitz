/*
 * @param {number[]} nums
 * @return {boolean}
 */
function jumpGame(nums) {
    const numsLength = nums.length;
    let maxPathIndex = 0;
    if (numsLength === 1) {
        return true;
    }
    if (numsLength === 0 || nums[0] === 0) {
        return false;
    }
    for (let i = 0; i < numsLength - 1; i++) {
        if (i > maxPathIndex) {
            return false;
        } else {
            const maxJump = i + nums[i];
            maxPathIndex = maxJump > maxPathIndex ? maxJump : maxPathIndex;
        }
        const reqSteps = numsLength - (i + 1);
        if (reqSteps <= nums[i]) {
            return true;
        }
    }
    return false;
};

// Test
console.log(jumpGame([1,0,0]));
console.log(jumpGame([2,0,1]));