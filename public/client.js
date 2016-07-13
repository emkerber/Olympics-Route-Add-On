var app = angular.module('olympianApp', ['ngRoute']);


function handleFailure(response) {
  console.log('Failure:', response);
};


app.controller('SynchronizedSwimmingController', function($scope, $http){

  var configSynchronizedSwimming = {
    method: 'GET',
    url: '/olympics/synchronizedSwimming'
  };

  function handleSynchronizedSwimmingSuccess(response) {
    $scope.synchronizedSwimming = response.data;
    console.log('Success:', response.data);
  };

  $scope.getSynchronizedSwimming = function() {
    console.log('click: synchronized swimming');
    $http(configSynchronizedSwimming).then(handleSynchronizedSwimmingSuccess, handleFailure);
  };

  $scope.getSynchronizedSwimming();
});

app.controller('TableTennisController', function($scope, $http){

  var configTableTennis = {
    method: 'GET',
    url: '/olympics/tableTennis'
  };

  function handleTableTennisSuccess(response) {
    $scope.tableTennis = response.data;
    console.log('Success:', response.data);
  };

  $scope.getTableTennis = function() {
    console.log('click: table tennis');
    $http(configTableTennis).then(handleTableTennisSuccess, handleFailure);
  };

  $scope.getTableTennis();
});

app.controller('BadmintonController', function($scope, $http){

  var configBadminton = {
    method: 'GET',
    url: '/olympics/badminton'
  };

  function handleBadmintonSuccess(response) {
    $scope.badminton = response.data;
    console.log('Success:', response.data);
  };

  $scope.getBadminton = function() {
    console.log('click: badminton');
    $http(configBadminton).then(handleBadmintonSuccess, handleFailure);
  };

  $scope.getBadminton();
});

app.controller('WrestlingController', function($scope, $http){

  var configWrestling = {
    method: 'GET',
    url: '/olympics/wrestling'
  };

  function handleWrestlingSuccess(response) {
    $scope.wrestling = response.data;
    console.log('Success:', response.data);
  };

  $scope.getWrestling = function() {
    console.log('click: wrestling');
    $http(configWrestling).then(handleWrestlingSuccess, handleFailure);
  };

  $scope.getWrestling();
});

app.controller('GymnasticsController', function($scope, $http){

  var configGymnastics = {
    method: 'GET',
    url: '/olympics/gymnastics'
  };

  function handleGymnasticsSuccess(response) {
    $scope.gymnastics = response.data;
    console.log('Success:', response.data);
  };

  $scope.getGymnastics = function() {
    console.log('click: gymnastics');
    $http(configGymnastics).then(handleGymnasticsSuccess, handleFailure);
  };

  $scope.getGymnastics();
});

app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/synchronizedSwimming', {
      templateUrl:'views/synchronizedSwimming.html',
      controller:'SynchronizedSwimmingController'
    })
    .when('/tableTennis', {
      templateUrl:'views/tableTennis.html',
      controller: 'TableTennisController'
    })
    .when('/badminton', {
      templateUrl:'views/badminton.html',
      controller: 'BadmintonController'
    })
    .when('/wrestling', {
      templateUrl:'views/wrestling.html',
      controller: 'WrestlingController'
    })
    .when('/gymnastics', {
      templateUrl:'views/gymnastics.html',
      controller: 'GymnasticsController'
    })

  $locationProvider.html5Mode(true);
})
