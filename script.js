const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");
const submitBtn = document.querySelector(".submit-btn");
const successMessage = document.getElementById("success-message");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function openModal() {
    modal.classList.add("show"); 
    successMessage.classList.add("hide"); 
    nameInput.value = ''; 
    emailInput.value = '';
}

function closeModal() {
    modal.classList.remove("show"); 
}

function handleSubmit() {
    if (nameInput.value === '' || emailInput.value === '') {
        alert("Please fill out all fields."); 
    } else {
        // Display success message
        successMessage.classList.remove("hide");
        successMessage.innerText = `Thank you, ${nameInput.value}! Your email ${emailInput.value} has been submitted.`;
        

        nameInput.value = '';
        emailInput.value = '';
    }
}

// Event listeners
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
submitBtn.addEventListener("click", handleSubmit);
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
