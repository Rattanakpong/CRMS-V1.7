
document.addEventListener('DOMContentLoaded', function() {
  const identifySelect = document.getElementById('identify');
  const additionalInfo = document.getElementById('additional-info');
  const differentInfo = document.getElementById('different-info');
  const form = document.getElementById('registration-form');
  const name = document.getElementById('Name');
  const phone = document.getElementById('phone');
  const age = document.getElementById('age');
  const country = document.getElementById('country');
  const dutySelect = document.getElementById('duty');
  const eventOptions = document.getElementById('event-options');
  const successMessage = document.getElementById('success-message');

  identifySelect.addEventListener('change', function() {
      if (identifySelect.value === 'refugee') {
          additionalInfo.style.display = 'block';
          differentInfo.style.display = 'none';
      } else if (identifySelect.value === 'not-refugee') {
          additionalInfo.style.display = 'none';
          differentInfo.style.display = 'block';
      } else {
          additionalInfo.style.display = 'none';
          differentInfo.style.display = 'none';
      }
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      let errors = [];

      // Check if the name field is empty
      if (name.value.trim() === '') {
          errors.push('Name is required');
      }

      // Check if the identify field is selected
      if (identifySelect.value === '') {
          errors.push('Please select your identify');
      }

      // Check if the phone field is empty
      if (phone.value.trim() === '') {
          errors.push('Phone number is required');
      }

      // Check if the age field is empty or not a number
      if (age.value.trim() === '' || isNaN(age.value)) {
          errors.push('Please enter a valid age');
      }

      // Check if the country field is empty
      if (country.value.trim() === '') {
          errors.push('Country is required');
      }

      // If there are errors, display them
      if (errors.length > 0) {
          alert(errors.join('\n'));
      } else {
          successMessage.style.display = 'block'; // Show the success message
          setTimeout(() => {
              successMessage.style.display = 'none'; // Hide the message after a few seconds
              form.submit(); // Submit the form
          }, 3000); // Adjust the timeout as needed
      }
  });

  const textarea = document.getElementById('purpose');
  textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
  });

  dutySelect.addEventListener('change', function() {
      showEventOptions();
  });

  function showEventOptions() {
      if (dutySelect.value === 'event') {
          eventOptions.style.display = 'block';
      } else {
          eventOptions.style.display = 'none';
      }
  }
});