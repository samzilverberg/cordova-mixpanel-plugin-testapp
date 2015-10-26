angular.module('testapp.services', [])

/**
 * A simple example service that returns some data.
 */
  .factory('ATestService', function() {
    // Some fake testing data
    var data = [
      { id: 0, title: 'A' },
      { id: 1, title: 'B' },
      { id: 2, title: 'C' },
      { id: 3, title: 'D' }
    ];

    return {
      all: function() {
        return data;
      },
      get: function(id) {
        return data[id];
      }
    }
  });
