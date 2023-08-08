



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



// Add a "checked" symbol when clicking on a list item
function newElement1() {
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
}


// function for input button
function addg() {
            let element = document.getElementById('addbutton');
            element.classList.toggle("addg");
        }




function newElementbtn() {
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
}



// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
   li.setAttribute('id', 'listId');
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").prepend(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
 /* create a custom button and append/prepend to the list */  
  
  var span1 = document.createElement("SPAN");
  span1.setAttribute('id', 'checkbx');
  const inputbox = document.createElement("input");
      inputbox.type = 'Checkbox';
  span1.className = "checkmark";
  li.prepend(span1);
  


  
}


// functions for dark and day mode


function darkmode() {
            let element = document.body;
            element.classList.toggle("dark");
        }


function darklists() {
            let element1 = document.querySelector("ul");
            element1.classList.toggle("darklist");
        }

function condark() {
	        var con3 = document.getElementById("Container3");
            var con2 = document.getElementById("Container2");  			
            var ellem = document.getElementById("mydivv");	
            var myInputVar = document.getElementById("myInput");			
			con3.classList.toggle("cdark");
			con2.classList.toggle("cdark");
			ellem.classList.toggle("cdark");
			
			
			myInputVar.classList.toggle("myInputV");
}


function faV() {   
   var x = document.getElementById("favIcon");
   x.classList.toggle('moon-night'); }

var addBtn = document.querySelector('.addBtn');
                                      
addBtn.addEventListener("click", function() {
   addBtn.classList.togggle('check2');
}, false);

function getCheckboxvalue() {
	var lilen= document.getElementsByTagName('li').length;
    var msg2=[];
var list = document.getElementById('myUL');;
document.getElementsByClassName("gettext1")[0].innerHTML =(lilen) + " ";
list.addEventListener('click', function()
	{ for (var i=0;i< lilen;i++){
   if ( document.getElementsByClassName("checked")/*.length*/) {
	   document.getElementsByClassName("checked")/*[i].click*/;

	document.getElementsByClassName("gettext")[0].innerHTML =(document.querySelectorAll('li:not(.checked)').length) + " items left";
    }
	else{
		
		document.getElementsByClassName("gettext")[0].innerHTML =(document.querySelectorAll('li:not(.checked)').length) + " items left";
		break
	}
	
}
  
  
 }, false);
}



// Active = this hide all completed leaving the uncompleted
function hidecompleted() {
	
	const mylist = document.querySelectorAll('.checked');

      mylist.forEach(checked => {
      checked.style.display = "none";
});
}

// All = show completed along with uncompleted (showcompleted and showuncomp)
function showcompleted() {
	
	const mylist = document.querySelectorAll('.checked');

      mylist.forEach(checked => {
      checked.style.display = "inherit";
});

}

// Completed = hide uncompleted and show completed and show completd(showcompleted() and hideuncomp())
function hideuncomp() {
	
    const myitem = document.querySelectorAll('li:not(.checked)');
     var itms = ('li:not(.checked)');
      myitem.forEach(itms => {
      itms.style.display = "none";
});
}

// showuncomp = set uncompleted display to visible
function showuncomp() {
	
    const myitem = document.querySelectorAll('li:not(.checked)');
     var itms = ('li:not(.checked)');
      myitem.forEach(itms => {
      itms.style.display = "inherit";
});
}





// Clear Completed = this remove completed todo list.
function rmove() {
	
	const mylist = document.querySelectorAll('.checked');

      mylist.forEach(checked => {
      checked.remove();
});
}

// linking keyboard "ENTER" to input button




