// JavaScript Document

function check(){
	
	var question_1 = document.quiz.question_1.value;
	var question_2 = document.quiz.question_2.value;
	var question_3 = document.quiz.question_3.value;
	var question_4 = document.quiz.question_4.value;
	var question_5 = document.quiz.question_5.value;
	var correct = 0;


	if (question_1 === "København") {
		correct++;
	}
	
	if (question_2 === "8") {
		correct++;
	}	
	
	if (question_3 === "0") {
		correct++;
	}
	
	if (question_4 === "Albany") {
		correct++;
	}
	
	if (question_5 === "Albany") {
		correct++;
	}
	
	var rie_feedback = ["../images_geografi/rie_1.svg", "../images_geografi/rie_2.svg", "../images_geografi/rie_3.svg", "../images_geografi/rie_3.svg", "../images_geografi/rie_3.svg", "../images_geografi/rie_3.svg"];
	
	var range;

	if (correct === 0) {
		range = 0;
	}
	
	if (correct === 1) {
		range = 1;
	}
	
	if (correct === 2) {
		range = 2;
	}
	
	if (correct === 3) {
		range = 3;
	}
	
	if (correct === 4) {
		range = 4;
	}
	
	if (correct === 5) {
		range = 5;
	}
	
	if (correct === 6) {
		range = 6;
	}
	
	document.getElementById("rie_feedback").src = rie_feedback[range];
}












