
var dragged;

document.addEventListener("dragstart", onDragStart, false);
document.addEventListener("dragend", onDragEnd, false);
document.addEventListener("dragover", onDragover, false);
document.addEventListener("dragenter", onDragEnter, false);
document.addEventListener("dragleave", onDragleave,  false);
document.addEventListener("drop", onDrop, false);


// Handlers for drag events

function onDrop(event) {
    event.preventDefault();
    if (hasSomeParentTheClass(event, "dropzone")) {
      event.target.style.border = "none";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
    }
  };


  function onDragleave(event) {
    // reset background of potential drop target when the draggable element leaves it
    if (hasSomeParentTheClass(event, "dropzone")) {
      event.target.style.border = "none";
    }
  }


  function onDragEnter(event) {
    // highlight potential drop target when the draggable element enters it
    if (hasSomeParentTheClass(event, "dropzone")) {
        event.target.style.border = "2px dashed purple";
    }  
  }


  function onDragover(event) {
    // prevent default to allow drop
    event.preventDefault();
  }

  function onDragEnd(event) {
    // reset the transparency
    event.target.style.opacity = "";
  }


  function onDragStart(event) {
        // store a ref. on the dragged elem
        dragged = event.target;
        // make it half transparent
        event.target.style.opacity = .5;
  }

/**
 * Helper function to check if given element has class in parent Hierarchy
*/

function hasSomeParentTheClass(element, classname) {
    element = element.target;
    if (element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}


const colors = ['blue', 'red', 'purple', 'orange']
const issuesDom = document.getElementsByClassName('issue');

for(var i=0; i < issuesDom.length; i++) {
    issuesDom[i].style['border-top'] = `2px solid ${colors[i]}`;
}