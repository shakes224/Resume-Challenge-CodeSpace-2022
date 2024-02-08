document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var formData = new FormData(this);
    
    // Create an object to store form data
    var formObject = {};
    formData.forEach(function(value, key){
      formObject[key] = value;
    });
    
    // Display form data in console
    console.log('Form Data:', formObject);
    
    // Clear form fields (optional)
    this.reset();
  });
  