function myFunction(x) { // hamburger menu
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

// bike 1

document.addEventListener('DOMContentLoaded', function() {
  let currentDroppable = null;
  const bike = document.getElementById('bike');

  bike.addEventListener('mousedown', function(event) {
    let shiftX = event.clientX - bike.getBoundingClientRect().left;
    let shiftY = event.clientY - bike.getBoundingClientRect().top;

    bike.style.position = 'absolute';
    bike.style.zIndex = 1000;
    document.body.append(bike);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      bike.style.left = pageX - shiftX + 'px';
      bike.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      bike.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      bike.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.droppable');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          enterDroppable(currentDroppable);
        }
      }
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      bike.onmouseup = null;
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function enterDroppable(elem) {
    elem.style.background = '#D60078';
    window.location.href = 'home';
  }

  function leaveDroppable(elem) {
    elem.style.background = '';
  }

  bike.ondragstart = function() {
    return false;
  };
});

// bike 2

document.addEventListener('DOMContentLoaded', function() {
  let currentDroppable = null;
  const bike = document.getElementById('bike2');
  let initialY = bike.offsetTop;
  let minX = bike.offsetLeft-50; // Plane "x" minimum limit
  let maxX = 0; //Plane "x" maximum limit

  //  Set maxX as 0.87 of the window width
  maxX = Math.floor(0.87 * window.innerWidth);

  bike.addEventListener('mousedown', function(event) {
    let shiftX = event.clientX - bike.getBoundingClientRect().left;

    bike.style.position = 'absolute';
    bike.style.zIndex = 1000;
    document.body.append(bike);

    moveAt(event.pageX);

    function moveAt(pageX) {
      let newX = pageX - shiftX;
      let newY = initialY;

      // Plane "x" limits
      if (newX < minX) {
        newX = minX;
      } else if (newX > maxX) {
        newX = maxX;
      }

      bike.style.left = newX + 'px';
      bike.style.top = newY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX);

      bike.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      bike.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.droppable');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          enterDroppable(currentDroppable);
        }
      }
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      bike.onmouseup = null;

      if (currentDroppable) {
        dropOnDroppable(currentDroppable);
      }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function enterDroppable(elem) {
    elem.style.background = '#D60078';
  }

  function leaveDroppable(elem) {
    elem.style.background = '';
  }

  bike.ondragstart = function() {
    return false;
  };
  function dropOnDroppable(elem) {
    if (elem.id == 'meet') {
      console.log('meet');
      window.location.href = 'home';
    } else if (elem.id == 'host') {
      console.log('host');
      window.location.href = 'home';
    } else if (elem.id == 'route') {
      console.log('route');
      window.location.href = 'home';
    } else if (elem.id == 'include') {
      console.log('include');
      window.location.href = 'home';
    } else if (elem.id == 'fin') {
      console.log('fin');
      window.location.href = 'home';
    }
  }  
});