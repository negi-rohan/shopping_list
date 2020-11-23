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

  function loginController($state) {
    var vm = this;

    vm.user = {
      userName: '',
      password: ''
    };

    vm.login = login;

    function login() {
      if (vm.user.userName === 'customer' && vm.user.password === 'customer') {
        sessionStorage.userType = 'customer';
        $state.go('main.home', '', { location: 'replace' });
      } else {
        sessionStorage.userType = 'vendor';
        $state.go('main.vendor', '', { location: 'replace' });
      }
      // if (vm.loginDetails && vm.loginDetails.un && vm.loginDetails.pwd) {
      //   loginService.login(vm.loginDetails).then(
      //     function(res) {
      //       if (res && res.data && res.data.id) {
      //         $state.go('main.dashboard', '', { location: 'replace' });
      //       }
      //     }
      //   );
      // }
    }
  }
})();
