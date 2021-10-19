/* 
Change an image when the mouse moves onto it,
and then back to the original image when the mouse moves off of it.
*/
const changeImg = () => {
  document.getElementById("img1").src = "./programming.png";
};
const returnImg = () => {
  document.getElementById("img1").src = "./tuwaiq.png";
};

/*
Create a script which creates an alert on the page 
when a user right clicks on a specific image.
*/
const alertImg = () => {
  const alertImg = "HELLO guys! my img alerted :)";
  alert(alertImg);
};
/*
 Create an alert on the page when a user enters data 
 into a input.
*/
const alertInp = () => {
  const alertMessage = "yes!! that's work :')";
  alert(alertMessage);
};

/*
Create an alert to let the user know when 
the page has loaded
*/
const loadPage = () => {
  const alertPage = "Page is loaded...";
  alert(alertPage);
};

/*
Highlight all paragraphs when the mouse moves over them 
(then revert back once it has moved past them).
*/
const paraghraphs = document.querySelector("#paragraphs");

paraghraphs.addEventListener("mouseenter", e => {
  paraghraphs.style.color = "lightGreen";
});
paraghraphs.addEventListener("mouseleave", e => {
  paraghraphs.style.color = "black";
});
