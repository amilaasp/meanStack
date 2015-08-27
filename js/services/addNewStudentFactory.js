(function() {
    
    var addNewStudentFactory = function($http){  
        var factory = {};
            
//        factory.getStudents = function(url){ 
//            return $http.get(url);
//        };                           
        
        factory.addStudent = function(url,usrObject){
            return $http.post(url,usrObject);
        };
        
        return factory;
    };  
    studentFactory.$inject = ['$http'];
    angular.module('customersApp').factory('addNewStudentFactory',addNewStudentFactory);
}());