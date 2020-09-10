function sidebar(){
    var checkBox = document.getElementById('hamburger');
    if(checkBox.checked==true){
        document.getElementById(`menu`).style.width="0";
        document.getElementById(`sidebar-logo`).style.display="none";
        document.getElementById(`sidebar-links`).style.display="none";
    } else {
        document.getElementById(`menu`).style.width="300px";
        document.getElementById(`sidebar-logo`).style.display="initial";
        document.getElementById(`sidebar-links`).style.display="flex";
    }
}