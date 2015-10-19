(function() {
    // Define controller function
    var CustomersController = function($scope, customersFactory, appSettings) {
        // Defaults
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;
        
        function init() {
            $scope.customers = customersFactory.getCustomers();
        }
        
        init();
        
        $scope.doSort = function(propName) {
        $scope.sortBy=propName;
        $scope.reverse = !$scope.reverse;
        }
    }
    // Inject '$scope' to prevent minifiers from breaking the code
    CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];
    
    // Inject the function as module's controller
    angular.module('customersApp')          
        .controller('CustomersController', CustomersController);
    
}());