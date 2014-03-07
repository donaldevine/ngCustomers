var app = angular.module('ngCustomersApp', ['ngRoute', 'ngAnimate']);

// Here we configure our routes
app.config(function($routeProvider) {
    $routeProvider.when('/',
    {
        controller: 'CustomersController',
        templateUrl: 'app/views/customers.html'
    })
    .when('/orders/:customerId',
    {
        controller: 'OrdersController',
        templateUrl: 'app/views/orders.html'
    })
});

/// This factory works like a singleton.
app.factory('customersFactory', function($http){
    var factory = {};
    factory.getCustomers = function(){
        return $http.get('app/models/customers.json');
    };
    return factory;
});

/// This factory works like a singleton.
app.factory('ordersFactory', function($http){
    var factory = {};
    factory.getOrders = function(){
        return $http.get('app/models/customerorders.json');
    };
    return factory;
});

/// This is the controller for the Cusomers View
app.controller('CustomersController', function($scope, customersFactory) {
   $scope.customers = null;

   function init() {
        customersFactory.getCustomers().success(function(custs){
            $scope.customers = custs;
        })
   };

   init();

});

/// This is the controller for the Orders View
app.controller('OrdersController', function($scope, $routeParams, ordersFactory){
    $scope.customerId = $routeParams.customerId;

    $scope.orders = null;

   function init() {
        ordersFactory.getOrders().success(function(customerorders){
            $scope.orders = customerorders;
        })
   };

   init();
});
