(function() {
  'use strict';

  angular
    .module('shoppingList')
    .component('loginComponent', {
      templateUrl: 'app/login/login.tpl.html',
      controller: loginController,
      controllerAs: 'vm',
      bindToController: true
    });

  function loginController($state, $mdToast, loginService) {
    var vm = this;

    vm.user = {
      username: '',
      pwd: ''
    };

    vm.login = login;

    function login() {
      if (vm.user && vm.user.username && vm.user.pwd) {
        loginService.login(vm.user).then(
          function(res) {
            if (res && res && res.rows && res.rows.id) {
              $state.go('main.vendor', '', { location: 'replace' });
            } else {
              $mdToast.show(
                $mdToast.simple()
                .position('top right')
                .textContent('Please provide valid login name / email-id and password')
                .hideDelay(3000));
            }
          }
        );
      }
    }
  }
})();
