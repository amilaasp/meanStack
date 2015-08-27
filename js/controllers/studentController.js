app.controller('studentController', function($scope,$location,$routeParams,studentFactory){
    
   
$scope.students = [];
        
    // --- Get All Students Infroamtion 
    //var myUrl = '/students';
    var urlPath = $location.path();     
    
    function initAllStudent(){
        studentFactory.getStudents(urlPath).success(function(students){
            $scope.students=students;        
        }).error(function(data, status, headers, config){
            console.log('StudentController get all students request error : ',data,status,headers,config);
        });
    }   
    
    // When loding page this function auto run 
    initAllStudent();
    
    var newStudentObject = {name:'Saman',age: 30,sinhala:45,english:75,payment:750};
    
//    function addStudent(){
//        var urlPath = $location.path();
//        var newStudentObject = {name:'Saman',age: 30,sinhala:45,english:75,payment:750};
//        console.log('Running add Student Function ....!');
//        addNewStudentFactory.addStudent(urlPath,newStudentObject).success(function(newStudent){ 
//            console.log('Successfuly Added New Student : ',newStudent);
//            $scope.students = newStudent;
//        }).error(function(data, status, headers, config){
//            console.log('StudentController get all students request error : ',data,status,headers,config);
//        });     
//    };
//    
//    addStudent();
    
    //------------------------------------------------------------
    
    
    
    $scope.newName = $routeParams.name;     
    var dataObjects = {name: $scope.newName,age: 30,sinhala:45,english:75,payment:750};
   // var dataObjects = {name:"Amila"};

    $scope.getNewName = function(getNewName){
        var getNewName = getNewName;
        var dataObjects = {name: getNewName,age: 30,sinhala:45,english:75,payment:750};

        function init(){
            studentFactory.getStudents(dataObjects)
                .success(function(students){
                $scope.students=students;        
        })
        .error(function(data, status, headers, config){
            // error handle here 
        })
    }
        init();
    };
    
    
});


//// ------------------------------------------------------------
//    // --- Get One Student Infroamtion 
//    var myUrl = '/students';
//    //var myUrl = $location.path();    
//    function init(){
//        studentFactory.getStudents(myUrl).success(function(students){
//            $scope.students=students;        
//        }).error(function(data, status, headers, config){
//            console.log('StudentController get all student reques error : ',data,status,headers,config);
//        });
//    }    
//    init();    
    
    
    
//$scope.students = [{name:"Amila",age:25,sinhala:76,english:23,payment:750}];

//var dataObj = [{name:"Amila",age:25,sinhala:76,english:23,payment:750}];
   // var data = [name:'Amila'];
    
    //$scope.newName = 'Amila'; 




