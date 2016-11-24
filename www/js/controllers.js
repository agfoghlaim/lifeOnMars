//SETTINGS CONTROLLER

app.controller('groundControl', function($scope, service1){


	$scope.numberDays = function(numDays){
		
		 	switch(numDays) {
		 		case 7:
		 			service1.setWhat(7);
		 		break;
		 		case 14:
		 		
		 			service1.setWhat(14);
		 		break;
		 	
		 			default:
		 			service1.setWhat(1);
		 	}
	}

 

  
});

app.controller('majorTom', function($scope, service1, service2){
	var noOfDays = service1.getWhat();
		
	service2.getPhoto(responseGood, responseBad, noOfDays);

	$scope.nasaPhotosArray=[];

function responseGood(response){
//sort array first!!
$scope.nasaPhotosArray.push(response);
$scope.nasaPhotosArray = $scope.nasaPhotosArray.sort(function(a,b){
	if(a.date>b.date){
		return -1;
	}
	if(a.date<b.date){
		return 1;
	}else{
		return 0 ;
	}
	
});

		};
function responseBad(response){
//sort array first!!
$scope.nasaPhotosArray.push(response);

		};

});
















