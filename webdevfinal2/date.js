//code for Date taken and altered, see report link no.11
function renderTime(){
	
	var dates = new Date();
	var year = dates.getYear();
	if(year < 1000){
		year += 1900
	}
	
	var day = dates.getDay();
	var month = dates.getMonth();
	var daym = dates.getDate();
	
	
	
	var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var montharray = new Array("January", "Feburary","March","April","May","June","July","August","September","October","November","December");
	
	var myDate = document.getElementById("DateDisplay");
	myDate.textContext = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;
	myDate.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;
	

}
	renderTime();

var d = new Date("2015-03-25T12:00:00Z");
document.getElementById("demo").innerHTML = d;