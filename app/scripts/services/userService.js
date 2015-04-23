angular.module('myApp')
  .factory('userService', function () {

    var user = {
      name: 'Robin',
      email: 'a@b.com',
      avatarColor: {
        r: 0,
        g: 255,
        b: 255,
        a: 1
      }
    };

    var _getUserById = function (id) {
      return user;
    };

    // Public API
    return {
      getUser: function (id) {
        return _getUserById(id);
      }
    }
  });