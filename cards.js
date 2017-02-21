var inquirer = require ("inquirer");


function Basic (front, back){
	this.front = front;
	this.back = back;
};

function Cloze (cloze,partial){
	this.cloze =cloze;
	this.partial = partial;
}
var firstPresident = new Basic(
    "Who was the first president of the United States?", "George Washington");

/*console.log(firstPresident.front);*/

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
		then (
			console.log(firstPresident.back));
		}
	})
};