var app = angular.module('myApp', []);
app.controller('AppCtrl', function ($scope, $http) {
   


    $scope.add =function() {

    console.log($scope.regs);
    $http.post('/reg', $scope.regs).success(function (response){
         console.log(response);
         
       })
    }

    


    

});