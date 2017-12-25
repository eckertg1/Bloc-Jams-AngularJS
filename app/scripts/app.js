(function(){
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requiredBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/templates/landing.html'
      })
      .state('album', {
        url: '/',
        templateUrl: '/templates/album.html'
      });

    $stateProvider
      .state('collection', {
        url: '/',
        templateUrl: '/templates/collection.html'
      });
  }

  angular
      .module('blocJams', ['ui.router'])
      .config(config);
})();
