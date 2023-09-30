"use strict";var h=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var g=h(function(j,v){"use strict";var c=require("@stdlib/assert-is-ndarray-like"),p=require("@stdlib/assert-is-multi-slice"),d=require("@stdlib/assert-is-array-like-object"),f=require("@stdlib/assert-is-plain-object"),w=require("@stdlib/assert-is-boolean").isPrimitive,y=require("@stdlib/assert-has-own-property"),m=require("@stdlib/slice-multi"),b=require("@stdlib/ndarray-base-slice-assign"),s=require("@stdlib/string-format");function q(a,r,o){var n,i,u,t,l,e;if(u={strict:!0},i=arguments.length,!c(a))throw new TypeError(s("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(!c(r))throw new TypeError(s("invalid argument. Second argument must be an ndarray. Value: `%s`.",r));if(f(arguments[i-1])){if(i-=1,n=arguments[i],y(n,"strict")){if(!w(n.strict))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",n.strict));u.strict=n.strict}if(i===2&&r.shape.length>0)throw new RangeError(s("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",r.shape.join(","),0))}if(p(o)){if(l=o,i>3)throw new Error("invalid invocation. Too many arguments.")}else{if(d(o)){if(t=o,i>3)throw new Error("invalid invocation. Too many arguments.")}else for(t=[],e=2;e<i;e++)t.push(arguments[e]);try{l=m.apply(null,t)}catch(E){for(e=0;e<t.length;e++)try{new m(t[e])}catch(T){throw new TypeError(s("invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.",String(t[e])))}}}return b(a,r,l,u.strict)}v.exports=q});var S=g();module.exports=S;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
