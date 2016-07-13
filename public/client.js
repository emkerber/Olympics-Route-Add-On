var app = angular.module('olympianApp', []);




app.controller('OlympianController', function($scope, $http){

//$scope.getOlympians = getOlympians;
  //$scope.synchronizedSwimming = getOlympians(configS)



  var configSynchronizedSwimming = {
    method: 'GET',
    url: '/olympics/synchronizedSwimming'
  };

  function handleSynchronizedSwimmingSuccess(response) {
    $scope.synchronizedSwimming = response.data;
    console.log('Success:', response.data);
  };

  var configTableTennis = {
    method: 'GET',
    url: '/olympics/tableTennis'
  };

  function handleTableTennisSuccess(response) {
    $scope.tableTennis = response.data;
    console.log('Success:', response.data);
  };

  var configBadminton = {
    method: 'GET',
    url: '/olympics/badminton'
  };

  function handleBadmintonSuccess(response) {
    $scope.badminton = response.data;
    console.log('Success:', response.data);
  };

  var configWrestling = {
    method: 'GET',
    url: '/olympics/wrestling'
  };

  function handleWrestlingSuccess(response) {
    $scope.wrestling = response.data;
    console.log('Success:', response.data);
  };

  var configGymnastics = {
    method: 'GET',
    url: '/olympics/gymnastics'
  };

  function handleGymnasticsSuccess(response) {
    $scope.gymnastics = response.data;
    console.log('Success:', response.data);
  };

  function handleFailure(response) {
    console.log('Failure:', response);
  };


  $scope.getOlympians = function() {
    console.log('click');
    $http(configSynchronizedSwimming).then(handleSynchronizedSwimmingSuccess, handleFailure);
    $http(configTableTennis).then(handleTableTennisSuccess, handleFailure);
    $http(configBadminton).then(handleBadmintonSuccess, handleFailure);
    $http(configWrestling).then(handleWrestlingSuccess, handleFailure);
    $http(configGymnastics).then(handleGymnasticsSuccess, handleFailure);
  }
});
