document.getElementById('login-button').addEventListener('click', function () {

    // Email Setting 
    const emailInput = document.getElementById('login-email');
    const userEmail = emailInput.value;

    // Password Setting 
    const passwordInput = document.getElementById('login-password');
    const userPassword = passwordInput.value;

    // Passwor Setup 
    if (userEmail == 'j.n.erfan420@gmail.com' && userPassword == 'imerfan') {
        window.location.href = 'ourbank.html';
        alert(" Login Sucsecfull. Click OK ")
    }

    else if (userEmail != 'j.n.erfan420@gmail.com' && userPassword == 'imerfan') {
        alert('Your Email Is Incorect. Please Enter Valid Email.')
    }

    else if (userEmail == 'j.n.erfan420@gmail.com' && userPassword != 'imerfan') {
        alert('Your Password Is Incorect. Please Enter Valid Password.')
    }

    else {
        alert('Please Enter Valid Email And Password.')
    }
})