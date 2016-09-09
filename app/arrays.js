exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      var ans = -1;
      for (var x in arr) {
          if (arr[x] === item) {
              ans = Number(x);
              break;
          }
      }
      return ans;
  },

  sum: function(arr) {
      return arr.reduce( (prev, curr) => prev + curr );
  },

  remove: function(arr, item) {
      return arr.filter( each => each !== item );
  },

  removeWithoutCopy: function(arr, item) {
      while( true ) {
          (function(indx) {
              arr.splice(indx, 1);
          })( arr.indexOf(item) );
          if (arr.indexOf(item) < 0) {
              break;
          }
      }
      return arr;
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
      return (arr1.join(',') + ',' + arr2.join(',')).split(',');
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
      return arr.reduce(function(fold, each) {
          return fold += (each === item) ? 1 : 0;
      }, 0);
  },

  duplicates: function(arr) {
      var sarr = arr.sort();
      var res = {};
      _.each(sarr, function(each, indx) {
          if (sarr[indx] === sarr[indx + 1]) {
              res[sarr[indx]] = sarr[indx];
          }
      });
      return Object.keys(res).map( each => Number(each) ) ;
  },

  square: function(arr) {
      return arr.map( each => each * each );
  },

  findAllOccurrences: function(arr, target) {
      var res = [];
      $.each(arr, function(indx, each) {
          (each === target) ? res.push(indx) : '';
      });
      return res;
  }
};
