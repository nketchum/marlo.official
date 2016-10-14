window.onload = function() {

  require("./components/webfonts");
  require("./components/infield_labels");

  if (sessionStorage.fonts) {
    document.documentElement.classList.add('wf-active');
  }

};
