document.addEventListener('DOMContentLoaded', (event) => {
    const registraForm = document.getElementById('registra');
    const loginForm = document.getElementById('login');


    const registraBtn = document.querySelector('.registration-button');
    const loginBtn = document.querySelector('.login-button');


    registraForm.style.display = 'none';
    loginForm.style.display = 'none';

    // Toggle the display of a form
    function toggleForm(form) {
        registraForm.style.display = 'none';
        loginForm.style.display = 'none';

        if (form) {
            form.style.display = 'block';
        }
    }

    registraBtn.addEventListener('click', () => toggleForm(registraForm));
    loginBtn.addEventListener('click', () => toggleForm(loginForm));

});