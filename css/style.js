/*challenge1*/
function age(){
	let birthyear=prompt("what year were you born?");
	let ageIndays=(2020-birthyear)*365;
	let h1=document.createElement('h2');
	let textAns=document.createTextNode("you are "+ageIndays+" days old!");
	h1.appendChild(textAns);
	document.getElementById("flex-result").appendChild(h1);
}
function reset(){
	document.getElementById("flex-result").innerHTML="";
}
/*challenge2*/
function press(){
	let image=document.createElement('img');
	image.src="images/unicorn.gif";
	document.getElementById("flex-box2-1").appendChild(image);
}
function clar(){
	document.getElementById("flex-box2-1").innerHTML="";
}
/*challenge3*/
function playGame(yourchoice){
	let humanChoice, botChoice;
	humanChoice=yourchoice.id;
	console.log(humanChoice);
	botChoice=NumbertoChoice(randomrps());
	console.log(botChoice);
	var result=decideWinner(humanChoice,botChoice);
	console.log(result);
	let fmessage=finalMessage(result);
	console.log(fmessage);
	frontend(humanChoice,fmessage,botChoice);
}
function randomrps(){
	return(Math.floor(Math.random()*3));
}
function NumbertoChoice(number){
	return(["rock","paper","scissor"][number]);
}
function decideWinner(humanChoice,botChoice){
	var rpsdatabase={
		"rock":{"rock":0.5,"paper":0,"scissor":1},
		"paper":{"paper":0.5,"scissor":0,"rock":1},
		"scissor":{"scissor":0.5,"rock":0,"paper":1}
	}
	let yourScore=rpsdatabase[humanChoice][botChoice];
	let botScore=rpsdatabase[botChoice][humanChoice];
	console.log(yourScore);
	console.log(botScore);
	return[yourScore,botScore];
}
function finalMessage([yourScore,botScore]){
	if(yourScore>botScore)
		return{message:"YOU WON",color:"green"}
	else if(yourScore<botScore)
		return{message:"YOU LOSE",color:"red"}
	else
		return{message:"YOU TIED",color:"yellow"}
}

function frontend(humanChoice,fmessage,botChoice){
	let image=document.createElement('img');
	let imgdatabase={
		"rock":image.src="images/rock.png",
		"paper":image.src="images/paper.jpg",
		"scissor":image.src="images/scissors.png",
	}
	document.getElementById("flex-box3-1").textContent=" ";
	let humandiv=document.createElement('div');
	humandiv.innerHTML="<img src="+imgdatabase[humanChoice]+">";
	document.getElementById("flex-box3-1").appendChild(humandiv);
	let msgdiv=document.createElement('div');
	msgdiv.innerHTML="<h1 style='color:"+fmessage['color']+";font-size:40px;padding:30px'>"+fmessage['message']+"</h1>";
	document.getElementById("flex-box3-1").appendChild(msgdiv);
	let botdiv=document.createElement('div');
	botdiv.innerHTML="<img src="+imgdatabase[botChoice]+">";
	document.getElementById("flex-box3-1").appendChild(botdiv);
}
/*challenge4*/
let allButtons=document.getElementsByTagName("button");
console.log(allButtons);
let CopyAllButton=[];
for(let i=0;i<allButtons.length;i++)
	CopyAllButton.push(allButtons[i].classList[1]);
console.log(CopyAllButton);
function buttonChangeColor(buttonThing){
		if(buttonThing.value=="red")
			buttonRed();
		if(buttonThing.value=="green")
			buttonGreen();
		else if(buttonThing.value=="yellow")
			buttonYellow();
		else if(buttonThing.value=="random")
			buttonRandom();
		else if(buttonThing.value=="reset")
			buttonReset();
}
function buttonRed(){
	for(let i=0;i<allButtons.length;i++){
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add("btn-danger");
	}
}
function buttonGreen(){
	for(let i=0;i<allButtons.length;i++){
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add("btn-success");
	}
}
function buttonYellow(){
	for(let i=0;i<allButtons.length;i++){
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add("btn-warning");
	}
}
function buttonRandom(){
	let colors=["btn-primary","btn-danger","btn-warning","btn-success"];
	for(let i=0;i<allButtons.length;i++){
		let randomno=Math.floor(Math.random()*4);
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add(colors[randomno]);
	}
}
function buttonReset(){
	for(let i=0;i<allButtons.length;i++){
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add(CopyAllButton[i]);
	}
}