(function() {
  'use strict';

  angular
    .module("shoppingList")
    .factory("loginService", loginService);

  function loginService($http, storageService) {
    var service = {
        login: login
    };
    return service;

    function login(user) {
    	return $http.post('http://139.59.57.10/order-management/users/auth', user).then(
    		function(res){
          if (res && res.data && res.data.rows && res.data.rows.id) {
            storageService.setData('user', res.data.rows);
          }
    			return res.data;
    		},
    		function(res) {
    			return res.data;
    		}
		);
    }
  }
})();
