/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
      if (strs.length === 0) return "";

  let prefix = strs[0]; // Initialize prefix with the first string
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      // Check if the current prefix is present at the beginning of all strings
      // If not, shorten the prefix by removing the last character
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return ""; // If the prefix becomes empty, return empty string
    }
  }
  return prefix;
};