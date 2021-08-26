// Default Export
// ```js
// // CommonJS
// var _ = require('underscore');
//
// // AMD
// define(['underscore'], function(_) {...});
//
// // UMD in the browser
// // _ is available as a global variable
// ```
import _aby from './aby.js';
import * as allExports from './index.js';
const { add } = allExports
console.log(add)

// function chainResult(instance, obj) {
//   return instance._chain ? _(obj).chain() : obj;
// }


// function functions(obj) {
//   var names = [];
//   for (var key in obj) {
//     if (typeof obj[key] == 'function') names.push(key);
//   }
//   return names.sort();
// }

// // console.log(functions(allExports))

// function mixin(obj){
//   const arr = functions(obj)
//   arr.forEach(name => {
//     var func = _aby[name] = obj[name];
//     _aby.prototype[name] = function(){
//       var args = [this._wrapped];
//           push.apply(args, arguments);
//       return chainResult(this, func.apply(_aby, args))
//     }
//   })
//   return _aby
// }
  
// function mixin(obj) {
//   each(functions(obj), function(name) {
//     var func = _[name] = obj[name];
//     _.prototype[name] = function() {
//       var args = [this._wrapped];
//       push.apply(args, arguments);
//       return chainResult(this, func.apply(_, args));
//     };
//   });
//   return _;
// }

// Add all of the functions to the wrapper object.
// var _ = mixin(allExports)

var _={
  VERSION: '1.13.1', 
  add
}

console.log(_)

// Legacy Node.js API.
_._ = _;
// Export the  API.
export default _;
