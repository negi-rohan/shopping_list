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

  function vendorHomeController($state, vendorService, vendorOrder, storageService) {
    var vm = this,
      selectedIndex = null,
      user = storageService.getData('user');

    vm.currentList = null;
    vm.t1 = false;
    vm.newList = {
      date: new Date(),
      custName: '',
      custMobile: '',
      orderItems: [],
      status: 0,
      vendorId: user.vendorId
    };

    vm.toggleItem = toggleItem;
    vm.selectOrder = selectOrder;
    vm.outForDelivery = outForDelivery;
    vm.addItem = addItem;
    vm.addOrder = addOrder;

    active();

    function active() {
      vendorService.getAll().then(function(res) {
        if (res && res.totalCount > 0) {
          var orders = _.filter(res.rows, {vendorId: user.vendorId });
          vm.myOrders = {
            pendding: _.filter(orders, {status: 0 }),
            outForDelivery: _.filter(orders, {status: 1 })
          };
          vm.currentList = null;
          if (vm.myOrders && vm.myOrders.pendding && vm.myOrders.pendding.length > 0) {
            selectedIndex = 0;
            vm.currentList = vm.myOrders.pendding[selectedIndex];
          }
        }
      });
    }

    function toggleItem(index) {
      // vm.myOrders.pendding[selectedIndex].orderItems[index].status = !vm.myOrders.pendding[selectedIndex].orderItems[index].status;
      vm.myOrders.pendding[selectedIndex].packedCount = _.size(_.filter(vm.myOrders.pendding[selectedIndex].orderItems, 'status'));
      console.log(vm.myOrders);
    }

    function selectOrder(index, status) {
      vm.currentList = angular.copy(vm.myOrders[status][index]);
      selectedIndex = index;
    }

    function outForDelivery() {
      // vm.myOrders.outForDelivery.push(vm.currentList);
      // vm.myOrders.pendding.splice(selectedIndex, 1);
      // active();
      vm.currentList.status = 1;
       vendorService.addOrder(vm.currentList).then(
        function(res) {
          alert('order status changes');
          active();
        }
      );
    }

    function addItem() {
      vm.newList.orderItems.push({
        des: vm.item,
        status: 0
      });
      vm.item = '';
    }

    function addOrder() {
      vendorService.addOrder(vm.newList).then(
        function(res) {
          alert('order placed');
          active();
        }
      );
      vm.newList = {
        date: new Date(),
        custName: '',
        custMobile: '',
        orderItems: [],
        status: 0,
        vendorId: 0
      };
    }
  }
})();
