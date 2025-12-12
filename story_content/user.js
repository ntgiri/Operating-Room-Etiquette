function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6X8MB4Dx0dc":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var scrollbarBtn = document.querySelector('.scrollarea-btn');
var slideContainer = document.querySelector('.slide-container');

var btnPos = 0;
var slideContainerPos = 0;
var posCalc = 0;

var checkScrollbarPosition = function() {
 //DETERMINE THE AMOUNT OF WHITESPACE ABOVE THE SLIDE (OFFSET)
 var offset = slideContainer.getBoundingClientRect().top;
 
 //GET POSITION OF SCROLLBAR AND SLIDE CONTAINER
 btnPos = scrollbarBtn.getBoundingClientRect().bottom - offset;
 slideContainerPos = slideContainer.getBoundingClientRect().bottom - offset;
 
 //CALCULATE DISTANCE BETWEEN BOTTOM OF SCROLLBAR AND SLIDE CONTAINER AS PERCENTAGE
 posCalc = (btnPos / slideContainerPos) * 100;
 
 //FOR DEBUGGING ONLY IN CONSOLE
 //console.log('btn btm pos: ' + pos);
 //console.log('slide btm pos: ' + slideContainerPos);
 //console.log('pos calc: ' + posCalc);
 
 //IF POSITION OF SCROLLBAR BUTTON IS MORE THAN 80% FROM TOP OF SLIDECONTAINER SET SL VARIABLE TO TRUE
 //Adapt 80% as necessary to accomodate where you want the detection to be
 if (posCalc > 80) {
 player.SetVar('scrollAtBottom', true);
 document.removeEventListener('mouseup', checkScrollbarPosition);
 }
}

document.addEventListener('mouseup', checkScrollbarPosition);
}

