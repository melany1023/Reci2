document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const adminLoginForm = document.getElementById('adminLoginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const storedUser = JSON.parse(localStorage.getItem(email));

            if (storedUser && storedUser.password === password) {
                alert('Inicio de sesión exitoso!');
                window.location.href = 'welcome.html';
            } else {
                document.getElementById('loginError').textContent = 'Correo o contraseña incorrectos.';
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const existingUser = localStorage.getItem(email);

            if (existingUser) {
                document.getElementById('registerError').textContent = 'Ya existe un usuario con este correo.';
            } else {
                const user = {
                    username: document.getElementById('registerUsername').value,
                    email,
                    password
                };
                localStorage.setItem(email, JSON.stringify(user));
                alert('Registro exitoso!');
                window.location.href = 'login.html';
            }
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('adminEmail').value;
            const password = document.getElementById('adminPassword').value;

            const adminEmails = [
                'janer@reciadmin.com',
                'juliana@reciadmin.com',
                'melany@reciadmin.com',
                'jhoana@reciadmin.com',
                'janio@reciadmin.com'
            ];

            if (adminEmails.includes(email) && password === 'recisocial2024') {
                alert('Inicio de sesión de administrador exitoso!');
                window.location.href = 'admin_home.html';
            } else {
                document.getElementById('adminLoginError').textContent = 'Correo o contraseña de administrador incorrectos.';
            }
        });
    }
});
