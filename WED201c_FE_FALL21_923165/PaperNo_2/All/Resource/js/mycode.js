function openNav(){
    var open = document.getElementById("mySidebar");

    var openn = open.style.width;
    
    if(openn  == "0px"){
        open.style.width = "300px";
    }else {
        open.style.width = "0px";
    }
}
function closeNav(){
    var open = document.getElementById("mySidebar");
    
}