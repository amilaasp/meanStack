(function() {
    
    var customerFactory = function($http ){
        
//    var customers=[
//                      {joined:'2010-12-08',name:'zenso',city:'colombo',orderTotal:2344},
//                      {joined:'2012-10-09',name:'kapila',city:'kandy',orderTotal:3344},
//                      {joined:'2013-12-22',name:'saman',city:'kegallca',orderTotal:9534},
//                      {joined:'2010-12-08',name:'zenzso',city:'colocmbo',orderTotal:2344},
//                      {joined:'2012-10-09',name:'kapicla',city:'kandcy',orderTotal:3344},
//                      {joined:'2013-12-22',name:'samacn',city:'kegaclla',orderTotal:9534},
//                      {joined:'2013-12-25',name:'Amila',city:'Kosgolla',orderTotal:9999.99}
//                      ];
        
        var factory = {};
        factory.getCustomers = function(){ 
          return $http.get('/customers');

        };         
        return factory;
    };  
    customerFactory.$inject = ['$http'];
    angular.module('customersApp').factory('customersFactory',customerFactory);
}());


(function() {
    
    var loginInfo = function($http ){
        
        
        var factory = {};
        factory.getUserInfo = function(){ 
          return $http.get('/login');
        };         
        return factory;
    };  
    loginInfo.$inject = ['$http'];
    angular.module('customersApp').factory('loginInfo',loginInfo);
}());