
function validateForm(event){
    event.preventDefault() //prevent from submitting the form!!!!!
    // username için
    const username = document.getElementById('username').value;
    // şifre için
    const password = document.getElementById('password').value;
    // email için
    const email = document.getElementById('email').value;
    //
    let checkbox =document.getElementById('cb')

    const usernameErrMsg = validateUserName(username)
    const passwordErrMsg = validatePassword(password,8)
    const emailErrMsg = validateEmail(email) 
    const cbErrMsg = validateCheckbox(checkbox) 

    console.log(username)
    console.log(password)
    console.log(email)

    if (usernameErrMsg) {

        const usernameErrMsgEl = document.querySelector('.username .error-message');
        usernameErrMsgEl.innerHTML = usernameErrMsg;
    }

    if (emailErrMsg) {
        // select the email form field message element
        const emailErrMsgEl = document.querySelector('.email .error-message');
        // show email error message to user
        emailErrMsgEl.innerHTML = emailErrMsg;
    }

    if (passwordErrMsg) {

        const passwordErrMsgEl = document.querySelector('.password .error-message');
        passwordErrMsgEl.innerHTML = passwordErrMsg;
    }
    if (cbErrMsg) {

      const cbErrMsgEl = document.querySelector('.cb .error-message');
      cbErrMsgEl.innerHTML = cbErrMsg;
  }
}

function validateUserName(username) {
    if (!username) return 'Username is required';
    return '';
}

function validatePassword(password, minlength) {
    if (!password) return 'Password is required';
  
    if (password.length < minlength) {
      return `Please enter a password that's at least ${minlength} characters long`;
    }
  
    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
      return 'Please use at least one capital letter.';
    }
  
    const hasNumber = /\d/;
    if (!hasNumber.test(password)) {
      return 'Please use at least one number.';
    }
  
    return '';
}

function validateEmail(email) {
    if (!email) return 'Email is required';
      
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
      return 'Please enter a valid email';
    }
  
    return '';
}
function validateCheckbox(checkbox) {
    if (!checkbox.checked) return 'Checkbox is required';
    return '';
}
//validateForm();