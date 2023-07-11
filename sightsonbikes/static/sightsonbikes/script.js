function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
};

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

