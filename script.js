const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray ["Developer", "Programmer", "Code", "Tutorial"]; const typingDelay 160;
const typingDelay 100;
const erasingDelay 100;
const newTextDelay 2000;
let textArrayIndex = 0;
let charIndex = 0;
function type() {
if (charIndex < textArray[textArrayIndex].length) { 
if(!cursorSpan.classList.contains("typing"))
typeofSpaspabasektconaddt "textArray[textArrayIndex].charAt(char Index);
charIndex++;
setTimeout(type, typingDelay); 
}
else {
cursorSpan.classList.remove("typing");
setTimeout(erase, newTextDelay);
}
}
function erase() {
if (charIndex > 0) {
if(IcursorSpan.classList.contains("typing"))
typedFBxSpahatektconaddt"textArray[textArrayIndex].substring(0, charIndex- 
charIndex--;
setTimeout(erase, erasingDelay); 
}
else {
cursorSpan.classList.remove( "typing");
textArrayIndex++;
if(textArrayIndex>=textArray.length) textArrayIndex=0; 
setTimeout(type, typingDelay + 1100);
}
}
document.addEventListener("DOMContentLoaded", function() { 
if(textArray.length) setTimeout(type, newTextDelay + 250); 
});
