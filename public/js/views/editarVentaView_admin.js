// js/views/editarVentaView_admin.js

export function getEditarVentaAdminHTML() {

    const productosVenta = [
        { nombre: 'Coca Cola 600ml',   cantidad: 3,  precio: '$15.00', subtotal: '$45.00',  stock: 42 },
        { nombre: 'Arroz 5kg',         cantidad: 2,  precio: '$52.00', subtotal: '$104.00', stock: 38 },
        { nombre: 'Aceite vegetal 1L', cantidad: 1,  precio: '$27.00', subtotal: '$27.00',  stock: 25 },
        { nombre: 'Frijol negro 1kg',  cantidad: 4,  precio: '$24.00', subtotal: '$96.00',  stock: 30 },
        { nombre: 'Energy Amper 450ml', cantidad: 2, precio: '$19.00', subtotal: '$38.00',  stock: 15 },
    ];

    const todosProductos = [
        { nombre: 'Cemento gris 50kg',     precio: '$185.00', stock: 10 },
        { nombre: 'Leche entera 1L',       precio: '$22.00',  stock: 18 },
        { nombre: 'Pan dulce surtido',     precio: '$6.00',   stock: 50 },
        { nombre: 'Jabón de barra',        precio: '$8.50',   stock: 60 },
        { nombre: 'Papel higiénico 4 rls', precio: '$32.00',  stock: 22 },
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
            <h2 class="h3 font-weight-bold mb-0">Editar Venta</h2>
            <p class="text-muted small">Tienda: María de Cruz</p>
        </div>

        <div class="row">

            <!-- ── Columna izquierda: productos de la venta ── -->
            <div class="col-lg-7 col-12 mb-4">
                <div class="stat-card p-3 mb-3">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="font-weight-bold mb-0">Productos en la Venta</h6>
                        <span class="badge badge-primary Redondear px-2">Venta #234</span>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-sm mb-0">
                            <thead>
                                <tr style="font-size:0.78rem; color:#0b3661;">
                                    <th>Producto</th>
                                    <th>Cant.</th>
                                    <th>Precio</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody style="font-size:0.82rem;">
                                ${productosVenta.map(p => `
                                <tr>
                                    <td class="font-weight-bold">${p.nombre}</td>
                                    <td>
                                        <input type="number" class="form-control form-control-sm text-center p-0"
                                            value="${p.cantidad}" min="1" max="${p.stock}"
                                            style="width:48px; font-size:0.78rem;">
                                    </td>
                                    <td style="color:#004F99;">${p.precio}</td>
                                    <td class="font-weight-bold">${p.subtotal}</td>
                                    <td>
                                        <button class="btn btn-sm btn-outline-danger p-1" title="Eliminar">
                                            <i class="fas fa-trash" style="font-size:0.7rem;"></i>
                                        </button>
                                    </td>
                                </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Agregar más productos -->
                <div class="stat-card p-3">
                    <h6 class="font-weight-bold mb-3">Agregar Productos</h6>
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
                                ${todosProductos.map(p => `
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

            <!-- ── Columna derecha: resumen ── -->
            <div class="col-lg-5 col-12 mb-4">
                <div class="stat-card p-3">
                    <h6 class="font-weight-bold mb-3">Carrito de Venta</h6>

                    <!-- Resumen items -->
                    ${productosVenta.map(p => `
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="small">${p.nombre} x${p.cantidad}</span>
                        <span class="small font-weight-bold" style="color:#004F99;">${p.subtotal}</span>
                    </div>`).join('')}

                    <hr class="my-2">

                    <!-- Totales -->
                    <div class="d-flex justify-content-between mb-1">
                        <span class="small text-muted">Subtotal:</span>
                        <span class="small font-weight-bold">$310.00</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span class="small font-weight-bold">Total:</span>
                        <span class="font-weight-bold" style="color:#004F99; font-size:1.1rem;">$310.00</span>
                    </div>

                    <!-- Método de pago -->
                    <div class="form-group mb-2">
                        <label class="small font-weight-bold mb-1">Método de pago</label>
                        <select class="form-control form-control-sm">
                            <option selected>Efectivo</option>
                            <option>Tarjeta</option>
                            <option>Transferencia</option>
                            <option>Crédito</option>
                        </select>
                    </div>

                    <!-- Vendedor -->
                    <div class="form-group mb-3">
                        <label class="small font-weight-bold mb-1">Vendedor</label>
                        <select class="form-control form-control-sm">
                            <option selected>María García</option>
                            <option>Carlos Ruiz</option>
                            <option>Ana Pérez</option>
                            <option>Luis Morales</option>
                        </select>
                    </div>

                    <button class="btn btn-primary btn-block Redondear font-weight-bold">
                        <i class="fas fa-save mr-2"></i>Guardar Cambios
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