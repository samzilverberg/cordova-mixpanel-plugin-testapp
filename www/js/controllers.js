angular.module('testapp.controllers', [])

  // A simple controller that shows a tapped item's data
  .controller('MixpanelCtrl', function($scope) {

    var mixpanel = null,
      token = ''; //<< PUT YOUR TOKEN OF YOUR MIXPANEL PROJECT HERE

    var user = ''; //<< PUT HERE A MIXPANEL'S USER ID
    var email = ''; //<< PUT HERE AN EMAIL TO ATTACH TO USER ON ALIAS BUTTON CLICK

    $scope.initMixpanel = function() {
      console.log('init mixpanel');
      mixpanel = window.mixpanel;
      console.log('whats in window.mixpanel?');
      console.log(Object.keys(mixpanel));
      mixpanel.init(token,
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

        });
    };

    $scope.track = function() {
      mixpanel.track('track test', { color: 'YELLOW' },
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

        $scope.alias = function() {
      mixpanel.alias(
        user, null, 
        function(what) {
          console.log('success alias');
        }, function(fail) {
          console.log('fail alias');
        });
      $scope.setInitProperty();
    };

    $scope.identify = function() {
      mixpanel.people.identify(
        user, 
        function(what) {
          console.log('success identify');
        }, function(fail) {
          console.log('fail identify');
        });

    };

    $scope.setProperty = function(){
        mixpanel.people.set({
          "$last_login": new Date() 
        }, 
        function(what) {
          console.log('success identify');
        }, function(fail) {
          console.log('fail identify');
        })
    };

    $scope.setInitProperty = function(){
        mixpanel.people.setOnce({
         "$email": email,
        }, 
        function(what) {
          console.log('success identify');
        }, function(fail) {
          console.log('fail identify');
        })
    };




  });
