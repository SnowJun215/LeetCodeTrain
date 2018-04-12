/**
 * LeetCodeTrain.git
 * No_3_LengthOfLongestSubstring
 * Created by June_z on 2018/4/12.
 * Create time 12:21
 */

/**
 * 用map保存遍历过元素的下标
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_map = function(s) {
  var map = {};
  var max_len = 0;
  var start = 0;

  for(var i = 0; i < s.length; i++){
    if(map[s[i]]){
      start = map[s[i]] > start ? map[s[i]] : start;
    }
    map[s[i]] = i + 1;
    var tempLen = i + 1 - start;
    max_len = tempLen > max_len ? tempLen : max_len;
  }
  return max_len;
};

/**
 * 用下标的方式获取无重复字符的最长子串，并保存最长的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_point = function(s) {
  if(s.length < 1){
    return 0;
  }

  let start = 0,
      end = 1,
      max_len = 1,
      subStr = s[0];

  for(; end < s.length; end++){
    let index = subStr.indexOf(s[end]);
    if(index >= 0){
      start += index + 1;
    }

    subStr = s.slice(start, end + 1);
    max_len = subStr.length > max_len ? subStr.length : max_len;
  }

  return max_len;
};