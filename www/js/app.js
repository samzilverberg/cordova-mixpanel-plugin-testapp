
angular.module('testapp', ['ionic', 'testapp.services', 'testapp.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('mixpanel', {
        url: '/mixpanel',
        templateUrl: 'templates/mixpanel.html',
        controller: 'MixpanelCtrl'
      });

    $urlRouterProvider.otherwise('/mixpanel');
  });

