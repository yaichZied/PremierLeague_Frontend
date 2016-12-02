var app = angular.module('myApps', []);
		app.controller('myCtrls', function($scope,$http) {
			$scope.Teams={
          'team' : [{
                      '1' : "Manchester United",
                       '2' : "Liverpool",
                       '3' : "AFC Bournemouth",
                       	'4' : "Chelsea",
                        '5' : "Manchester City",
                        '6' : "Arsenal",
                      	'7' : "Tottenham",
                        '8' : "Everton",
                        '9' : "Watford",
                        '10' : "West Brom",
                        '11' : "Southampton",
                        '12' : "Stoke City",
                        '13' : "Burnley",
                        '14' : "Leicester",
                        '15' : "Middlesbrough",
                        '16' : "West Ham",
                        '17' : "Crystal Palace",
                        '18' : "Hull City",
                        '19' : "Swansea",
                        '20' : "Sunderland"
                     } 
                    ]
                };
			$http({
                    method: 'POST',
                    url: 'http://127.0.0.1/standing.php',
                    data: {},
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(response) { 
                    $scope.standing=response;
                    console.log($scope.standing);
                }).error(function(response) {
                    console.log(response);
                });
                $http({
                    method: 'POST',
                    url: 'http://127.0.0.1/fixture.php',
                    data: {},
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(response) { 
                    $scope.fixture=response;
                    console.log($scope.fixture);
                }).error(function(response) {
                    console.log(response);
                });
                $http({
                    method: 'POST',
                    url: 'http://127.0.0.1/scorer.php',
                    data: {},
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(response) { 
                    $scope.scorer=response;
                    console.log($scope.scorer);
                }).error(function(response) {
                    console.log(response);
                });
			/*
			$scope.hideInput=true;
			$scope.hideInpu=true;
			    $http.get('http://127.0.0.1/airport.json')
			    .success(
				    function(data){
				       $scope.cityes=data;
				    }
		  		)
		  		.error(function(data)
			    {
					console.log("error");      
			    });
		  		$scope.showScrol=function(){
		      if (document.getElementById('hotelSearch').value == "") 
		        $scope.hideInpu=true;
		      else  
		        $scope.hideInpu=false;
		    };

			$scope.showScroll=function(){
		      if (document.getElementById('hotelSearchInput').value == "") 
		        $scope.hideInput=true;
		      else  
		        $scope.hideInput=false;
		    };
		    $scope.itemClicked = function ($index) 
		    {
		      $scope.selectedIndex = $index;
		    }
		    $scope.setcity = function(value)
		    {
		      $scope.hideInput=true;
		      $scope.textbox.city=value.city;
			}
			$scope.setcit = function(value)
		    {
		      $scope.hideInpu=true;
		      $scope.textbo.city=value.city;
			}
			$scope.search = function(value)
		    {	
		    	console.log($scope.textbo.city);
		    	console.log($scope.textbox.city);
		    	console.log(document.getElementById('searchdate').value);
		    	var da={
		    		'PICKUP' : $scope.textbox.city,
		            'DROP' : $scope.textbo.city,
		            'DEPARTURE' : document.getElementById('searchdate').value
		    	};
		    	$http({
                    method: 'POST',
                    url: 'http://127.0.0.1/search.php',
                    data: da,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(response) { 
                    console.log(response); 
                }).error(function(response) {
                    console.log(response);
                });
			}
*/
	}

);