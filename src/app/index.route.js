(function() {
  'use strict';

  angular
    .module('shoppingList')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
          url: '/login',
          component: 'loginComponent'
      })
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        abstract: true
      })
      .state('main.home', {
          url: 'home',
          component: 'homeComponent'
      })
      .state('main.vendor', {
          url: 'vendor',
          component: 'vendorHomeComponent'
      })
      .state('main.addOrder', {
          url: 'addOrder',
          component: 'vendorAddOrderComponent'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
