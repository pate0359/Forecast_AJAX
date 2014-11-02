//var widgetContainer;
function buildWidget(classname){

//	widgetContainer=classname;
	
	$.ajax({
		url: "https://api.forecast.io/forecast/b2f42472109aec4def423f21a8da5c8f/45.348391,-75.757045",
		dataType: "jsonp",	
		type: "POST",
		data:{units: "ca"},
//		crossDomain: true;
//		xmlFields:
//		{
//			withCredentials: tr	ue;
//		}
	}).done(gotData).fail(badStuff);
}

function gotData(data){
	console.log(data);
	
//	create(<div>)
	
}

function badStuff(error){
	console.log( error );
}
	
