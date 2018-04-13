/**
 * LeetCodeTrain.git
 * No_20_IsValid
 * Created by June_z on 2018/4/13.
 * Create time 15:51
 */

/**
 * 用map存对象，for循环和栈处理
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    if(s.length % 2 === 1 || s.length === 0){
        return false;
    }

    var testList = [s[0]];
    for(let i = 1; i < s.length; i++){
        let len = testList.length
        if(len > 0 && testList[len - 1] === map[s[i]]){
            testList.length = len - 1;
        }else{
            testList.push(s[i]);
        }
    }
    return testList.length <= 0;
};

/**
 * 用栈的方式判断
 * @param {string} s
 * @return {boolean}
 */
var isValid_Stack = function(s) {
    if(!s || s.length < 1) {
        return false;
    }

    let inputStr = [];
    for(let i = 0; i < s.length; i++){
        switch(s[i]){
            case '(':
                inputStr.push(')');
                break;
            case '[':
                inputStr.push(']');
                break;
            case '{':
                inputStr.push('}');
                break;
            default:
                if(inputStr.pop() !== s[i]){
                    return false;
                }
        }
    }
    return inputStr.length === 0;
};