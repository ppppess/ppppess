
var ret = {};

var typeget = function(o) {
   var s = Object.prototype.toString.call(o);
   return s.slice(s.indexOf(" ") + 1, s.length - 1).toLowerCase();
};
var istype = function(elem) {
   if (elem && elem.noclone) return {
      toto: 1
   };
   var h = {};
   h[typeget(elem)] = true;
   return h;
};

// licence jquery (https://github.com/jquery/jquery/blob/master/LICENSE.txt)
ret.extend = function() {
   var options, name, src, copy, copyIsArray, clone, typecopy, typesrc,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;
   if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
   }
   if (typeof target !== "object" && !istype(target).function) target = {};
   if (i === length) {
      target = this;
      i--;
   }
   for (; i < length; i++) {
      if ((options = arguments[i]) != null) { // Only deal with non-null/undefined values
         for (name in options) {
            src = target[name];
            copy = options[name];
            if (target === copy) continue; // Prevent never-ending loop
            // Recurse if we're merging plain objects or arrays
            typecopy = istype(copy);
            typesrc = istype(src);
            if (deep && copy && (typecopy.object || (copyIsArray = typecopy.array))) {
               if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && typesrc.array ? src : [];
               } else {
                  clone = src && typesrc.object ? src : {};
               }
               target[name] = extend(deep, clone, copy); // Never move original objects, clone them
            } else if (copy !== undefined) { // Don't bring in undefined values
               target[name] = copy;
            }
         }
      }
   }
   return target;
};

ret.istype = istype;
ret.typeget = typeget;

module.exports = ret;