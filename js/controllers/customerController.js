// Option 01 : Use created module globle variable 

app.controller('CustomerController', function($scope,customersFactory){
    //app.controller('CustomerController', function($scope,customersFactory,appSettings) {
    
    $scope.testString = "Customer Controller ";
    $scope.fristName = "Amila";
    $scope.lastName = "Sampath";
    
    
    
//        $scope.customers=[
//                      {joined:'2010-12-08',name:'zenso',city:'colombo',orderTotal:2344},
//                      {joined:'2012-10-09',name:'kapila',city:'kandy',orderTotal:3344},
//                      {joined:'2013-12-22',name:'saman',city:'kegallca',orderTotal:9534},
//                      {joined:'2010-12-08',name:'zenzso',city:'colocmbo',orderTotal:2344},
//                      {joined:'2012-10-09',name:'kapicla',city:'kandcy',orderTotal:3344},
//                      {joined:'2013-12-22',name:'samacn',city:'kegaclla',orderTotal:9534}
//                      ];
    $scope.doSort = function(proName){
        $scope.sortby = proName;
        $scope.reverse = !$scope.reverse;

    };
    
        function init(){
        customersFactory.getCustomers()
        .success(function(cus){
            $scope.customers=cus;
            
        })
        .error(function(data, status, headers, config){
            // error handle here 
        });
    }
    
    init();

    
});

app.controller('loginController', function($scope,loginInfo){
    //app.controller('CustomerController', function($scope,customersFactory,appSettings) {
    $scope.data={name:'',isLogin:false,isVisible:true,status:'red'};
    
    $scope.testString = "Login Controller ";
    $scope.fristName = "Amila";
    $scope.lastName = "Sampath";
    
    $scope.UserInfo;
    
            function init(){
        loginInfo.getUserInfo()
        .success(function(userInfo){
            $scope.UserInfo=userInfo;
            //console.log(loginInfo);
        })
        .error(function(data, status, headers, config){
            // error handle here 
        });
    }
    
    init();
    
    
});

app.controller('orderController', function($scope){
    //app.controller('CustomerController', function($scope,customersFactory,appSettings) {
    
    $scope.testString = "Order Controller ";
    $scope.fristName = "Amila";
    $scope.lastName = "Sampath";
    
});

//    $scope.appSettings = appSettings;
//    
//    $scope.customers = [];
//    function init(){
//        customersFactory.getCustomers()
//        .success(function(customers){
//            $scope.customers=customers;
//        })
//        .error(function(data, status, headers, config){
//            // error handle here 
//        });
//    }
//    
//    init();
    
//    $scope.customers=[
//                      {joined:'2010-12-08',name:'zenso',city:'colombo',orderTotal:2344},
//                      {joined:'2012-10-09',name:'kapila',city:'kandy',orderTotal:3344},
//                      {joined:'2013-12-22',name:'saman',city:'kegallca',orderTotal:9534},
//                      {joined:'2010-12-08',name:'zenzso',city:'colocmbo',orderTotal:2344},
//                      {joined:'2012-10-09',name:'kapicla',city:'kandcy',orderTotal:3344},
//                      {joined:'2013-12-22',name:'samacn',city:'kegaclla',orderTotal:9534}
//                      ];
//    $scope.doSort = function(proName){
//        $scope.sortby = proName;
//        $scope.reverse = !$scope.reverse;
//
//    };


//// Option 02 : Use module referance 
//angular.module('customersApp').controller('loginController',function($scope){
//    $scope.data={name:'',isLogin:false,isVisible:true,status:'red'};
//});

// Option 03 : 
//
//(function(){
//    var simpleController = function($scope){
//        $scope.student = "Amila Sampath\n Option 03 is working ";
//    };
//    angular.module('customersApp').controller('StudentController',simpleController);
//}());
//
//// controller as <-- how to use 
//
//angular.module('customersApp').controller('asController',function(){
//    this.userName = "Kapila Sandaruwan , Controller as <-- Its working ";
//    this.age = 32;
//});

// This is order Controller 
//app.controller('orderController', function($scope,$routeParams,customersService) {
//
//    $scope.customerID2 = parseInt($routeParams.customerID,10);
//    $scope.cusTest = angular.isNumber($scope.customerID2);    
//    $scope.customers2 = [];
//    
//    function init(){
//        $scope.customers2 = customersService.getCustomers2();
//    };
//    
//    init();
//
//});