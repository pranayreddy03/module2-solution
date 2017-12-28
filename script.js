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
        buy.getItems = ShoppingListCheckOffService.getItems();
        buy.boughtButton = function(index)
        {
            ShoppingListCheckOffService.boughtButton(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService)
    {
        var bought = this;
        bought.getBoughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService()
    {
        var service = this;

        var toBuyItems = [ {name: "cookies", quantity: 6},
                           {name: "eggs", quantity: 63},
                           {name: "cakes", quantity: 3},
                           {name: "candies", quantity: 12},
                           {name: "donuts", quantity: 5}];

        var boughtItems = [];

        service.getItems = function()
        {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.boughtButton = function(itemIndex)
        {
            var item = toBuyItems[itemIndex];
            boughtItems.push(item);
            toBuyItems.splice(itemIndex,1);
        }
    }
})();
