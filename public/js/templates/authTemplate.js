// js/templates/authTemplate.js

export const authTemplate = {

    login: `
        <a href="../index.html" class="d-block text-muted small mb-3">
            <i class="fas fa-arrow-left mr-1"></i> Volver al inicio
        </a>
        <div class="auth-card">
            <div class="text-center mb-4">
                <div class="logo-box Redondear">
                    <img src="../img/logoPrincipal.png" class="logo-login" alt="Logo ControlaStock">
                </div>
                <h1 class="h5 font-weight-bold colorTextAz hero-titulo">ControlaStock</h1>
                <p class="text-muted small mb-0 hero-subtitulo">Inicia sesión para continuar</p>
            </div>
            <form id="formLogin">
                <div class="form-group">
                    <label for="usuario">Usuario</label>
                    <input type="text" class="form-control" id="usuario" name="usuario"
                        placeholder="Ingresa tu usuario" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" class="form-control" id="password" name="password"
                        placeholder="Ingresa tu contraseña" minlength="6" required>
                </div>
                <div class="form-group d-flex justify-content-between align-items-center">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="recordarme">
                        <label class="custom-control-label text-muted small" for="recordarme">Recordarme</label>
                    </div>
                    <a href="#" class="colorTextAz small">¿Olvidaste tu contraseña?</a>
                </div>
                <button type="submit" class="btn colorQui text-white btn-block Redondear font-weight-bold mt-2">
                    Iniciar Sesión
                </button>
            </form>
            <p class="text-center text-muted small mt-4 mb-0">
                ¿No tienes cuenta?
                <a href="#" id="irRegistro" class="colorTextAz font-weight-bold">Regístrate</a>
            </p>
        </div>
    `,

    register: `
        <a href="../index.html" class="d-block text-muted small mb-3">
            <i class="fas fa-arrow-left mr-1"></i> Volver al inicio
        </a>
        <div class="auth-card">
            <div class="text-center mb-4">
                <div class="logo-box Redondear">
                    <img src="../img/logoPrincipal.png" class="logo-login" alt="Logo ControlaStock">
                </div>
                <h1 class="h5 font-weight-bold colorTextAz hero-titulo">ControlaStock</h1>
                <p class="text-muted small mb-0 hero-subtitulo">Crea tu cuenta gratis</p>
            </div>
            <form id="formRegistro">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre"
                            placeholder="Tu nombre" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="apellido">Apellido</label>
                        <input type="text" class="form-control" id="apellido" name="apellido"
                            placeholder="Tu apellido" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" class="form-control" id="email" name="email"
                        placeholder="correo@ejemplo.com" required>
                </div>
                <div class="form-group">
                    <label for="usuario">Usuario</label>
                    <input type="text" class="form-control" id="usuario" name="usuario"
                        placeholder="Elige un nombre de usuario" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <input type="password" class="form-control" id="password" name="password"
                        placeholder="Mínimo 6 caracteres" minlength="6" required>
                </div>
                <div class="form-group">
                    <label for="confirmarPassword">Confirmar contraseña</label>
                    <input type="password" class="form-control" id="confirmarPassword" name="confirmarPassword"
                        placeholder="Repite tu contraseña" minlength="6" required>
                </div>
                <button type="submit" class="btn colorQui text-white btn-block Redondear font-weight-bold mt-2">
                    Crear cuenta
                </button>
            </form>
            <p class="text-center text-muted small mt-4 mb-0">
                ¿Ya tienes cuenta?
                <a href="#" id="irLogin" class="colorTextAz font-weight-bold">Inicia sesión</a>
            </p>
        </div>
    `
};