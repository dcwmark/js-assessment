exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
//      return arr.reduce(function(prev, curr) {
//          return prev + curr;
//      });
      return arr.reduce( (prev, curr) => prev + curr );
  },

  remove: function(arr, item) {
      return arr.filter( each => each !== item );
  },

  removeWithoutCopy: function(arr, item) {
      return arr.filter(function(each) {
          return each !== item;
      });
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift(arr);
      return arr;
  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
