(function() {
    // Define controller function           // Inject route params
    var OrdersController = function($scope, $routeParams) {
        // reference customerId from app.js route config
        var customerId = $routeParams.customerId;
        
        $scope.orders = null;
        function init() {
            // Scan customers for customer ID
            for (var i = 0; i < $scope.customers.length; i++) {
                if ($scope.customers[i].id === parseInt(customerId)) {
                    $scope.orders = $scope.customers[i].orders;
                    break;
                }
            }
        }
        
        $scope.customers=[
            {   
                id: 1,
                joined: '2000-12-02', 
                name:'John', 
                city:'London', 
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Goods',
                        total: 9.9956
                    }
                ]
            }, 
            {
                id: 2,
                joined: '1965-01-25',
                name:'Rob', 
                city:'Oxford', 
                orderTotal: 19.99,
                orders: [
                    {
                        id: 1,
                        product: 'Services',
                        total: 19.99
                    }
                ]
            },
            {
                id: 3,
                joined: '1944-06-15',
                name:'Nancy', 
                city:'Belfast', 
                orderTotal:44.99,
                orders: [
                    {
                        id: 1,
                        product: 'Goods',
                        total: 44.99
                    }
                ]
            }, 
            {
                id: 4,
                joined: '1995-03-28',
                name:'Dave', 
                city:'Dublin', 
                orderTotal:101.50,
                orders: [
                    {
                        id: 1,
                        product: 'Services',
                        total: 101.50
                    }
                ]
            }
        ];
        
    init();
        
    }
    
    // Inject '$scope' to prevent minifiers from breaking the code
    OrdersController.$inject = ['$scope', '$routeParams'];
    
    // Inject the function as module's controller
    angular.module('customersApp')          
        .controller('OrdersController', OrdersController);
    
}());