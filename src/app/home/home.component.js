(function() {
  'use strict';

  angular
    .module('shoppingList')
    .component('homeComponent', {
      templateUrl: 'app/home/home.tpl.html',
      controller: homeController,
      controllerAs: 'vm',
      bindToController: true
    });

  function homeController($state) {
    var vm = this;

    vm.addItem = addItem;

    vm.myList = {
      current: {
        date: '26 July 2020',
        items: {
          '10kg Atta': false,
          '2 water cans': false
        }
      },
      pendding: [{
        date: '25 July 2020',
        items: {
          '10kg Atta': false,
          '2 water cans': false
        }
      }],
      previous: [{
        date: '20 July 2020',
        items: {
          '5kg Aloo': false,
          '2 water cans': true,
          '5kg onion': true
        }
      },
      {
        date: '10 July 2020',
        items: {
          'maggi pack of 6': true,
          '2 water cans': true,
          'tata tea 500gm': true
        }
      }]
    };

    function addItem() {
      vm.myList.current.items[vm.item] = false;
      vm.item = '';
    }
  }
})();
