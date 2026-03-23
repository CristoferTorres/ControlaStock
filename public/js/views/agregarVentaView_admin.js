// js/views/agregarVentaView_admin.js

export function getAgregarVentaAdminHTML() {

    const productos = [
        { nombre: 'Coca Cola 600ml',       precio: '$15.00', stock: 42 },
        { nombre: 'Cemento gris 50kg',     precio: '$185.00', stock: 10 },
        { nombre: 'Arroz 5kg',             precio: '$52.00', stock: 38 },
        { nombre: 'Aceite vegetal 1L',     precio: '$27.00', stock: 25 },
        { nombre: 'Frijol negro 1kg',      precio: '$24.00', stock: 30 },
        { nombre: 'Leche entera 1L',       precio: '$22.00', stock: 18 },
        { nombre: 'Pan dulce surtido',     precio: '$6.00',  stock: 50 },
        { nombre: 'Jabón de barra',        precio: '$8.50',  stock: 60 },
        { nombre: 'Papel higiénico 4 rls', precio: '$32.00', stock: 22 },
        { nombre: 'Energy Amper 450ml',    precio: '$19.00', stock: 15 },
    ];

    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Botón regreso -->
        <div class="mb-3">
            <button data-acceso="ventas" class="btn btn-outline-secondary btn-sm Redondear">
                <i class="fas fa-arrow-left mr-1"></i> Regresar a Ventas
            </button>
        </div>

        <!-- Título -->
        <div class="text-center mb-4">
            <h2 class="h3 font-weight-bold mb-0">Agregar Nueva Venta</h2>
            <p class="text-muted small">Tienda: María de Cruz</p>
        </div>

        <div class="row">

            <!-- ── Columna izquierda: productos ── -->
            <div class="col-lg-7 col-12 mb-4">
                <div class="stat-card p-3">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="font-weight-bold mb-0">Productos Disponibles</h6>
                        <div class="input-group input-group-sm" style="max-width:200px;">
                            <input type="text" class="form-control border-secondary" placeholder="Buscar producto...">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-sm table-hover mb-0">
                            <thead>
                                <tr style="font-size:0.78rem; color:#0b3661;">
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody style="font-size:0.82rem;">
                                ${productos.map(p => `
                                <tr>
                                    <td class="font-weight-bold">${p.nombre}</td>
                                    <td style="color:#004F99;">${p.precio}</td>
                                    <td class="${p.stock <= 10 ? 'text-danger' : 'text-muted'}">${p.stock}</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm Redondear px-2 py-0" style="font-size:0.72rem;">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </td>
                                </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- ── Columna derecha: carrito ── -->
            <div class="col-lg-5 col-12 mb-4">
                <div class="stat-card p-3 mb-3">
                    <h6 class="font-weight-bold mb-3">Carrito de Venta</h6>

                    <!-- Items del carrito (vacío por defecto) -->
                    <div id="carritoItems" class="mb-3">
                        <p class="text-muted small text-center py-3">
                            <i class="fas fa-shopping-cart fa-2x d-block mb-2" style="opacity:0.3;"></i>
                            Sin productos agregados
                        </p>
                    </div>

                    <hr class="my-2">

                    <!-- Totales -->
                    <div class="d-flex justify-content-between mb-1">
                        <span class="small text-muted">Subtotal:</span>
                        <span class="small font-weight-bold">$0.00</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span class="small font-weight-bold">Total:</span>
                        <span class="font-weight-bold" style="color:#004F99; font-size:1.1rem;">$0.00</span>
                    </div>

                    <!-- Método de pago -->
                    <div class="form-group mb-2">
                        <label class="small font-weight-bold mb-1">Método de pago</label>
                        <select class="form-control form-control-sm">
                            <option>Efectivo</option>
                            <option>Tarjeta</option>
                            <option>Transferencia</option>
                            <option>Crédito</option>
                        </select>
                    </div>

                    <!-- Vendedor -->
                    <div class="form-group mb-3">
                        <label class="small font-weight-bold mb-1">Vendedor</label>
                        <select class="form-control form-control-sm">
                            <option>María García</option>
                            <option>Carlos Ruiz</option>
                            <option>Ana Pérez</option>
                            <option>Luis Morales</option>
                        </select>
                    </div>

                    <button class="btn btn-primary btn-block Redondear font-weight-bold">
                        <i class="fas fa-check mr-2"></i>Confirmar Venta
                    </button>
                    <button data-acceso="ventas" class="btn btn-outline-secondary btn-block btn-sm Redondear mt-2">
                        Cancelar
                    </button>
                </div>
            </div>

        </div>
    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}