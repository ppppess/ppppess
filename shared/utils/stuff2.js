var ret = {};

ret.ab2 = function(my) {
   var start = function(ab) {
      var arr = new Uint8Array(ab), n = arr.length; return {arr:arr, n:n };
   };
   my.b64 = function( ab ) {
    var db = start(ab), binary = '';
    for (var i = 0; i < db.n; i++) {
        binary += String.fromCharCode( db.arr[ i ] );
    }
    return btoa( binary );
   };
   my.hex = function(ab) {
      var db = start(ab), hexBytes = [];
      for (var i = 0; i < db.n; ++i) {
         var bs = db.arr[i].toString(16);
         hexBytes.push(bs.length < 2 ? ("0" + bs) : bs );
      }
      return hexBytes.join("");
   };
   my.str = function(ab) {
      var db = istype(ab).array ? {arr:ab, n:ab.length} : start(ab);
      var str = '';
      for (var i = 0; i < db.n; ++i)str += String.fromCharCode(db.arr[i]);
      return str;
   };
   my.arr = function(ab) { // approx equal in speed for 51200 bytes
      var db = start(ab), result = new Array(db.n), len = db.n;
      result[0] = db.arr[0];
      while (--len > 0)result[len] = db.arr[len];
      return result;
   };
   my.obj = function(ab) {
   	// console.log(ab)
   	// console.log(my.str(ab))
   	var x = my.str(ab);
      return x ? JSON.parse(x) : x;
   };
   my.number = function(ab) {
      return +my.str(ab);
   };
   return my;
}(ab2||{});

ret.str2 = function(my) {
   my.ab = function(string, uint8) {
      var n = string.length;
      var buffer = new ArrayBuffer(n);
      var bufferView = new Uint8Array(buffer);
      for (var i = 0; i < n; i++)bufferView[i] = string.charCodeAt(i);
      return uint8 ? bufferView : buffer;
   };
   my.uint8 = function(str) {
      return my.ab(str, 1);
   };
   my.obj = function(str) {
      return JSON.parse(str);
   };
   my.arr = function(str) {
      return ab2.arr( my.ab(str) );
   };
   return my;
}(str2||{});

ret.obj2 = function(my) {
   my.ab = function(obj, uint8) {
      return str2.ab(JSON.stringify(obj), uint8);
   };
   my.uint8 = function(obj) {
      return my.ab(obj, 1);
   };
   my.obj = function(obj) {
      return obj;
   };
   my.arr = function(obj) {
      return ab2.arr( my.ab(obj) );
   };
   return my;
}(obj2||{});

ret.arr2 = function(my) {
   my.ab = function(arr) {
      var x = new Uint8Array(arr); return x.buffer;
   };
   return my;
}(arr2||{});

module.exports = ret;