
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
		console.log('Dead!!!!');
		return;
	}

	//add new habit with the information we had on the form
	var div = document.createElement('div');
	div.id='NewHabit';
	div.className='habit';
	div.class='habit';
	document.getElementById('habits').appendChild(div);

	myString = " \n <div class='habit-title' id='habit2'> HABIT #2 </div> \n <div class='habit-body'> \n <div class='habit-body-text'> \n <div class='habit-body-text-top'>" + Habitname + "</div> \n <div class='habit-body-text-bottom'> EARNED: $0 | STREAK: 1 DAY </div> \n </div> \n ";
	myString=myString + "<div class='progress-bar'> <div class='left-number'>0</div> <progress class='progress-tag' value=0 max="+Length+"> </progress> <div class='right-number'>"+Length+"</div>\n ";

	myString=myString+"</div> \n"; 

	div.innerHTML=myString;

	return;
}