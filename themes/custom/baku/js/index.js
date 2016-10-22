window.onload = function() {

  if (sessionStorage.fonts) {
    document.documentElement.classList.add('wf-active');
  }

  require("./components/infield_labels");

};