const options = document.querySelectorAll('.CLI_chooser, .GUI_chooser');
  let selectedIndex = 0;

  function updateSelection() {
    options.forEach((opt, index) => {
      if (index === selectedIndex) {
        opt.style.backgroundColor = '#00FF00';
        opt.style.color = 'black';
      } else {
        opt.style.backgroundColor = 'transparent';
        opt.style.color = '#00FF00';
      }
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
      selectedIndex = (selectedIndex + 1) % options.length;
      updateSelection();
    } else if (e.key === 'ArrowUp') {
      selectedIndex = (selectedIndex - 1 + options.length) % options.length;
      updateSelection();
    } else if (e.key === 'Enter') {
      if (selectedIndex === 0) {
        window.location.href = 'cli.html'; // replace with your actual CLI page
      } else if (selectedIndex === 1) {
        window.location.href = 'gui.html'; // replace with your actual GUI page
      }
    }
  });

  updateSelection();