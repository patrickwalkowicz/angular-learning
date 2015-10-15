(function() {
    // Define controller function
    var CustomersController = function($scope) {
        // Defaults
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers=[{joined: '2000-12-02', name:'John', city:'London', orderTotal: 9.9956}, {joined: '1965-01-25',name:'Rob', city:'Oxford', orderTotal: 19.99},{joined: '1944-06-15',name:'Nancy', city:'Belfast', orderTotal:44.99}, {joined: '1995-03-28',name:'Dave', city:'Dublin', orderTotal:101.50}];
        $scope.doSort = function(propName) {
        $scope.sortBy=propName;
        $scope.reverse = !$scope.reverse;
        }
    }
    // Inject '$scope' to prevent minifiers from breaking the code
    CustomersController.$inject = ['$scope'];
    
    // Inject the function as module's controller
    angular.module('customersApp')          
        .controller('CustomersController', CustomersController);
    
}());