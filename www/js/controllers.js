angular.module('testapp.controllers', [])

  // A simple controller that shows a tapped item's data
  .controller('MixpanelCtrl', function($scope) {

    var mixpanel = null,
      token = ''; //<< PUT YOUR TOKEN OF YOUR MIXPANEL PROJECT HERE

    $scope.initMixpanel = function() {
      console.log('init mixpanel');
      mixpanel = window.mixpanel;
      console.log('whats in window.mixpanel?');
      console.log(Object.keys(mixpanel));
      mixpanel.init(token),
        function(what) {
          console.log('success init');
          setTimeout(function() {
            mixpanel.track('init mixpanel', {what:1}, function() {

            }, function() {

            })
          }, 2000);
          console.log(what);

        }, function(err) {
          console.log('fail init');
          console.log(err);

        }
    };

    $scope.track = function() {
      mixpanel.track('track test 2', { color: 'YELLOW' },
        function(what) {
          console.log('success track');
          console.log(what);
        }, function(fail) {
          console.log('fail track');
          console.log(fail);
        })
    };

    $scope.flush = function() {
      mixpanel.flush(
        function(what) {
          console.log('success flush');
        }, function(fail) {
          console.log('fail flush');
        })
    };


  });
