//SETTINGS CONTROLLER

app.controller('groundControl', function($scope, service1){
	$scope.defaultValue = 1;
	$scope.numberDays = function(numDays){
		switch(numDays) {
		 	case 7:
		 		service1.getSet(7);
		 	break;
		 	case 14:
		 		service1.getSet(14);
		 	break;
		 	default:
		 		service1.getSet(1);
		}
	}
// $scope.amount = {days:1};
// $scope.choices = [1,7,14];
// console.log($scope.amount.days);

// $scope.changeNoDays = function(choice){
// console.log(choice);
// service1.getSet(choice);
// }


});

app.controller('majorTom', function($scope, service1, service2){
	var noOfDays = service1.getSet();
	service2.getPhoto(responseGood, responseBad, noOfDays);
	$scope.nasaPhotosArray=[];


	function responseGood(response){
		$scope.nasaPhotosArray.push(response);
		$scope.nasaPhotosArray.sort(function(a,b){
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

	function responseBad(status, text){
		if(status != 500){  //no potd returns 500, ignore this error
		alert("ERROR: " + status + " " + text);
		}
	};

		

});
















