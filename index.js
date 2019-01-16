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

    // create options by extending defaults w/passed in arguments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }
  };

  // utility method to extend defaults w/user options
  function extendDefaults(source, properties) {
    let property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }
})();

var myModal = new Modal({
  content: "Howdy",
  maxWidth: 600
});

// public methods

(function() {
  this.Modal = function() {};

  // Public Methods
  Modal.prototype.open = function() {
    //open code goes here
  };

  // Private Methods

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {}
})();

function buildOut() {
  var content, contentHolder, docFrag;

  /*
   * If content is an HTML string, append the HTML string.
   * If content i a domNode, append its content.
   */

  if (typeof this.options.content === "string") {
    content = this.options.content;
  } else {
    content = this.options.content.innerHTML;
  }

  // Create a DocumentFragment to build with
  docFrag = document.createDocumentFragment();

  // Create a modal element
  this.modal = document.createElement("div");
  this.modal.className = "scotch-modal " + this.options.className;
  this.modal.style.minWidth = this.options.minWidth + "px";
  this.modal.style.maxWidth = this.options.maxWidth + "px";

  // if closeButton option is true, add a close button
  if(this.options.closeButton === true) {
      this.closeButton.document.createElement("button") 
      this.closeButton.className = "scotch-modal " + this.options.className
      this.closebutton.innerHTML = "x"
      this.modal.appendChild(this.closeButton)
  }

  // If overlay is true, add one
  if(this.options.overlay === true) {
      this.overlay = document.createElement("div")
      this.overlay.className = "scotch-close close-button";
      docFrag.appendChild(this.overlay)
  }

  // Create content area and append to modal
  contentHolder = document.createElement("div")
  contentHolder.className = "scotch-content"
  contentHolder.innerHTML = content
  this.modal.appendChild(contentHolder)

  // Append modalto DocumentFragment
  docFrag.appendChild(this.modal)

  // Append DocumentFragment to body
  document.body.appendChild(docFrag)
}


