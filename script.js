function checkPassword() {
  let password = document.querySelector('#password').value;
  let confirmPassword = document.querySelector('#confirm-password').value;
  let error = document.querySelector('#error');

  if (password == "" && confirmPassword == "") {
    return error.innerHTML = "*Password do not match";
  } else if (password !== confirmPassword) {
    return error.innerHTML = "*Password do not match";
  } else if (password === confirmPassword) {
    return error.innerHTML = "";
  }
}

let btn = document.querySelector("#create-account");

btn.addEventListener('click', checkPassword);
