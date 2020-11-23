(function() {
  'use strict';
  angular
    .module('shoppingList')
    .service('vendorOrder', vendorOrder);

  function vendorOrder() {

    var service = {
        addOrder: addOrder,
        getOrder: getOrder
      },
      defaultOrder = {
        pendding: [{
            date: new Date(),
            status: 'pendding',
            customer: {
                name: 'Rajat',
                mobile: '9988811222',
                address: 'Flat-101 Rainbow Appartments'
            },
            items: [{
                des: '10kg Atta',
                status: false
            },
            {
                des: '2 water cans',
                status: false
            }]
          },
          {
            date: new Date(),
            status: 'pendding',
            customer: {
                name: 'Bhushan',
                mobile: '8889911234',
                address: 'Flat-1201 Sunrise High'
            },
            items: [{
                des: '5kg Daawat Biryani Basmati Rice',
                status: false
            },
            {
                des: '2 water cans',
                status: false
            }]
          }
        ],
        outForDelivery: [{
            date: new Date(new Date().getTime() - 24*60*60*1000),
            status: 'outForDelivery',
            customer: {
                name: 'Ajay',
                mobile: '4589878123',
                address: 'A-1201 Twilight Society'
            },
            items: [{
                des: '5kg Aloo',
                status: true
            },
            {
                des: '1 water cans',
                status: true
            },{
                des: '5kg onion',
                status: false
            }]
          },
          {
            date: new Date(new Date().getTime() - 24*60*60*1000),
            status: 'outForDelivery',
            customer: {
                name: 'Shree',
                mobile: '5205837583',
                address: 'B-1307 Twilight Society'
            },
            items: [{
                des: 'maggi pack of 6',
                status: true
            },
            {
                des: '3 water cans',
                status: true
            },
            {
                des: 'tata tea 500 gm',
                status: true
            }]
          }
        ]
      };
    return service;

    function getOrder() {
        return defaultOrder;
    }

    function addOrder(order) {
        defaultOrder.pendding.push(order);
    }
  }
})();
