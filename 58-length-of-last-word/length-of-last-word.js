/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  
  // Remove trailing spaces (optional)
  s = s.trim();

  // Split the string into words using spaces as delimiter
  const words = s.split(' ');

  // Check if there are any words
  if (!words.length) return 0;

  // Return the length of the last word
  return words[words.length - 1].length;

};