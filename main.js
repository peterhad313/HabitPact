
//Will try to parse URL to display the result of the last habit added

//file:///Users/brunopeynetti/Documents/Github/HabitPact/main.html?HabitName=Finding+Nemo&activity=personal&stake=100.00

function getParameter(paramName) {

	//the following portion of code was done with guidance from StackOverflow forums and adapted to this assignment ++
  var searchString = window.location.search.substring(1),
      i, val, params = searchString.split("&");

  for (i=0;i<params.length;i++) {
    val = params[i].split("=");
    if (val[0] == paramName) {
      return val[1];
    }
  }
  return null;
}

	//++++++++++ end of mentioned portion of code 
var goleft=1;

$(document).ready(function(){
    $('.icon-menu').click(function() {
        console.log('something happened');
        if (goleft==1){
        	pos = '0px';
        }
        else {
        	pos = '-280px';
        }
        $('.menu').animate({
        	left: pos
        },200);
        
        //$('body').animate({
        //    left:'285px'
        //},200);
    	goleft=goleft*-1;
    });
});



function LoadAll(){

	var HabitName=getParameter('HabitName');

	var SplitHabit = HabitName.split('+');
	console.log(SplitHabit);
	Habitname="";
	var x;
	for ( x in SplitHabit){
		console.log(x);
		Habitname = Habitname + ' ' + SplitHabit[x];
	}
	var Activity = getParameter('activity');

	var Stake = getParameter('stake');

	var Length = getParameter('lengthbar');

	if (HabitName==null){
		console.log('no new habit');
		return;
	}

	//add new habit with the information we had on the form
	var div = document.createElement('div');
	div.id='NewHabit';
	div.className='habit';
	div.class='habit';
	document.getElementById('habits').appendChild(div);

	myString = " \n <div class='habit-title' id='habit2'> HABIT #2 </div> \n <div class='habit-body'> \n <div class='habit-body-text'> \n <div class='habit-body-text-top'>" + Habitname + "</div> \n <div class='habit-body-text-bottom'> EARNED: $0 | STREAK: 1 DAY </div> \n </div> \n ";
	myString=myString + "<div class='progress-bar' id='second-progress'>  <progress class='progress-tag' value=0 max="+Length+"> </progress> </div><div class='numbers-bar'> <div class='left-number'>0</div><div class='right-number'>"+Length+"</div> </div>\n  ";

	myString=myString+"</div> \n"; 
	div.innerHTML = myString;

	var new_button = document.createElement('div');
	new_button.id='newButton';
	new_button.className='add-progress';
	String2 = "<form action='addProgress.html' method='GET'> \t <input type='submit' id='add-progress' value='add progress for habit #2'> \n </form> ";
	document.getElementById('habits').appendChild(new_button);
	new_button.innerHTML=String2;

	return;
}