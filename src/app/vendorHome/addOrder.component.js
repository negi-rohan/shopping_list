(function() {
  'use strict';

  angular
    .module('shoppingList')
    .component('vendorAddOrderComponent', {
      templateUrl: 'app/vendorHome/addOrder.tpl.html',
      controller: vendorAddOrderController,
      controllerAs: 'vm',
      bindToController: true
    });

  function vendorAddOrderController($state, vendorOrder) {
    var vm = this;

    vm.t1 = true;
    vm.t2 = false;
    vm.newList = {
      date: new Date(),
      status: 'pendding',
      customer: {
        name: '',
        mobile: '',
        address: ''
      },
      items: []
    };

    vm.nextClick = nextClick;
    vm.addItem = addItem;
    vm.addOrder = addOrder;
    active();

    function active() {

    }

    function nextClick() {
      vm.t1 = false;
      vm.t2 = true;
    }

    function addItem() {
      vm.newList.items.push({
        des: vm.item,
        status: false
      });
      vm.item = '';
    }

    function addOrder() {
      vendorOrder.addOrder(vm.newList);
      vm.newList = {
        date: new Date(),
        status: 'pendding',
        customer: {
          name: '',
          mobile: '',
          address: ''
        },
        items: []
      };
      $state.go('main.home');
    }
  }
})();
