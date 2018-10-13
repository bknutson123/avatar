angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('avatar', avatarDirective);

function mainCtrl ($scope) {

  $scope.users = [];

  $scope.addNew = function (user) {
    $scope.users.push({
      name: user.name,
      avatarUrl: user.url,
      email: user.email
    }); /* [1] */

    user.name = ''; /* [2] */
    user.url = '';
    user.email = '';
  };
}
function avatarDirective () {
  return {
    scope: {
      user: '=' /* [1] */
    },
    restrict: 'E', /* [2] */
    replace: 'true',
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
        '<h8>{{user.email}}</h8>' +
      '</div>'
    ), /* [3] */
    link: link
  };

  function link (scope) { /* [4] */
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'https://www.drupal.org/files/issues/default-avatar.png';
    }
    if (!scope.user.email) {
      scope.user.email = "No email provided...";
    }
  }

}