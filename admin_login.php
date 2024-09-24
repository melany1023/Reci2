<?php
session_start();

$adminEmails = [
    'janer@reciadmin.com',
    'juliana@reciadmin.com',
    'melany@reciadmin.com',
    'jhoana@reciadmin.com',
    'janio@reciadmin.com'
];

$adminPassword = 'recisocial2024';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (in_array($email, $adminEmails) && $password === $adminPassword) {
        // Successful admin login
        $_SESSION['admin'] = $email;
        header('Location: admin_dashboard.php'); // Redirect to admin dashboard or main page
        exit;
    } else {
        // Invalid login attempt
        $error = 'Correo o contraseña incorrectos.';
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de Sesión Administrador - Recisocial</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="form-container">
            <div class="icon">
                <img src="admin.jpg" alt="Admin Icon">
            </div>
            <h2>Inicio de Sesión Administrador</h2>
            <form id="adminLoginForm" action="admin_login.php" method="POST">
                <?php if (isset($error)): ?>
                    <p style="color: red;"><?php echo $error; ?></p>
                <?php endif; ?>
                <input type="email" id="adminEmail" name="email" placeholder="Correo Electrónico" required>
                <input type="password" id="adminPassword" name="password" placeholder="Contraseña" required>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
        <p class="toggle-link"><a href="login.html">¿No eres administrador? Inicia sesión aquí</a></p>
    </div>
</body>
</html>
