var inquirer = require ("inquirer");


function Basic (front, back){
	this.front = front;
	this.back = back;
};
function usersafeBasic(front,back){
	return new Basic (front, back)
};

function Cloze (full,partial){
	this.full=full;
	this.partial = partial;
};
function usersafeCloze(front,back){
	return new Cloze(full,partial)
};
var firstPresident = usersafeBasic(
    "Who was the first president of the United States?", "George Washington");
var firstPresidentpartial = usersafeCloze("....was the first president of the United States");
var	firstPresidentfull = usersafeCloze("George Washington was the first president of the United States.");
/*console.log(firstPresident.front);*/
promptUser();

function promptUser(){
	inquirer.prompt([{
		type:"rawlist",
		message: "Which type of flashcards would like to use?",
		choices:["basic","cloze"],
		default:["basic"],
		name:"types"
	}]).then (function(user){
		if (user.types==="basic"){
			console.log(firstPresident.front);
			console.log(firstPresident.back);	
			};
			if (user.types ==="cloze"){
				type:"rawlist"
				message : "Partial or full flashcard?"
				choices :["partial","full"],
				name: "options",
			}.then function(user){

			else if  (user.options==="partial"){
				console.log(firstPresidentpartial);
			}
			else {
				console.log(firstPresidentfull);
			};
	});
}