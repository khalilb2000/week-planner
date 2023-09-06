document.addEventListener('DOMContentLoaded', function () {
  loadNotes(); // Call the loadNotes function when the page loads

  document.querySelectorAll('.saveBtn').forEach((saveButton) => {
    saveButton.addEventListener('click', saveEvent);
  });

  //creating function to load notes from localStorage

  function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach((timeSlot) => {
      const id = timeSlot.id;
      const savedNote = savedNotes[id];
      if (savedNote) {
        const textarea = timeSlot.querySelector('.description');
        textarea.value = savedNote;
      }
    });
  }

  //cfreating save function
  function saveEvent() {
    const currentHour = this.parentNode.id;
    const eventText = this.previousElementSibling.value;
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    savedNotes[currentHour] = eventText;
    localStorage.setItem('notes', JSON.stringify(savedNotes));
    console.log('Save completed');
  }
});
