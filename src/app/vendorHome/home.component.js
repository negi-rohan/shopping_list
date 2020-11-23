(function() {
  'use strict';

  angular
    .module('shoppingList')
    .component('vendorHomeComponent', {
      templateUrl: 'app/vendorHome/home.tpl.html',
      controller: vendorHomeController,
      controllerAs: 'vm',
      bindToController: true
    });

  function vendorHomeController($state, vendorOrder) {
    var vm = this,
      selectedIndex = null;

    vm.currentList = null;
    vm.t1 = false;
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

    vm.toggleItem = toggleItem;
    vm.selectOrder = selectOrder;
    vm.outForDelivery = outForDelivery;
    vm.addItem = addItem;
    vm.addOrder = addOrder;

    active();

    function active() {
      vm.myOrders = vendorOrder.getOrder();
      vm.currentList = null;
      if (vm.myOrders && vm.myOrders.pendding && vm.myOrders.pendding.length > 0) {
        vm.currentList = angular.copy(vm.myOrders.pendding[0]);
        selectedIndex = 0;
      }
    }

    function toggleItem(index) {
      vm.myOrders.pendding[selectedIndex].items[index].status =  !vm.myOrders.pendding[selectedIndex].items[index].status;
    }

    function selectOrder(index, status) {
      vm.currentList = angular.copy(vm.myOrders[status][index]);
      selectedIndex = index;
    }

    function outForDelivery() {
      vm.myOrders.outForDelivery.push(vm.currentList);
      vm.myOrders.pendding.splice(selectedIndex,1);
      active();
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
    }
  }
})();
