(function() {
  const privateVar = "Can't be accessed in the console";

  this.Modal = function() {
    //global element references
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;

    // define option defaults
    const defaults = {
      className: "fade-and-drop",
      closeButton: true,
      content: "",
      maxWidth: 600,
      minWidth: 280,
      overlay: true
    };

    // create options by extending defaults w/passed in args
    if (args[0] && typeof args[0] === "object") {
      this.options = extendDefaults(defaults, args[0]);
    }
  };

  // utility method to extend defaults w/user options
  function extendDefaults(source, properties){

      const property;
      for (property in properties) {
          if (properties.hasOwnProperty(property)) {
              source[property] = properties[property]
          }
      }
      return source;
  }
})();

var myModal = new Modal();
