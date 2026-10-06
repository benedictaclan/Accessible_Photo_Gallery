function loadEvent(){
    load=document.getElementById('image');
    console.log("Loaded default image")
    load.style.backgroundImage="url('imgs/Polaroid camera.jpg')";

    imgpreviews=document.querySelectorAll('img')
    for (var i=0; i < imgpreviews.length; i++) {
        console.log("Image "+ i)
        imgpreviews[i].setAttribute("tabindex", "0")
    }
}

function upDate(previewPic){
    upreview=document.getElementById('image');
    console.log("Updated background image to "+ previewPic.src)
    upreview.style.backgroundImage="url('"+ previewPic.src +"')";
    upreview.innerHTML=previewPic.alt;
}

function unDo(){
    clear=document.getElementById('image');
    console.log("Blank")
    clear.style.backgroundImage="url('')";
    console.log("Reverted innerHTML text to default")
    clear.innerHTML="Hover over an image below to display here.";
}