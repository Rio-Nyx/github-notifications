document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

//      var f = d.createElement('form');
//      f.action = 'http://gtmetrix.com/analyze.html?bm';
//      f.method = 'post';
//      var i = d.createElement('input');
//      i.type = 'hidden';
//      i.name = 'url';
//      i.value = tab.url;
//      f.appendChild(i);
//      d.body.appendChild(f);
//      f.submit();
//    	var ur = tab.url;
//    	var h1 = d.createElement('h1');
    	const res = async function(){
    	const response =await fetch(
  "https://api.github.com/notifications", 
  {
    headers: {
      authorization: "token personal_token"
    }
  }
)
	notifications = await response.json();
	var nums = notifications.length;
	console.log(notifications);
	let notes = d.getElementById("notifications");
	console.log(notifications.length);	
	for(let i=0;i<notifications.length;i++){
		var note = d.createElement('li');
		note.innerHTML = notifications[i].subject.title;
		notes.appendChild(note);
	}
}
res()
//    	h1.innerHTML = "hello";
//    	h1.innerHTML = res.json()
//    	d.body.appendChild(h1);
    });
  }, false);
}, false);
