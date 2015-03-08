
window.localStorage = undefined;

var rien = function() {};
var to_a = function(list, start) { // much faster than Array.prototype.slice.call(list || [], 0), apparently
   start = start || 0;
   var n = list.length, args = Array(n); // can also be used to "clone" an array (but will not be a real clone,..
   for (var i = start; i < n; i++) args[i-start] = list[i]; // ..as it will still preserve all pointers to objects)
   return args;
};
var now = function() { 
   return new Date().getTime();
};
var to_f = function(f, obj) {
   return istype(f).function ? f : obj[f].bind(obj);
};
var hd = function(h, k) {
   var ret = h[k];
   delete h[k];
   return ret;
};
var uniqueIds = function(name) {
   var t = this, i = 0;
   name = name || "a";
   t.add = function() {
      return name + (i += 1);
   };
};
var makeUniqueIds = new uniqueIds();
var guid = makeUniqueIds.add;
var uuid = function() {
   return (Math.random() + 1).toString(36).substring(2);
};
var trueUUID = function(strength) {
   return bytes2hex(rdmv(strength));
};
var b64UUID = function(strength) {
   return ab2.b64(rdmv(strength));
};
var randomValues = rdmv = function(strength, toa) {
   var a = new Uint8Array(strength);
   window.crypto.getRandomValues(a);
   return toa ? to_a(a) : a;
};

var showErr = prmcatch = function(e) {console.error(e, e.stack);}; 
var gf = function(str, root) {
   var c, v = root || window;
   // console.log(str, root)
   str.split(".").forEach(function(it) {
      try {
         c = v;
         v = v[it];
      } catch (e) {
         return null;
      }
   });
   return istype(v).function ? [v, c] : null;
};
// var toFunc = function(func, obj) {
//    return function(p) {
//       obj[func](p)
//    }
// }
var extend = function() {
   var options, name, src, copy, copyIsArray, clone,
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
            if (deep && copy && (istype(copy).object || (copyIsArray = istype(copy).array))) {
               if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArray(src) ? src : [];
               } else {
                  clone = src && istype(src).object ? src : {};
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

var doErr = function() {
   var arr = to_a(arguments);
   var e = new Error(arr.shift());
   var a = e.stack.split("\n");
   a.shift();
   a.shift();
   console.error("stack:", a.map(function(it) {
      return it.split("/").pop();
   }));
   console.error("args:", arr);
   throw e;
};
var arrfromto = function(deb, fin, step) {
   step = step || 1;
   var i, a = [],
      s = step / Math.abs(step);
   for (i = deb; s * i < s * fin; i += step) a.push(i);
   return a;
};
// var getrecord = function(sname, rname) {
//    return function() {
//       return Store(sname).rec(rname)
//    }
// }
var formatFilename = function(nam) {
   return nam.replace(/\/+/g, "/").replace(/^\//, "").replace(/^root/, "");
};
// var isInstance = function(ob, cls) {
//    return (ob instanceof cls);
// }
var clone = function(obj) {
   var t = istype(obj);
   if (t.array) return obj.map(function(it) {
      return clone(it);
   });
   if (!t.object) return obj;
   var cln = {};
   for (var i in obj) cln[i] = clone(obj[i]);
   return cln;
};

var initfile111 = function(type, url) {
   return {docId:rdmv(32,1), type:type}; 
   return {docId:rdmv(32,1), iv:rdmv(16,1), key:rdmv(16,1), type:type, url:url||0}; 
};

var ab2b64 = function( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
};
var ab2str = function(buffer) {
   var array = istype(buffer).array ? buffer : new Uint8Array(buffer);
   var str = '';
   var n = array.length;
   for (var i = 0; i < n; ++i)str += String.fromCharCode(array[i]);
   return str;
};
var str2ab = function(string, uint8) {
   var n = string.length;
   var buffer = new ArrayBuffer(n);
   var bufferView = new Uint8Array(buffer);
   for (var i = 0; i < n; i++)bufferView[i] = string.charCodeAt(i);
   return uint8 ? bufferView : buffer;
};

var bytes2hex = function(bytes) {
   bytes = new Uint8Array(bytes);
   var n = bytes.length;
   var hexBytes = [];
   for (var i = 0; i < n; ++i) {
      var byteString = bytes[i].toString(16);
      if (byteString.length < 2)byteString = "0" + byteString;
      hexBytes.push(byteString);
   }
   return hexBytes.join("");
};
var hex2uint8 = function(string) {
   return str2ab(string, 1);
};
var ab2arr111 = function(ab) {
   return Array.apply(null, new Uint8Array(ab) );  // this one chokes when size > 100 K
};
var ab2arr = function(ab) { // approx equal in speed for 51200 bytes
   var typedArray = new Uint8Array(ab);
   var len = typedArray.length;
   var result = new Array(len);
   result[0] = typedArray[0];
   while (--len > 0)result[len] = typedArray[len];
   return result;
};
var obj2ab = function(obj, uint8) { // obj is a Uint8Array transformed to object: {0:116,1:88, .....}
   var n = Object.keys(obj).length;
   var buffer = new ArrayBuffer(n);
   var bufferView = new Uint8Array(buffer);
   for (var i = 0; i < n; i++)bufferView[i] = obj[i];
   return uint8 ? bufferView : buffer;
};
var ab2h = function(ab) { return JSON.parse( ab2str(ab) ); };
var h2ab= function(h) { return str2ab( JSON.stringify(h) ); };

var arr2ab = function(arr, uint8) {
   if(istype(arr).arraybuffer)return arr;
   var n = arr.length;
   // var buffer = new ArrayBuffer(n);
   var bufferView = new Uint8Array(arr);
   // for (var i = 0; i < n; i++)bufferView[i] = string.charCodeAt(i);
   return uint8 ? bufferView : bufferView.buffer;
};
var addWorker = function(p) {
   var worker = new Worker(URL.createObjectURL(new Blob([ p.script ])));
   worker.addEventListener('error', workerError, false);
   // return ConWk(p.wnam).setListeners(worker, p.wnam)
   return ConWk(p.wnam).setWorker(worker);
};
var workerError = function(e) {
   doErr(['Worker ERROR: Line', e.lineno, 'in', e.filename, ':', e.stack].join(' '));
};


var gv = function(str) {
   var v = window;
   str.split(".").forEach(function(it) {
      v = v[it.trim()];
   });
   return v;
};
var noDbl = function(stuff) {
   return stuff.replace(/\/+/g, "/");
};
var noRoot = function(stuff) {
   return noDbl(stuff.replace("root", ""));
};

