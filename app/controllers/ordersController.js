(function() {
    // Define controller function           // Inject route params
    var OrdersController = function($scope, $routeParams, customersFactory) {
        // reference customerId from app.js route config
        var customerId = $routeParams.customerId;
        
        $scope.customer = null;
        function init() {
            $scope.customer = customersFactory.getCustomer(customerId);
        }
        
        
    init();
        
    }
    
    // Inject '$scope' to prevent minifiers from breaking the code
    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
    
    // Inject the function as module's controller
    angular.module('customersApp')          
        .controller('OrdersController', OrdersController);
    
}());