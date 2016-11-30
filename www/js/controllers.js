
app.controller('groundControl', function($scope, service1){

	$scope.amount = {days:1};
	$scope.choices = [1,7,30];/////////14
	$scope.changeNoDays = function(choice){
	service1.getSet(choice);
	}

});



app.controller('majorTom', function($scope, service1, service2){

	var noOfDays = service1.getSet();
	service2.getPhoto(responseGood, responseBad, noOfDays);
	$scope.nasaPhotosArray=[];
	/////
	$scope.video = false;
	$scope.image = true;

	////////
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
		////////////////iframe or image thing
		for(i in $scope.nasaPhotosArray){
			console.log($scope.nasaPhotosArray[i].media_type);
			if($scope.nasaPhotosArray[i].media_type ==='video'){
				$scope.video = true;
				console.log("hi marie this if video t/f " + $scope.video);
				$scope.image = false;

			}
			$scope.video= false;
			$scope.image = true;
		}
		////////////////////////////////
	};

	function responseBad(status, text){
		if(status != 500){  //no potd returns 500, ignore this error
		alert("ERROR: " + status + " " + text);
		}
	};

});
















