
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