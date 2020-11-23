(function() {
  'use strict';

  angular
    .module('shoppingList')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
