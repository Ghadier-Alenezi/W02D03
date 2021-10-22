// change size
const changeS = () => {
  const firstLine = document.getElementById("firstLine");
  firstLine.style.fontSize = "500%";
};
const sizeBtn = document.getElementById("sizeCh");
sizeBtn.addEventListener("click", changeS);

//vfont change
const changeF = () => {
  const paragraphs = document.getElementById("paragraphs");
  paragraphs.style.fontFamily = "Impact,Charcoal,sans-serif";
};
const fontCh = document.getElementById("fontCh");
fontCh.addEventListener("click", changeF);

//highlight p
const highlightP = () => {
  const paragraphsBgc = document.getElementById("paragraphs");
  paragraphsBgc.style.backgroundColor = "gray";
};
const highlight = document.getElementById("highlight");
highlight.addEventListener("click", highlightP);

//hide img
const hideImg = () => {
  const hideImg = document.getElementById("img2");
  hideImg.style.visibility = "hidden";
};
const hiden = document.getElementById("hideImg");
hiden.addEventListener("click", hideImg);

//alternate imgs
const altImgs = () => {
let im3= document.getElementById("img3").setAttribute("src", "https://res.cloudinary.com/practicaldev/image/fetch/s--X-hc2jJt--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/am6lv2x37bole6x4poz3.jpg")
}
const imgsCh = document.getElementById("altImgs");
imgsCh.addEventListener("click", altImgs);

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

paraghraphs.addEventListener("mouseenter", (e) => {
  paraghraphs.style.color = "lightGreen";
});
paraghraphs.addEventListener("mouseleave", (e) => {
  paraghraphs.style.color = "black";
});
