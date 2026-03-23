// js/views/agregarProductoView_admin.js

export function getAgregarProductoAdminHTML() {
    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Botón regreso -->
        <div class="mb-3">
            <button data-acceso="inventario" class="btn btn-outline-secondary btn-sm Redondear">
                <i class="fas fa-arrow-left mr-1"></i> Regresar a Inventario
            </button>
        </div>

        <!-- Título -->
        <div class="text-center mb-4">
            <h2 class="h3 font-weight-bold mb-0">Agregar Nuevo Producto</h2>
            <p class="text-muted small">Agrega todos los datos del nuevo producto a tu inventario</p>
        </div>

        <div class="stat-card p-4 mb-4" style="max-width:680px; margin:0 auto;">

            <!-- Información del Producto -->
            <div class="mb-4">
                <h6 class="font-weight-bold mb-3" style="color:#004F99;">
                    <i class="fas fa-tag mr-2"></i> Información del Producto
                </h6>
                <div class="form-group">
                    <label class="small font-weight-bold">Nombre del Producto</label>
                    <input type="text" class="form-control" placeholder="Ej: Coca Cola 600ml">
                </div>
                <div class="form-group">
                    <label class="small font-weight-bold">Descripción</label>
                    <textarea class="form-control" rows="2" placeholder="Agrega una descripción breve sobre el producto (opcional)"></textarea>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="small font-weight-bold">Categoría</label>
                        <select class="form-control">
                            <option value="">Seleccionar categoría</option>
                            <option>Bebidas</option>
                            <option>Abarrotes</option>
                            <option>Ferretería</option>
                            <option>Limpieza</option>
                            <option>Lácteos</option>
                            <option>Panadería</option>
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="small font-weight-bold">Proveedor</label>
                        <select class="form-control">
                            <option value="">Seleccionar proveedor</option>
                            <option>Distribuidora Hidalgo Hermanos</option>
                            <option>Abarrotes del Sur S.A.</option>
                            <option>Ferretera Zúñiga Asociados</option>
                            <option>Refrescos y Bebidas del Pacífico</option>
                        </select>
                    </div>
                </div>
            </div>

            <hr>

            <!-- Precios -->
            <div class="mb-4">
                <h6 class="font-weight-bold mb-3" style="color:#004F99;">
                    <i class="fas fa-dollar-sign mr-2"></i> Precios
                </h6>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="small font-weight-bold">Precio de Compra</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="number" class="form-control" placeholder="0.00" min="0" step="0.01">
                        </div>
                    </div>
                    <div class="form-group col-md-6">
                        <label class="small font-weight-bold">Precio de Venta</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="number" class="form-control" placeholder="0.00" min="0" step="0.01">
                        </div>
                    </div>
                </div>
            </div>

            <hr>

            <!-- Control de Inventario -->
            <div class="mb-4">
                <h6 class="font-weight-bold mb-3" style="color:#004F99;">
                    <i class="fas fa-boxes mr-2"></i> Control de Inventario
                </h6>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label class="small font-weight-bold">Stock Actual</label>
                        <input type="number" class="form-control" placeholder="0" min="0">
                    </div>
                    <div class="form-group col-md-6">
                        <label class="small font-weight-bold">Stock Mínimo</label>
                        <input type="number" class="form-control" placeholder="0" min="0">
                    </div>
                </div>
                <div class="form-group">
                    <label class="small font-weight-bold">Unidad de Medida</label>
                    <select class="form-control">
                        <option value="">Seleccionar unidad...</option>
                        <option>Pieza</option>
                        <option>Caja</option>
                        <option>Paquete</option>
                        <option>Kilogramo</option>
                        <option>Litro</option>
                        <option>Rollo</option>
                    </select>
                </div>
            </div>

            <!-- Botones -->
            <div class="d-flex justify-content-between">
                <button data-acceso="inventario" class="btn btn-outline-secondary Redondear px-4">
                    Cancelar
                </button>
                <button class="btn btn-primary Redondear font-weight-bold px-4">
                    <i class="fas fa-save mr-2"></i>Guardar Producto
                </button>
            </div>

        </div>
    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}