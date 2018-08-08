
// function goToPage(url){
//     window.location.href = url;
// }

function showSection(sectionId){
    document.getElementById('homepage').style.display = "none";
    document.getElementById(sectionId).style.display = "block";
    document.getElementById('returnButton').style.display = "block";
}

function showHomepage(){
    document.getElementById('homepage').style.display = "block";
    document.getElementById('htmlSection').style.display = "none";
    // document.getElementById('cssSection').style.display = "none";
    document.getElementById('cleanCodeSection').style.display = "none";
    document.getElementById('returnButton').style.display = "none";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}