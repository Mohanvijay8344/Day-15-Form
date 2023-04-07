            // Get the form element and add a submit event listener
            const form = document.querySelector('#myForm');
            form.addEventListener('submit', handleSubmit);
          
            // Get the table element and tbody element
            const table = document.querySelector('#myTable');
            const tbody = table.querySelector('tbody');
          
            // Define a function to handle form submission
            function handleSubmit(event) {
              // Prevent the default form submission behavior
              event.preventDefault();
          
              // Get the form data
              const formData = new FormData(event.target);
          
              // Extract the food values from the form data
              const foodValues = formData.getAll("food[]");
          
              // Make sure at least 2 foods are selected
              if (foodValues.length < 2) {
                alert('Please choose at least 2 foods.');
                return;
              }
          
              // Create a new table row and cells
              const row = document.createElement('tr');
              const firstNameCell = document.createElement('td');
              const lastNameCell = document.createElement('td');
              const addressCell = document.createElement('td');
              const pinCodeCell = document.createElement('td');
              const genderCell = document.createElement('td');
              const foodCell = document.createElement('td');
              const stateCell = document.createElement('td');
              const countryCell = document.createElement('td');
          
              // Set the text content of the cells to the form data
              firstNameCell.textContent = formData.get('firstName');
              lastNameCell.textContent = formData.get('lastName');
              addressCell.textContent = formData.get('address');
              pinCodeCell.textContent = formData.get('pinCode');
              genderCell.textContent = formData.get('gender');
              foodCell.textContent = foodValues.join(', ');
              stateCell.textContent = formData.get('state');
              countryCell.textContent = formData.get('country');
          
              // Append the cells to the row
              row.appendChild(firstNameCell);
              row.appendChild(lastNameCell);
              row.appendChild(addressCell);
              row.appendChild(pinCodeCell);
              row.appendChild(genderCell);
              row.appendChild(foodCell);
              row.appendChild(stateCell);
              row.appendChild(countryCell);
          
              // Append the row to the tbody
              tbody.appendChild(row);
          
              // Clear the form fields
              form.reset();
            }