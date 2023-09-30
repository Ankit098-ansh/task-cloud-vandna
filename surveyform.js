// var modal = document.getElementById('');
var submitBtnS = document.getElementById("submitBtn");
var closeBtn = document.getElementById("close");
var modalcontent = document.getElementById("modalContent");
var resetBtn = document.querySelector(".resset-btn");

const form = document.getElementById("surveyForm");

form.addEventListener("submit", handleSubmit);

// ---------------function for validation------------*

function handleSubmit() {
  // e.preventDefault();

  // get the fields
  const nameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const dateofbirth = document.getElementById("dob");
  const countries = document.getElementById("country");
  const malegender = document.getElementById("male");
  const femalegender = document.getElementById("female");
  const othergender = document.getElementById("other");
  const professions = document.getElementById("profession");
  const email = document.getElementById("email");
  const mobileno = document.getElementById("mobile");

  // now get the values

  const namevalue = nameField.value.trim();
  const lastnameValue = lastNameField.value.trim();
  const dobvlaue = dateofbirth.value.trim();
  const countriesvalue = countries.value.trim();
  const malegendervalue = malegender.checked; // Check if the male radio button is selected
  const femalegendervalue = femalegender.checked; // Check if the female radio button is selected
  const othergendervalue = othergender.checked; //
  const profilesvalue = professions.value.trim();
  const emailvalue = email.value.trim();
  const mobilevalue = mobileno.value.trim();

  let hasErrors = false;

  if (namevalue === "") {
    alert("Name is required");
    nameField.focus(); // Set focus to the field
    hasErrors = true;
    return false;
  }

  if (lastnameValue === "") {
    alert("last name is required");
    lastNameField.focus(); // Set focus to the field
    hasErrors = true;
    return false;
  }

  if (dobvlaue === "") {
    alert("date of birth is required");
    dateofbirth.focus(); // Set focus to the field
    hasErrors = true;
    return false;
  }

  if (countriesvalue === "") {
    alert("country is required");
    countries.focus(); // Set focus to the field
    hasErrors = true;
    return false;
  }

  if (!(malegendervalue || femalegendervalue || othergendervalue)) {
    alert("Gender is required");
    hasErrors = true;
    return false;
  }

  if (profilesvalue === "") {
    alert("profession  is required");
    professions.focus(); // Set focus to the field
    hasErrors = true;
    return false;
  }
  if (emailvalue === "") {
    alert("email  is required");
    email.focus(); // Set focus to the field
    hasErrors = true;
    return false;
  }

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  if (!isValidEmail(emailvalue)) {
    alert("Invalid email format");
    email.focus();
    hasErrors = true;
    return false;
  }

  if (mobilevalue === "") {
    alert("Mobile is required");
    mobileno.focus(); // Set focus to the field
    hasErrors = true;
    return false;
  }

  if (hasErrors) {
    return;
  }

  submitForm();
}

// --------------------------function not open modal when there validation--------------
function submitForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var dateofbirth = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var other = document.getElementById("other");
  var profession = document.getElementById("profession").value;
  var emails = document.getElementById("email").value;
  var mobiles = document.getElementById("mobile").value;

  var selectedGender = "";
  if (male.checked) {
    selectedGender = male.value;
  } else if (female.checked) {
    selectedGender = female.value;
  } else if (other.checked) {
    selectedGender = other.value;
  }

  var formdatahtml = `
    <span id="close" onclick="closeModal()">&times;</span>
    <h2 id="heading">Form Data</h2>
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Date of Birth:</strong> ${dateofbirth}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Gender:</strong> ${selectedGender}</p>
    <p><strong>Profession:</strong> ${profession}</p>
    <p><strong>Email:</strong> ${emails}</p>
    <p><strong>Mobile:</strong> ${mobiles}</p>
    <button class="resset-btn" onclick="resetModal()">Reset</button>
  `;

  document.getElementById("modalContent").innerHTML = formdatahtml;
  modalcontent.style.display = "block";
}

// --------------------funcyionality for reset button-----------------------
resetBtn.addEventListener("click", function () {
  // Clear form fields
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("country").value = "";

  // Clear gender selection by setting each radio button's checked property to false
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("other").checked = false;

  document.getElementById("profession").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";

  // Hide the modal (if it's open)
  modalcontent.style.display = "none";
});

// --------------------------function for submit button-------------------
submitBtnS.onclick = function (e) {
  e.preventDefault(); // Prevent the form from submitting
  if (!handleSubmit()) {
    return;
  }

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var dateofbirth = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  var other = document.getElementById("other");
  var profession = document.getElementById("profession").value;
  var emails = document.getElementById("email").value;
  var mobiles = document.getElementById("mobile").value;
  // var haedings=document.getElementById('heading').value;

  var selectedGender = "";
  if (male.checked) {
    selectedGender = male.value;
  } else if (female.checked) {
    selectedGender = female.value;
  } else if (other.checked) {
    selectedGender = other.value;
  }

  var formdatahtml = `

    <span id="close" onclick="closeModal()">&times;</span>
    <h2 id="heading">Form Data</h2
   <p><strong>First Name:</strong> ${firstName}</p
   <p><strong>last Name:</strong> ${lastName}</p
   <p><strong>date of birth:</strong> ${dateofbirth}</p
   <p><strong>country:</strong> ${country}</p
   <p><strong>Gender:</strong> ${selectedGender}</p
   <p><strong>Profession:</strong> ${profession}</p
   <p><strong>Email:</strong> ${emails}</p
   <p><strong>Mobile:</strong> ${mobiles}</p
   <button class="resset-btn" onclick="resetModal()">Reset</button>
   `;

  document.getElementById("modalContent").innerHTML = formdatahtml;

  modalcontent.style.display = "block";
};

// ------------------function for close cross spamm button--------------
function closeModal() {
  modalcontent.style.display = "none";
}

// -----------------------function for reset but modal-----------------------
function resetModal() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("country").value = "";

  // Clear gender selection by setting each radio button's checked property to false
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("other").checked = false;

  document.getElementById("profession").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";

  // Clear the modal content

  var formdatahtml = `
        <span id="close" onclick="closeModal()">&times;</span>
        <h2 id="heading">Form Data</h2>
        <p><strong>First Name:</strong></p>
        <p><strong>Last Name:</strong></p>
        <p><strong>Date of Birth:</strong></p>
        <p><strong>Country:</strong></p>
        <p><strong>Gender:</strong></p>
        <p><strong>Profession:</strong></p>
        <p><strong>Email:</strong></p>
        <p><strong>Mobile:</strong></p>
    `;

  document.getElementById("modalContent").innerHTML = formdatahtml;
}

window.onclick = function (event) {
  if (event.target == modalcontent) {
    modalcontent.style.display = "none";
  }
};
