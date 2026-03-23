// js/views/inventarioView_admin.js

export function getInventarioAdminHTML() {

    const alertasStock = [
        { nombre: 'Coca Cola 600ml',   detalle: 'Stock Bajo: 8 uds en Coca Cola 600ml. Min. recomendado: 20 uds. Considera reabastecer.', tipo: 'danger'  },
        { nombre: 'Arroz 5kg',         detalle: 'Stock Bajo: 5 uds en Arroz 5kg. Min. recomendado: 15 uds. Considera reabastecer.',        tipo: 'warning' },
        { nombre: 'Pintura blanca 1L', detalle: 'Stock Bajo: 3 uds en Pintura blanca 1L. Min. recomendado: 10 uds. Considera reabastecer.', tipo: 'danger'  },
    ];

    const productosStockBajo = [
        { codigo: 'P-0012', producto: 'Coca Cola 600ml',    categoria: 'Bebidas',    stock: 8,  minimo: 20, precio: '$15.00' },
        { codigo: 'P-0034', producto: 'Arroz 5kg',          categoria: 'Abarrotes',  stock: 5,  minimo: 15, precio: '$52.00' },
        { codigo: 'P-0078', producto: 'Pintura blanca 1L',  categoria: 'Ferretería', stock: 3,  minimo: 10, precio: '$27.00' },
        { codigo: 'P-0091', producto: 'Cemento gris 50kg',  categoria: 'Ferretería', stock: 10, minimo: 15, precio: '$185.00'},
        { codigo: 'P-0102', producto: 'Energy Amper 450ml', categoria: 'Bebidas',    stock: 7,  minimo: 20, precio: '$19.00' },
    ];

    const proveedores = [
        { nombre: 'Distribuidora Hidalgo Hermanos', productos: 12, contacto: '+52 755 123 4567' },
        { nombre: 'Abarrotes del Sur S.A.',         productos: 8,  contacto: '+52 755 234 5678' },
        { nombre: 'Ferretera Zúñiga Asociados',     productos: 15, contacto: '+52 755 345 6789' },
        { nombre: 'Refrescos y Bebidas del Pacífico', productos: 6, contacto: '+52 755 456 7890' },
    ];

    const movimientos = [
        { id: '#M-2026-045', fecha: '23/01/2026', producto: 'Coca Cola 600ml',   tipo: 'Salida',  cantidad: '12u', balance: '-12' },
        { id: '#M-2026-044', fecha: '23/01/2026', producto: 'Arroz 5kg',         tipo: 'Entrada', cantidad: '20u', balance: '+20' },
        { id: '#M-2026-043', fecha: '22/01/2026', producto: 'Cemento gris 50kg', tipo: 'Salida',  cantidad: '5u',  balance: '-5'  },
        { id: '#M-2026-042', fecha: '22/01/2026', producto: 'Pintura blanca 1L', tipo: 'Salida',  cantidad: '3u',  balance: '-3'  },
        { id: '#M-2026-041', fecha: '21/01/2026', producto: 'Arroz 5kg',         tipo: 'Entrada', cantidad: '10u', balance: '+10' },
    ];

    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Título -->
        <div class="text-center mb-4">
            <h2 class="h3 font-weight-bold mb-0">Gestión de Inventario</h2>
            <p class="text-muted small">Administra tu stock de forma eficiente</p>
        </div>

        <!-- ── Stats ── -->
        <div class="row mb-4">
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3 text-center">
                    <i class="fas fa-boxes fa-2x mb-2" style="color:#004F99;opacity:0.8;"></i>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">1,248</h3>
                    <p class="small text-muted mb-0">Total Productos</p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3 text-center">
                    <i class="fas fa-shopping-cart fa-2x mb-2" style="color:#004F99;opacity:0.8;"></i>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">40,892</h3>
                    <p class="small text-muted mb-0">Stock Total</p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3 text-center">
                    <i class="fas fa-exclamation-triangle fa-2x mb-2 text-warning" style="opacity:0.8;"></i>
                    <h3 class="h4 font-weight-bold mb-0 text-danger">22</h3>
                    <p class="small text-muted mb-0">Alertas de Stock</p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3 text-center">
                    <i class="fas fa-truck fa-2x mb-2" style="color:#004F99;opacity:0.8;"></i>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">7</h3>
                    <p class="small text-muted mb-0">Proveedores</p>
                </div>
            </div>
        </div>

        <!-- ── Botones de acción ── -->
        <div class="d-flex justify-content-center flex-wrap mb-4" style="gap:.75rem;">
            <button data-acceso="agregarProducto" class="btn btn-primary Redondear font-weight-bold px-3">
                <i class="fas fa-plus mr-2"></i>Agregar Producto
            </button>
        </div>

        <!-- Ver inventario -->
        <div class="text-center mb-4">
            <button data-acceso="alertasStock" class="btn btn-outline-info Redondear px-4">
                <i class="fas fa-list mr-2"></i>Ver Inventario
            </button>
        </div>

        <div class="row">

            <!-- ── Columna izquierda ── -->
            <div class="col-lg-8 col-12">

                <!-- Alertas de Stock -->
                <div class="stat-card p-3 mb-4">
                    <h5 class="font-weight-bold mb-3">
                        <i class="fas fa-exclamation-triangle text-warning mr-2"></i> Alertas de Stock
                    </h5>
                    ${alertasStock.map(a => `
                    <div class="alert alert-${a.tipo} py-2 px-3 mb-2" style="font-size:0.82rem; border-radius:8px;">
                        <strong>${a.nombre}:</strong> ${a.detalle}
                    </div>`).join('')}
                    <div class="text-center mt-2">
                        <button class="btn btn-outline-secondary btn-sm Redondear">
                            Ver todas las Alertas
                        </button>
                    </div>
                </div>

                <!-- Productos con Stock Bajo -->
                <div class="stat-card p-3 mb-4">
                    <h5 class="font-weight-bold mb-3">
                        <i class="fas fa-boxes text-primary mr-2"></i> Productos con Stock Bajo
                    </h5>
                    <div class="table-responsive">
                        <table class="table table-sm table-hover mb-0">
                            <thead>
                                <tr style="font-size:0.78rem; color:#0b3661;">
                                    <th>Código</th>
                                    <th>Producto</th>
                                    <th>Categoría</th>
                                    <th>Stock</th>
                                    <th>Mínimo</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody style="font-size:0.82rem;">
                                ${productosStockBajo.map(p => `
                                <tr>
                                    <td class="text-muted">${p.codigo}</td>
                                    <td class="font-weight-bold">${p.producto}</td>
                                    <td>${p.categoria}</td>
                                    <td class="font-weight-bold text-danger">${p.stock}</td>
                                    <td class="text-muted">${p.minimo}</td>
                                    <td style="color:#004F99;">${p.precio}</td>
                                </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                    <div class="text-center mt-3">
                        <button data-acceso="productosBajos" class="btn btn-outline-secondary btn-sm Redondear">
                            Ver todos los Productos
                        </button>
                    </div>
                </div>

                <!-- Movimientos Recientes -->
                <div class="stat-card p-3 mb-4">
                    <h5 class="font-weight-bold mb-3">
                        <i class="fas fa-history text-primary mr-2"></i> Movimientos Recientes
                    </h5>
                    <div class="table-responsive">
                        <table class="table table-sm table-hover mb-0">
                            <thead>
                                <tr style="font-size:0.78rem; color:#0b3661;">
                                    <th>ID</th>
                                    <th>Fecha</th>
                                    <th>Producto</th>
                                    <th>Tipo</th>
                                    <th>Cantidad</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody style="font-size:0.82rem;">
                                ${movimientos.map(m => `
                                <tr>
                                    <td class="font-weight-bold" style="color:#004F99;">${m.id}</td>
                                    <td class="text-muted">${m.fecha}</td>
                                    <td>${m.producto}</td>
                                    <td>
                                        <span class="badge Redondear px-2" style="font-size:0.7rem; background:${m.tipo === 'Entrada' ? '#d4edda; color:#155724' : '#f8d7da; color:#721c24'};">
                                            ${m.tipo}
                                        </span>
                                    </td>
                                    <td>${m.cantidad}</td>
                                    <td class="font-weight-bold" style="color:${m.balance.startsWith('+') ? '#28a745' : '#dc3545'};">${m.balance}</td>
                                </tr>`).join('')}
                            </tbody>
                        </table>
                    </div>
                    <div class="text-center mt-3">
                        <button class="btn btn-outline-secondary btn-sm Redondear">
                            Ver todos los Movimientos
                        </button>
                    </div>
                </div>

            </div>

            <!-- ── Columna derecha ── -->
            <div class="col-lg-4 col-12">

                <!-- Acceso Rápido -->
                <div class="stat-card p-3 mb-4">
                    <h6 class="font-weight-bold mb-3 text-uppercase small text-muted">Acceso Rápido</h6>
                    <a href="#" class="acceso-btn" data-acceso="ventas">
                        <i class="fas fa-cash-register"></i> Ventas
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="empleados">
                        <i class="fas fa-user-tie"></i> Empleados
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="actividad">
                        <i class="fas fa-history"></i> Actividad
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="dashboard">
                        <i class="fas fa-th-large"></i> Dashboard
                    </a>
                </div>

                <!-- Proveedores -->
                <div class="stat-card p-3 mb-4">
                    <h6 class="font-weight-bold mb-3 text-uppercase small text-muted">Proveedores</h6>
                    ${proveedores.map(p => `
                    <div class="d-flex align-items-start mb-3">
                        <i class="fas fa-truck mt-1 mr-2" style="color:#004F99; font-size:0.85rem; flex-shrink:0;"></i>
                        <div>
                            <p class="mb-0 small font-weight-bold">${p.nombre}</p>
                            <p class="mb-0 tiempo">${p.productos} productos &bull; ${p.contacto}</p>
                        </div>
                    </div>`).join('')}
                    <div class="text-center mt-2">
                        <button class="btn btn-outline-secondary btn-sm btn-block Redondear">
                            Ver Proveedores Principales
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}