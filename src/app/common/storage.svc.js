(function() {
  'use strict';

  angular
    .module("shoppingList")
    .factory("storageService", storageService);

  function storageService($window) {
    var service = {
      getData: getData,
      setData: setData
    };
    return service;

    function setData(key, val) {
      try {
        $window.sessionStorage.setItem(key, val && angular.toJson(val));
      } catch (res) {
        console.error(res);
      }
    }

    function getData(key) {
      return $window.sessionStorage && angular.fromJson($window.sessionStorage.getItem(key));
    }

    function removeData(key) {
      $window.sessionStorage && $window.sessionStorage.removeItem(key);
    }
  }
})();
