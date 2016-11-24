app.service('service1', function($http){



 var what = 1;
 console.log(what);              

          return {
             getWhat: function () {
             	console.log("getWhat : " + what);
                return what;
           },
             setWhat: function( numDays ) {
                what = numDays;
                console.log("setWhat : " + what);
            }
        }
	

});

app.service('service2', function($http){
  
  this.getPhoto = function(callGood, callBad, numberOfDays){


		var defaultUrl = 'https://api.nasa.gov/planetary/apod?api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
		var url1 = 'https://api.nasa.gov/planetary/apod?date=';
		var url3 = '&api_key=T0pL0WqhD22V2rBQamplFq1RJYjqVVCrv8OrDgyg';
		var d = new Date();
		
		var outputUrlArray =[];
			
			function getUrlFormat(numberOfDays){ 
				d.getDate(); 
				outputUrlArray.push(url1 + d.toISOString().slice(0, 10) + url3);  
				if(numberOfDays>1){
				for(i=0;i<numberOfDays;i++){ //loop 7 or 14 times, I THINK SHOULD THIS BE 6 AND 13  BECAUSE TODAY WILL ALREADY BE INCLUDED??
					d.setDate(d.getDate() - 1); //set d.date to today's date minus one day, take one from previous date each loop
					outputUrlArray.push(url1 + d.toISOString().slice(0, 10) + url3); 
					
				}
				
				}

			}

			getUrlFormat(numberOfDays);  //call the function



		
		for(i in outputUrlArray){
			$http.get(outputUrlArray[i]).then(funGood, funBad);
			function funGood(response){
				console.log(response);
				console.log(response.data.date);
  				callGood(response.data);
			};
			function funBad(response){
				callBad(response.status, response.statusText);
			}
		}
	}
     
});