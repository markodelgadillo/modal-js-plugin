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
    //Build out the modal
    buildOut.call(this);

    // Initialize our event listeners
    initializeEvents.call(this);

    // Look up .getComputedStyle
    window.getComputedStyle(this.modal).height;

    this.modal.className = this.modal.className + (this.modal.offsetHeight > window.innerHeight ? " scotch-open scotch-anchored");
    this.overlay.className = this.overlay.className + " scotch-open";
  };

  Modal.prototype.close = function () {
      // Store the value of this
      var _ = this;

      // REmove the open class name
      this.modal.className = this.modal.className.replace(" scotch-open", "");
      this.overlay.className = this.overlay.className.replace(" scotch-open", "");

      /*
      * Listening for the CSS transitionend even and then
      * Remove the nodes from the DOM
      */
      this.modal.addEventListener(this.transitionEnd, function () {
          _.modal.parentNode.removeChild(_.modal);
      });
      this.overlay.addEventListener(this.transitionEnd, function() {
          if(_.overlay.parentNode) _.overlay.parentNode.removeChild(_.overlay);
      })
  }

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
  if (this.options.closeButton === true) {
    this.closeButton.document.createElement("button");
    this.closeButton.className = "scotch-modal " + this.options.className;
    this.closebutton.innerHTML = "x";
    this.modal.appendChild(this.closeButton);
  }

  // If overlay is true, add one
  if (this.options.overlay === true) {
    this.overlay = document.createElement("div");
    this.overlay.className = "scotch-close close-button";
    docFrag.appendChild(this.overlay);
  }

  // Create content area and append to modal
  contentHolder = document.createElement("div");
  contentHolder.className = "scotch-content";
  contentHolder.innerHTML = content;
  this.modal.appendChild(contentHolder);

  // Append modalto DocumentFragment
  docFrag.appendChild(this.modal);

  // Append DocumentFragment to body
  document.body.appendChild(docFrag);
}

function initializeEvents() {
  if (this.closeButton) {
    this.closeButton.addEventListener("click", this.close.bind(this));
  }

  if (this.overlay) {
    this.overlay.addEventListener("click", this.close.bind(this));
  }
}

