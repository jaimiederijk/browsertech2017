var htmlElements = {
  contacts: document.getElementsByTagName('div'),
  searchForm: document.getElementsByTagName('input')[0],
  allP: document.getElementsByTagName('p')

};
var app = {
  init: function() {
    contactsInteractions.addClick();
    contactsInteractions.hotSearch();
  }
};

var contactsInteractions = {
  addClick : function () {
    for (var i = 0; i < htmlElements.contacts.length; i++) (function(i) { //temp scope to make it work with onclick
      htmlElements.contacts[i].removeAttribute("tabindex");
      htmlElements.contacts[i].onclick = function() {
        if (htmlElements.contacts[i].className == "show") {
          htmlElements.contacts[i].className = htmlElements.contacts[i].className.replace(/\bshow/g, "");
        } else {
          htmlElements.contacts[i].className = "show";
        }

      }
    })(i);

  },
  hotSearch : function () {
    htmlElements.searchForm.keypress = function(event) {
      var key = "";
      if (event.which !== 0) {
        key = String.fromCharCode(e.which);
      }

      var searchWord = event.target.value + key;
      for (var i = 0; i < htmlElements.allP.length; i++) {
        if (htmlElements.allP[i].innerText.indexOf(searchWord)>-1) {
          htmlElements.allP[i].className = "highlight";
        } else {
          htmlElements.allP[i].className = htmlElements.contacts[i].className.replace(/\bhighlight/g, "");
        }
      }
    }
  }
};
app.init();
