

//JAVASCRIPT FOR THE NAV BAR



//This is a constant called togglebutton -  It gets the burger button from the navigation bar in the DOM and puts it inside a constant so we can then use it here in the javascript code and refer to it easily

const toggleButton = document.getElementsByClassName('burgerButton')[0];
//This is a constant called navbarlinks, it holds the navigation links from the navigation bar. Which then allows us to make them active in the code below, we have to put it into a constant so we can manipulate it

const navbarLinks = document.getElementsByClassName('nav-links')[0];


//Ive used an event listener so that when someone clicks on the burger button the next bit of code triggers an action

toggleButton.addEventListener("click", () => {
    
//    This part of code makes the navigation links to the other web pages appear, but only when the event click happens, which means it isnt always showing and allows correct interaction
    
    navbarLinks.classList.toggle('active')
    
});










//JAVASCRIPT FOR QUIZ 

//There are 6 variables here, one for each of the quiz questions, as each of the questions is in the item main class they need to be distinguished so they are put into seperate variables.

var quizquestion = document.getElementsByClassName("item-main")[0];
var quizquestion2 = document.getElementsByClassName("item-main")[1];
var quizquestion3 = document.getElementsByClassName("item-main")[2];

var quizquestion4 = document.getElementsByClassName("item-main")[3];
var quizquestion5 = document.getElementsByClassName("item-main")[4];
var quizquestion6 = document.getElementsByClassName("item-main")[5];




//each question here has an event listener added to it, this allows each question to be clicked, so that the action can happen. When each question is clicked the the question dissapears and the answer appears because the event listener triggers the second part of the code, which in turn toggles the item containing the question and then shows a different section of the item layout which is called is-flipped and this contains the answer.

quizquestion.addEventListener("click", () => {
  quizquestion.classList.toggle('is-flipped');
});



quizquestion2.addEventListener("click", () => {
  quizquestion2.classList.toggle('is-flipped');
});


quizquestion3.addEventListener("click", () => {
  quizquestion3.classList.toggle('is-flipped');
});


quizquestion4.addEventListener("click", () => {
  quizquestion4.classList.toggle('is-flipped');
});


quizquestion5.addEventListener("click", () => {
  quizquestion5.classList.toggle('is-flipped');
});


quizquestion6.addEventListener("click", () => {
  quizquestion6.classList.toggle('is-flipped');
});
