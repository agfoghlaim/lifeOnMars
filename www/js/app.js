
var app = angular.module('myNews',  ['ionic'])




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($sceDelegateProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {

$sceDelegateProvider.resourceUrlWhitelist(['**']);
$ionicConfigProvider.views.maxCache(0);


  $stateProvider
  .state('settingsState', {
      url: "/settingsUrl",
      templateUrl: 'templates/settings.html',
      controller: 'groundControl'
  });

    $stateProvider
  .state('homeState', {
      url: "/homeUrl",
      templateUrl: 'templates/home.html',
      controller: 'majorTom'
  });

$urlRouterProvider.otherwise('/homeUrl');



});


