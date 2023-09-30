"use strict";var h=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var g=h(function(A,v){"use strict";var m=require("@stdlib/assert-is-ndarray-like"),d=require("@stdlib/assert-is-multi-slice"),w=require("@stdlib/assert-is-array-like-object"),f=require("@stdlib/assert-is-plain-object"),p=require("@stdlib/assert-is-boolean").isPrimitive,y=require("@stdlib/ndarray-base-assert-is-read-only"),q=require("@stdlib/assert-has-own-property"),c=require("@stdlib/slice-multi"),b=require("@stdlib/ndarray-base-slice-assign"),s=require("@stdlib/string-format");function E(t,r,o){var n,i,u,a,l,e;if(u={strict:!0},i=arguments.length,!m(t))throw new TypeError(s("invalid argument. First argument must be an ndarray. Value: `%s`.",t));if(!m(r))throw new TypeError(s("invalid argument. Second argument must be an ndarray. Value: `%s`.",r));if(y(r))throw new Error("invalid argument. Cannot write to a read-only array.");if(f(arguments[i-1])){if(i-=1,n=arguments[i],q(n,"strict")){if(!p(n.strict))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",n.strict));u.strict=n.strict}if(i===2&&r.shape.length>0)throw new RangeError(s("invalid argument. Number of slice dimensions does not match the number of array dimensions. Array shape: (%s). Slice dimensions: %u.",r.shape.join(","),0))}if(d(o)){if(l=o,i>3)throw new Error("invalid invocation. Too many arguments.")}else{if(w(o)){if(a=o,i>3)throw new Error("invalid invocation. Too many arguments.")}else for(a=[],e=2;e<i;e++)a.push(arguments[e]);try{l=c.apply(null,a)}catch(T){for(e=0;e<a.length;e++)try{new c(a[e])}catch(O){throw new TypeError(s("invalid argument. Slice arguments must be either a Slice, integer, null, or undefined. Value: `%s`.",String(a[e])))}}}return b(t,r,l,u.strict)}v.exports=E});var S=g();module.exports=S;
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
