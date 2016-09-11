exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
      return new Promise(function(resolve, reject) {
          if (value === true || value === 'success') {
              resolve(value);
          } else {
              reject(false);
          }
      });
  },

  manipulateRemoteData: function(url) {
      var def = $.Deferred();
      return $.ajax(url).then(function(resp) {
          var people = resp.people.map( each => each.name);
          return def.resolve(people.sort());
      });
  }
};
