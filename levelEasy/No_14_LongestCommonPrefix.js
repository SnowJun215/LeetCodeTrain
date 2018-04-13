/**
 * LeetCodeTrain.git
 * No_14_LongestCommonPrefix
 * Created by June_Z on 2018/4/13.
 * Create time 10:11
 */

/**
 * 用循环的方式获取
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix_For = function(strs) {
  strs.sort(function(a, b){
    return a.length - b.length;
  })
  let com = strs[0] || '';
  for(let i = 0; i < strs.length; i++){
    if(com === strs.slice(0, com.lenght)){
      continue;
    }
    if(com === ''){
      break;
    }

    for(let j = 0; j < com.length; j++){
      if(com[j] !== strs[i][j]){
        com = com.slice(0, j);
      }
    }
  }
  return com;
};


/**
 * 用递归的方法获取
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix_Recursive = function(strs) {
  let compare = function(str1, str2){
    if(str2.indexOf(str1) === 0){
      return str1;
    }
    if(str1.length < 1){
      return '';
    }
    return compare(str1.slice(0, str1.length - 1), str2)
  };

  if (strs.length < 1) {
    return '';
  }

  let result = strs[0];
  for(let i = 1; i < strs.length; i++){
    result = compare(result, strs[i]);
  }
  return result;
};