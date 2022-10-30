


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















//JAVASCRIPT FOR IMAGE CAROUSEL

var imageIndex = 0;

function changeImage() {
    
//    This variable picture is an array that contains all the images that are going to be displayed
    var picture = document.getElementsByClassName("picture");


//This for loop goes through each image in the array using index as a number to select each of the images, it increases by 1 each iteration so that it loops through each of the images. 
    
//The index here is one number behind the other imageindex. This means that once the image is displayed using the other display block code at the bottom of the function, then this code here makes that image then dissappear. 

//This ensures that none of the images continues to display, creating the effect of a carousel of images.   

for(var index =0; index < picture.length; index++ ){
    
    picture[index].style.display = "none";
}


//    The if statement increases the image index number every time the function is called as long as the end of the images hasnt been reached.

if (imageIndex < picture.length){
    
    imageIndex++;
    

//if the end of the array has been reached then the image index number is reset back to 1 to show the first image again
} else {
    
    imageIndex = 1
}
   
// This part of code display each image in the picture array using the image index,  the imageindex number increases every time the function is called through the if statement, this means as the image index increases a new image is displayed each time.
  picture[imageIndex-1].style.display = "block";  

//This part of code calls the function above and sets the timer to 4000 which is the time between each image is displayed
    
  setTimeout(changeImage, 4000); 
    
};

changeImage();








