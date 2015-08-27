(function() {
    
    var studentFactory = function($http){  
        var factory = {};
            
        factory.getStudents = function(url){ 
            return $http.get(url);
        };                           
        
//        factory.addStudent = function(url,usrObject){
//            return $http.post(url,usrObject);
//        };
        
        return factory;
    };  
    studentFactory.$inject = ['$http'];
    angular.module('customersApp').factory('studentFactory',studentFactory);
}());


// ---------------------------------------------------------------------------------------

 //var dataObj = [{name:"Amila",age:25,sinhala:76,english:23,payment:750}];
//var req = {
// method: 'POST',
// url: '/students',
// data: { test: 'test' },
// headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//}

        //var dataObject = {data:'data'};