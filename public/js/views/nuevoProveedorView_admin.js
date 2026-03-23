// js/views/nuevoProveedorView_admin.js

export function getNuevoProveedorAdminHTML() {
    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Botón regreso -->
        <div class="mb-3">
            <button data-acceso="proveedores" class="btn btn-outline-secondary btn-sm Redondear">
                <i class="fas fa-arrow-left mr-1"></i> Regresar a Proveedores
            </button>
        </div>

        <!-- Título -->
        <div class="mb-4">
            <h2 class="h3 font-weight-bold mb-0">Agregar Nuevo Proveedor</h2>
            <p class="small text-muted mb-0">Miércoles, 19 de Noviembre 2025 &bull; 14:33 PM</p>
        </div>

        <!-- Formulario -->
        <div class="stat-card p-4 mb-4" style="max-width:680px;">

            <h6 class="font-weight-bold mb-4" style="color:#004F99;">
                <i class="fas fa-address-card mr-2"></i> Información de Contacto
            </h6>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="small font-weight-bold">Nombre de la Empresa</label>
                    <input type="text" class="form-control" placeholder="">
                </div>
                <div class="form-group col-md-6">
                    <label class="small font-weight-bold">Email</label>
                    <input type="email" class="form-control" placeholder="">
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label class="small font-weight-bold">Teléfono</label>
                    <input type="tel" class="form-control" placeholder="">
                </div>
                <div class="form-group col-md-6">
                    <label class="small font-weight-bold">Nombre del Contacto</label>
                    <input type="text" class="form-control" placeholder="">
                </div>
            </div>

            <div class="form-group">
                <label class="small font-weight-bold">Email</label>
                <input type="email" class="form-control" placeholder="">
            </div>

            <div class="d-flex justify-content-between mt-4">
                <button data-acceso="proveedores" class="btn btn-outline-secondary Redondear px-4">
                    Cancelar
                </button>
                <button class="btn btn-success Redondear font-weight-bold px-4">
                    Guardar Proveedor
                </button>
            </div>

        </div>

    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}