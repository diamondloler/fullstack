 (function (root, factory) {
   if (typeof define === 'function' && define.amd) {
     define([], function () {
       return factory(root);
     });
   } else if (typeof exports === "object" && typeof module !== "undefined") {
     module.exports = factory(root);
   } else if (typeof exports === 'object') {
     exports["MMTools"] = factory();
   } else {
     root.MMTools = factory(root);
   }
 })(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {
   var mixmediaToolsFactory = function () {




     /**
      * 这个是mixmedia的前端工具库，写入常用的method，或把兼容性不好的es5 api 补丁到这里，日后方便大家开发，
      * 欢迎各位同事来添加api
      */
     var publicApis = {};




     /**
      * 合并对象
      * 替换es2015api - Object.assign(target,scource[,,,,])(IE不支持)
      * @param {Object} target 合并的目标
      * @param {Object} arguments index begin with 1, 2, 3... (要合并到目标的对象资源)
      * @return {Object} 已合并的对象
      */
     publicApis.merge = function (target) {
       for (var i = 1; i < arguments.length; i++) {
         var source = arguments[i] || {};
         for (var key in source) {
           if (source.hasOwnProperty(key) && source[key] !== undefined) {
             target[key] = source[key]
           }
         }
       }
       return target;
     }



     /**
      * 深度克隆对象
      * @param {Object} obj 
      * @return {Object}
      */
     publicApis.cloneDeep = function (obj) {
       return JSON.parse(JSON.stringify(obj));
     }




     /**
      * 匹配字符串数组每个元素的起始部分或终点部分，假如数组中某一个字符串与验证字符串匹配成功 则返回true
      * @param {Array} matchArray 匹配的字符串数组
      * @param {String} checkString 需要验证的字符串
      * @param {String} isStart 是否匹配起始部分 默认 是
      * @return {Boolean}
      */
     publicApis.matchTerminal = function (matchArray, checkString, isStart) {
       var flag = false;
       var regExpStart = '(';
       var regExpEnd = ')';

       isStart = isStart || true;
       isStart ? regExpStart = '^(' : regExpEnd = ')$';

       matchArray.forEach(function (val) {
         if (new RegExp(regExpStart + val + regExpEnd).test(checkString)) {
           flag = true;
         }
       })

       return flag;
     }




     /**
      * html标签过滤器
      * @param {String} val 将要过滤的字符串
      * @return {String}
      */
     publicApis.tagFliter = function (val) {
       return val.replace(/(\<\/?\w+\>)/g, '');
     }



     /**
      * 浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
      * 替换es2015的Array.copyWithin(target, start, end)---不支持IE
      * @param {Array} arr 将要被浅复制的数组
      * @param {Number} target 0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算
      * @param {Number} start 0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
      * @param {Number} end  0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，
      * 但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
      * @return {Array} 
      */
     publicApis.copyWithin = function (arr, target, start, end) {
       var target_ = (target < 0 ? arr.length + target : target) || 0,
         start_ = (start < 0 ? arr.length + start : start) || 0,
         end_ = (end < 0 ? arr.length + end : end) || arr.length;

       var nagative_flag = start < 0 && end < 0 ? true : false;
       var target_reactive = target < 0 ? 1 : -1;

       if (target_ > arr.length) {
         throw new rangeError('The 1st parameter must less than length of the 2nd parameter');
       }

       arr[target_] = arr[start_];

       if (!nagative_flag) {
         for (var i = start_, j = 1; i < end_; i++, j++) {
           arr[target_ + j] = arr[i + 1]
         }
       } else {
         for (var i = start_, j = target_reactive; i > end_; i--, j += target_reactive) {
           arr[target_ - j] = arr[i - 1]
         }
       }

       return arr;
     }



     /** 
      * 对象key转换器
      * @param {Array} targetKeys 你想转换成的key集合
      * @param {Array} originKeys 源key集合
      * @param {Object} origin 源对象
      * @return {Object}  返回一个含有 targetKeys 的对象
      */
     publicApis.keyTransverter = function (targetKeys, originKeys, origin) {
       var target = {}
       for (var i = 0, len = targetKeys.length; i < len; i++) {
         target[targetKeys[i]] = origin[originKeys[i]]
       }
       return target
     }

     //return apis
     return publicApis;

   }

   return mixmediaToolsFactory();
 })
