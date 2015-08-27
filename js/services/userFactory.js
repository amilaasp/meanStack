var userFactory = function(){
  
    var users = "Amila Sampath";
    
    return{
      getUsers: function(){
        return users;      
      };        
    };
    
};

angular.module('customersApp').factory('userFactory',userFactory);

//(function() {
//    
//    var studentFactory = function($http){  
//        var factory = {};
//            
//        factory.getStudents = function(url){ 
//            return $http.get(url);
//        };                           
//        
////        factory.addStudent = function(url,usrObject){
////            return $http.post(url,usrObject);
////        };
//        
//        return factory;
//    };  
//    studentFactory.$inject = ['$http'];
//    angular.module('customersApp').factory('studentFactory',studentFactory);

//}());