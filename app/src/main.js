const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked = null;

const handleCheck = (e) => {
  let inBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('check in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }

    });
  }
  lastChecked = e.target;
};

checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));