(function()
{
    'use strict';
    angular.module('ShoppingListCheckOff',[])
           .controller('ToBuyController',ToBuyController)
           .controller('AlreadyBoughtController',AlreadyBoughtController)
           .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService)
    {
        var buy = this;
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
        var bought = this;
    }

    function ShoppingListCheckOffService()
    {
        var service = this;

        var items = [
            {name: "cookies", quantity: 10},{name: "eggs", quantity: 6},{name: "candies", quantity: 23}
        ];


    }

})();
