

function ShowLength(length){
	var weeks = Math.round(Number(length)/7);
	document.getElementById('days').innerHTML=length+' days ('+ weeks +' weeks)';
}

function Activity(act){

	document.getElementById('ActivityType').value=act;

	document.getElementById('eating').style.color='#fff';
	document.getElementById('fitness').style.color='#fff';
	document.getElementById('sleep').style.color='#fff';
	document.getElementById('hobby').style.color='#fff';
	document.getElementById('personal').style.color='#fff';
	document.getElementById('other').style.color='#fff';

	document.getElementById('eating').style.border='none';
	document.getElementById('fitness').style.border='none';
	document.getElementById('sleep').style.border='none';
	document.getElementById('hobby').style.border='none';
	document.getElementById('personal').style.border='none';
	document.getElementById('other').style.border='none';



	document.getElementById(act).style.color='#333';
	document.getElementById(act).style.border='solid black 2px';
	console.log(act);
}


function LoadAll(){
	ShowLength(70);
	//Activity('fitness');

}