function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let textarea = document.getElementById("textarea").value;

  if (name.length < 4) {
    alert("The name is too short");
    return;
  }
  if (email === "") {
    alert("E-mail is Empty!!");
    return;
  }
  if (textarea === "") {
    alert("Leave a message!!");
    return;
  }

  alert("Thank you. We'll get back to you.");
}
