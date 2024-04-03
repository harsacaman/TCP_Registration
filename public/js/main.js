//*** This code is copyright 2002-2003 by Gavin Kistner, gavin@refinery.com
//*** It is covered under the license viewable at http://phrogz.net/JS/_ReuseLicense.txt
//*** Reuse or modification is free provided you abide by the terms of that license.
//*** (Including the first two lines above in your source code satisfies the conditions.)

// Add a new stylesheet to the document;
// url [optional] A url to an external stylesheet to use
// idx [optional] The index in document.styleSheets to insert the new sheet before
function AddStyleSheet(url,idx){
	var css,before=null,head=document.getElementsByTagName("head")[0];

	if (document.createElement){
		if (url){
			css = document.createElement('link');
			css.rel  = 'stylesheet';
			css.href = url;
		} else css = document.createElement('style');
		css.media = 'all';
		css.type  = 'text/css';

		if (idx>=0){
			for (var i=0,ct=0,len=head.childNodes.length;i<len;i++){
				var el = head.childNodes[i];
				if (!el.tagName) continue;
				var tagName = el.tagName.toLowerCase();
				if (ct==idx){
					before = el;
					break;
				}
				if (tagName=='style' || tagName=='link' && (el.rel && el.rel.toLowerCase()=='stylesheet' || el.type && el.type.toLowerCase()=='text/css') ) ct++;
			}
		}
		head.insertBefore(css,before);

		return document.styleSheets[before?idx:document.styleSheets.length-1];
	} else return alert("I can't create a new stylesheet for you. Sorry.");
}
// e.g. var newBlankSheetAfterAllOthers = AddStyleSheet(); 
// e.g. var newBlankSheetBeforeAllOthers = AddStyleSheet(null,0);
// e.g. var externalSheetAfterOthers = AddStyleSheet('http://phrogz.net/JS/Classes/docs.css');
// e.g. var externalSheetBeforeOthers = AddStyleSheet('http://phrogz.net/JS/Classes/docs.css',0);


// Cross-browser method for inserting a new rule into an existing stylesheet.
// ss       - The stylesheet to stick the new rule in
// selector - The string value to use for the rule selector
// styles   - The string styles to use with the rule
function AddRule(ss,selector,styles){
	if (!ss) return false;
	if (ss.insertRule) return ss.insertRule(selector+' {'+styles+'}',ss.cssRules.length);
	if (ss.addRule){
		ss.addRule(selector,styles);
		return true;
	}
	return false;
}

// e.g. AddRule( document.styleSheets[0] , 'a:link' , 'color:blue; text-decoration:underline' );
// e.g. AddRule( AddStyleSheet() , 'hr' , 'display:none' );


document.addEventListener("DOMContentLoaded", function (event) {

	const showNavbar = (toggleId, navId, bodyId, headerId) => {
		const toggle = document.getElementById(toggleId),
			nav = document.getElementById(navId),
			bodypd = document.getElementById(bodyId),
			headerpd = document.getElementById(headerId)

		// Validate that all variables exist
		if (toggle && nav && bodypd && headerpd) {
			toggle.addEventListener('click', () => {
				// show navbar
				nav.classList.toggle('show')
				// change icon
				toggle.classList.toggle('bx-x')
				// add padding to body
				bodypd.classList.toggle('body-pd')
				// add padding to header
				headerpd.classList.toggle('body-pd')
			})
		}
	}

	showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

	/*===== LINK ACTIVE =====*/
	const linkColor = document.querySelectorAll('.nav_link')

	function colorLink() {
		if (linkColor) {
			linkColor.forEach(l => l.classList.remove('active'))
			this.classList.add('active')
		}
	}
	linkColor.forEach(l => l.addEventListener('click', colorLink))

	// Your code to run since DOM is loaded and ready
});



// Toggle the side navigation when window is resized below 480px
if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
	$("body").addClass("sidebar-toggled");
	$(".sidebar").addClass("toggled");
	$('.sidebar .collapse').collapse('hide');
};




// let button = document.getElementById('btn')
// button.onclick = function () {
// 	alert('hello daas')
// }
// Ensure the DOM is fully loaded before accessing elements
// document.addEventListener('DOMContentLoaded', function() {
//     // Get the form element
//     const myForm = document.getElementById('formData');

//     // Check if the form element exists
//     if (myForm) {
//         // Add event listener to the form
//         myForm.addEventListener('submit', async function(event) {
//             event.preventDefault(); // Prevent the form from submitting normally
            
//             // Get form data
//             const formData = new FormData(this);
// 			const dateOfdetection = formData.get('dateOfdetection');
//             const ownerName = formData.get('ownerName');
//             const ownerAddress = formData.get('ownerAddress');
//             const locationDetails = formData.get('locationDetails');
//             const siteArea = formData.get('siteArea');
//             const devPlan = formData.get('devPlan');
//             const oldFileId = formData.get('oldFileId');
//             const subJect = formData.get('subJect');
//             const formFile = formData.get('formFile');

//             try {
//                 // Send form data to server
//                 const response = await axios.post('/submit-form', {
//                     ownerName,
//                     ownerAddress,
//                     locationDetails,
//                     siteArea,
//                     devPlan,
//                     oldFileId,
//                     subJect,
//                     formFile
//                 });
                
//                 // Handle success response
//                 console.log(response.data);
//             } catch (error) {
//                 // Handle error
//                 console.error('Error:', error);
//             }
//         });
//     } else {
//         console.error("Form element with id 'formData' not found.");
//     }
// });
// main.js

// main.js

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('formData').addEventListener('submit', async (event) => {
//         event.preventDefault(); 
        
//         try {
//             // Retrieve form data
//             const dateOfDetection = document.getElementById('dateOfdetection').value;
//             const dateOfReport = document.getElementById('dateOfReport').value;
//             const district = document.getElementById('district').value;
//             const controlledArea = document.getElementById('controlledArea').value;
//             const urbanArea = document.getElementById('urbanArea').value;
//             const ownerName = document.getElementById('ownerName').value;
//             const ownerAddress = document.getElementById('ownerAddress').value;
//             const locationDetails = document.getElementById('locationDetails').value;
//             const areaOfSite = document.getElementById('areaOfsite').value;
//             const devPlan = document.getElementById('devPlan').value;
//             const oldFile = document.getElementById('oldFile').value;
//             const subject = document.getElementById('subJect').value;
            
//             // Prepare data to send in POST request
//             const formData = {
//                 DateOfDetection: dateOfDetection,
//                 DateOfReport: dateOfReport,
//                 DistrictID: district,
//                 ControlledArea: controlledArea,
//                 UrbanArea: urbanArea,
//                 OwnerName: ownerName,
//                 OwnerAddress: ownerAddress,
//                 LocationDetails: locationDetails,
//                 AreaOfSite: areaOfSite,
//                 DevelopmentPlan: devPlan,
//                 AttachmentFile: '', 
//                 Subject: subject
//             };

//             // Send POST request to API endpoint
//             const response = await axios.post('/submit-form', formData);

//             // Handle response
//             console.log(response.data); // Log response from API
//             // You can perform other actions based on the response if needed
            
//             // Optionally, redirect or display a success message to the user
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             // Handle errors, display error message, etc.
//         }
//     });
// });

//==================================This the Sumit data form Start=================================================
document.getElementById("formData").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const formData = new FormData(this);

    try {
        // Send a POST request to the server with form data
        const response = await axios.post("http://localhost:3000/api/submit-form", formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Ensure proper content type for FormData
            }
        });

        console.log(response.data); // Log the response from the server
		// alert("Your data has been submitted successfully!");
		Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your data has been submitted successfully!🫰🍀🍃🥰'
        });
        // Handle success (e.g., show a success message to the user)
    } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error (e.g., show an error message to the user)
		// alert("Your data was not submitted. Please try again.");
		Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Your data was not submitted. Please try again.🤷‍♂️🥱'
        });
    }
});

//==================================This the Sumit data form End=================================================
//==================================This the Sumit data GET form Start=================================================

  // Fetch data from API
  async function fetchData() {
    try {
        const response = await fetch('/api/getFormData');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// async function displayDataInTable() {
//     const data = await fetchData();

//     const tableBody = document.querySelector('#formData tbody');

//     data.forEach(entry => {
//         const row = document.createElement('tr');

//         // Loop through each property in the entry and create table cells
//         Object.values(entry).forEach(value => {
//             const cell = document.createElement('td');
//             cell.textContent = value ||0;
//             row.appendChild(cell);
//         });

//         tableBody.appendChild(row);
//     });
// }

// // Call the function to display data in the table
// displayDataInTable();

//==================================This the Sumit data GET form end=================================================

//==================================This the Sumit data EDITE AND DELETE form Start=================================================
// Function to delete data from the API
async function deleteDataFromAPI(UCID) {
    try {
        const response = await fetch(`/api/deleteFormData?UCID=${UCID}`, {
            method: 'DELETE'
        });
        const data = await response.text();
        console.log(data); // Log the response from the server
        return data;
    } catch (error) {
        console.error('Error deleting data:', error);
        return null;
    }
}

async function editDataThroughAPI(UCID, newData) {
    try {
        const response = await fetch(`/api/editFormData`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ UCID, ...newData }) // Ensure UCID is sent along with new data
        });
        const data = await response.text();
        console.log(data); // Log the response from the server
        return data;
    } catch (error) {
        console.error('Error editing data:', error);
        return null;
    }
}

async function seconddisplayDataInTable() {
    const data = await fetchData();
    const tableBody = document.querySelector('#formData tbody');

    data.forEach(entry => {
        const row = document.createElement('tr');
		
        // Loop through each property in the entry and create table cells
        Object.values(entry).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value || 0;
            row.appendChild(cell);
        });

        // Define and add Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-primary');

        // Add event listener to the Edit button
        editButton.addEventListener('click', async () => {
            console.log('Edit button clicked');
            // Implement editing functionality here
            const newData = {}; // New data for editing
            const editedData = await editDataThroughAPI(entry.UCID, newData);
            // Handle the response as needed
            console.log(editedData);
        });

        // Add Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.addEventListener('click', async () => {
            // Implement deletion functionality here
            const response = await deleteDataFromAPI(entry.UCID);
            // Handle the response as needed
            console.log(response);
        });

        // Create a cell for buttons and append Edit and Delete buttons
        const buttonCell = document.createElement('td');
        buttonCell.appendChild(editButton);
        buttonCell.appendChild(deleteButton);
        row.appendChild(buttonCell);

        tableBody.appendChild(row);
    });
}

// Call the function to display data in the table
seconddisplayDataInTable();








editButton.addEventListener('click', async () => {
    console.log('Edit button clicked');
    // Implement editing functionality here
    const newData = {}; // New data for editing
    const editedData = await editDataThroughAPI(entry.UCID, newData);
    // Handle the response as needed
    console.log(editedData);
});

deleteButton.addEventListener('click', async () => {
    console.log('Delete button clicked');
    // Implement deletion functionality here
    const response = await deleteDataFromAPI(entry.UCID);
    // Handle the response as needed
    console.log(response);
});

////////////////////////////////////////////////////////////////////////


function populateFormFields(data) {
	
    document.getElementById('dateOfdetection').value = data.DateOfDetection;
    document.getElementById('dateOfreport').value = data.DateOfReport;
    document.getElementById('DistrictID').value = data.DistrictID;
    document.getElementById('controlledArea').value = data.ControledArea;
    document.getElementById('urbanArea').value = data.UrbanArea;
    document.getElementById('ownerName').value = data.OwnerName;
    document.getElementById('ownerAddress').value = data.OwnerAddress;
    document.getElementById('locationDetails').value = data.LocationDetails;
    document.getElementById('areaOfsite').value = data.AreaOfSite;
    document.getElementById('devPlan').value = data.DevelopmentPlan;
    document.getElementById('oldFile').value = data.OldFileID;
    document.getElementById('subJect').value = data.Subject;
    // Assuming the file input cannot be populated for security reasons
}

// Modify the updateButton event listener
updateButton.addEventListener('click', async () => {
    // Get updated form data
    const updatedFormData = new FormData(document.getElementById('formData'));

    try {
        // Send a PUT request to the server with updated form data
        const response = await axios.put(`/api/editFormData?UCID=${entry.UCID}`, updatedFormData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Ensure proper content type for FormData
            }
        });

        console.log(response.data); // Log the response from the server
        // Show success message
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your data has been updated successfully! 🎉'
        });
        // Reload the table to reflect changes
        seconddisplayDataInTable();
        // Reset form fields
        document.getElementById('formData').reset();
        // Show the "Save" button again and hide the "Update" button
        document.getElementById('saveButton').style.display = 'block';
        document.getElementById('updateButton').style.display = 'none';
    } catch (error) {
        console.error("Error updating data:", error);
        // Show error message
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Your data was not updated. Please try again. 🤷‍♂️'
        });
    }
});


////////////////////////////////////////////////////////////////////////
//==================================This the Sumit data EDITE AND DELETE form Start=================================================
