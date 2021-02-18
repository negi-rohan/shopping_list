(function() {
  'use strict';

  angular
    .module("shoppingList")
    .factory("vendorService", vendorService);

  function vendorService($http) {
    var service = {
      getAll: getAll,
      addOrder: addOrder
    };
    return service;

    function getAll() {
      return $http.get('http://139.59.57.10/order-management/getAll?entity=orders').then(
        function(res) {
          return res.data;
        },
        function(res) {
          return res;
        }
      );
    }

    function addOrder(order) {
      return $http.post('http://139.59.57.10/order-management/order/save', order).then(
        function(res) {
          return res;
        },
        function(res) {
          return res;
        }
      );
    }
  }
})();
