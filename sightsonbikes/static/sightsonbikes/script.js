// index
if (window.location.pathname == '/') {
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
} 
// home
else if (window.location.pathname == '/home') {
  let preCol = null;
  function myFunction(x) { // hamburger menu
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
    const bike = document.getElementById('bike2');
    let initialY = bike.offsetTop;
    let initialX = bike.offsetLeft;
    let minX = bike.offsetLeft-50; // Plane "x" minimum limit
    let maxX = 0; //Plane "x" maximum limit

    //  Set maxX as 0.88 of the window width
    maxX = Math.floor(0.88 * window.innerWidth);

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
        document.getElementById('arrow').style.display = 'none';


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
      if (elem.id == 'fin') {
      elem.style.marginLeft = '94.2%';
      }
      else if (elem.id == 'meet') {
        elem.style.marginLeft = '1%';
        }
      elem.style.zIndex = '100';
      elem.style.scale = '1.5';
      preCol = elem.style.color;
      elem.style.color = '#f2a900';
      elem.style.background = '#a51890';
      if (elem.id == 'meet') {
        window.location.href = 'home';
      } else if (elem.id == 'host') {
        document.getElementById('meetdiv').style.display = 'none';
        document.getElementById('hostdiv').style.display = 'block';
        document.getElementById('routediv').style.display = 'none';
        document.getElementById('expectationdiv').style.display = 'none';
        document.getElementById('findiv').style.display = 'none';
      } else if (elem.id == 'route') {
        document.getElementById('meetdiv').style.display = 'none';
        document.getElementById('hostdiv').style.display = 'none';
        document.getElementById('routediv').style.display = 'block';
        document.getElementById('expectationdiv').style.display = 'none';
        document.getElementById('findiv').style.display = 'none';
      } else if (elem.id == 'expectation') {
        document.getElementById('meetdiv').style.display = 'none';
        document.getElementById('hostdiv').style.display = 'none';
        document.getElementById('routediv').style.display = 'none';
        document.getElementById('expectationdiv').style.display = 'block';
        document.getElementById('findiv').style.display = 'none';
      } else if (elem.id == 'fin') {
        document.getElementById('meetdiv').style.display = 'none';
        document.getElementById('hostdiv').style.display = 'none';
        document.getElementById('routediv').style.display = 'none';
        document.getElementById('expectationdiv').style.display = 'none';
        document.getElementById('findiv').style.display = 'block';
      }
    };
    
    function leaveDroppable(elem) {
      if (elem.id == 'fin') {
        elem.style.marginLeft = '95%';
      }
      elem.style.zIndex = '';
      elem.style.color = preCol;
      elem.style.scale = '1';
      elem.style.background = '';
    };

    bike.ondragstart = function() {
      return false;
    };
  });
  // finishline
  function togallery() {
    window.location.href = 'gallery';
  }
  function tobook() {
    window.location.href = 'book';
  }
}
// gallery & full
else if (window.location.pathname == '/gallery' || window.location.pathname == '/full') {
  let preCol = null;
  function myFunction(x) { // hamburger menu
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  function full() {
    window.location.href = 'full';
  }
  function normal() {
    window.location.href = 'gallery';
  }
  function tobook() {
    window.location.href = 'book';
  }
}
// about
else if (window.location.pathname == '/about') {
  let preCol = null;
  function myFunction(x) { // hamburger menu
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
}
// reviews
else if (window.location.pathname == '/reviews') {
  let preCol = null;
  function myFunction(x) { // hamburger menu
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
}
// book
else if (window.location.pathname == '/book') {
  let preCol = null;
  function myFunction(x) { // hamburger menu
    x.classList.toggle("change");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };
  function isprivate(x) {
    if (x.value == 'Private Tour') {
      document.getElementById('privatetime').style.display = 'block';
      document.getElementById('price').innerHTML = '$ 350 USD.';
    } else {
      document.getElementById('privatetime').style.display = 'none';
      document.getElementById('price').innerHTML = '$ ' + 65*document.getElementById('pax').value + ' USD.';
    }};
  function price(x) {
    if (document.getElementById('price').innerHTML != '$ 350 USD.') {
      document.getElementById('price').innerHTML = '$ ' + 65*x.value + ' USD.';
    }};
  }
//test
else if (window.location.pathname == '/test') {
  let preCol = null;
  function myFunction(x) { // hamburger menu
      x.classList.toggle("change");
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
  };
}