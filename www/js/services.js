angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'NICK TARTO', description: 'France', timeago: ' few seconds ago' },
    { id: 1, title: 'CLIFF RAMSEY', description: 'California, USA', timeago: '35s' },
    { id: 2, title: 'DAVE DOE', description: 'El Dorado', timeago: '1m 12s' },
    { id: 3, title: 'RYAN CHIPOLATA', description: 'Newport Beach', timeago: '28m 26s' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});
