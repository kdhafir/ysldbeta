//Check If webstorage is supported
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
    alert("عذراً.. جهازك يا يدعم قواعدالبيانات المستخدمة في البرنامج");
}




//word.forEach(creatTable)
function creatTable(word) {
    
  
    //code
}
//word.foreach()
//Search function
function searchtable(){
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("searchTable");
  tr = table.getElementsByTagName("tr");

//choose column number
    //var colname = document.querySelector('input[name="colname"]:checked').value;
    var colname = 0;
    
// Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[colname];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function showWordMeaning(wordenglish,wordpic,wordexplain){
  var wordlink = "./wordview.html?&&" + wordenglish + "&&" + wordpic + "&&"+ wordexplain;
  window.location.href = wordlink;
}
function showWordsModal(wordfile,wordpic,wordexplain){
    document.getElementById('WordExplain').innerHTML = wordexplain;
    //document.getElementById('wordpic').innerHTML = "<img width=\"100%\" src=\"wordsimgsdb/family/" +wordfile+"\">";
    document.getElementById('youtube_vid').innerHTML = "<iframe width=\"100%\" height=\"300\" src=\"" + wordfile + "?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allowfullscreen></iframe>"; //"<iframe width=\"100%\" height=\"auto\" src=\"" + wordfile + "\"></iframe>";
    
    document.getElementById('wordpic').innerHTML = "<center><img width=\"50%\" height=\"auto\" src=\"wordsimgs/countries/" + wordpic + "\"></center>";

    //<iframe width="853" height="480" src="https://www.youtube.com/embed/LWLpNxWNmtw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	$('#WordsModal').modal({
		backdrop: 'static',
		keyboard: false,
		show: true
	});
}
