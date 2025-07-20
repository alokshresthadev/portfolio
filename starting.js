document.addEventListener('DOMContentLoaded', function() {
  const options = document.querySelectorAll('.option');
  let selectedIndex = 0;

  // Update selection visually
  function updateSelection() {
    options.forEach((opt, index) => {
      if (index === selectedIndex) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
      selectedIndex = (selectedIndex + 1) % options.length;
      updateSelection();
    } else if (e.key === 'ArrowUp') {
      selectedIndex = (selectedIndex - 1 + options.length) % options.length;
      updateSelection();
    } else if (e.key === 'Enter') {
      const selectedOption = options[selectedIndex];
      window.location.href = selectedOption.dataset.target;
    }
  });

  // Mobile touch support
  options.forEach(option => {
    option.addEventListener('click', function() {
      window.location.href = this.dataset.target;
    });
    
    option.addEventListener('touchstart', function() {
      this.classList.add('selected');
    });
    
    option.addEventListener('touchend', function() {
      this.classList.remove('selected');
    });
  });

  // Initialize selection
  updateSelection();
});