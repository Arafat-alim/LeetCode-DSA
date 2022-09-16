// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isPalindrome = function (s) {
  // remove the non alphanumeric including whitespace
  s = s.toLowerCase().replace(/[\W_]/g, ""); // updated string

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
