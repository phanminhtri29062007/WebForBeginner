/*Name this external file gallery.js*/
const target=document.getElementById("image");
const imgs=document.querySelectorAll(".preview");
function upDate(previewPic){
    target.style.backgroundImage="url(" + previewPic.src + ")";
	target.innerHTML=previewPic.alt;
	}

function unDo(){
    target.style.backgroundImage="url('')";
	target.innerHTML="Hover over an image below to display here";
		
	}
var i=0;
imgs.forEach((img)=>{
	img.setAttribute('tabIndex', i);
	img.addEventListener('mouseenter', ()=> upDate(img));
  img.addEventListener('mouseleave', unDo);
  img.addEventListener('focus', ()=> upDate(img));
  img.addEventListener('blur', unDo);
})