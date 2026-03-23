// js/views/reabastecerProveedorView_admin.js

export function getReabastecerProveedorAdminHTML() {

    const productos = [
        { nombre: 'Coca Cola 600ml',    desc: '600 ml / Unidad',         precio: '$15' },
        { nombre: 'Coca Cola 1L',       desc: '500 ml / Unidad',         precio: '$25' },
        { nombre: 'Coca Cola 2L',       desc: 'Refresco / Unidad',       precio: '$72' },
        { nombre: 'Coca Cola 3L',       desc: 'Refresco de 3 litros',    precio: '$5'  },
        { nombre: 'Sprite 600ml',       desc: 'Refresco / Unidad',       precio: '$3'  },
        { nombre: 'Energy Amper 450ml', desc: 'Bebida energética',       precio: '$20' },
    ];

    const carrito = [
        { nombre: 'Coca Cola 600ml', cantidad: 1, precio: '$15.00' },
        { nombre: 'Coca Cola 600ml', cantidad: 1, precio: '$15.00' },
        { nombre: 'Coca Cola 1L',    cantidad: 1, precio: '$15.00' },
    ];

    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Botón regreso -->
        <div class="mb-3">
            <button data-acceso="proveedores" class="btn btn-outline-secondary btn-sm Redondear">
                <i class="fas fa-arrow-left mr-1"></i> Regresar a Proveedores
            </button>
        </div>

        <!-- Título + stats del proveedor -->
        <div class="text-center mb-2">
            <h2 class="h3 font-weight-bold mb-1">Coca-Cola FEMSA</h2>
            <p class="text-muted small mb-3">Selecciona los productos que deseas agregar a tu orden de reabastecimiento</p>
            <div class="d-inline-flex flex-wrap justify-content-center" style="gap:1.5rem;">
                <span class="small"><strong style="color:#004F99;">145</strong> <span class="text-muted">Productos disponibles</span></span>
                <span class="badge badge-success Redondear px-3 py-1">Activo</span>
                <span class="small text-muted">+52 755 123 4567</span>
            </div>
        </div>

        <div class="row mt-4">

            <!-- ── Columna izquierda: catálogo ── -->
            <div class="col-lg-7 col-12 mb-4">
                <div class="stat-card p-3">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="font-weight-bold mb-0">Catálogo de Productos</h6>
                        <div class="input-group input-group-sm" style="max-width:180px;">
                            <input type="text" class="form-control border-secondary" placeholder="Buscar producto...">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-sm table-hover mb-0">
                            <tbody style="font-size:0.85rem;">
                                ${productos.map(p => `
                                <tr>
                                    <td>
                                        <p class="mb-0 font-weight-bold">${p.nombre}</p>
                                        <p class="mb-0 text-muted" style="font-size:0.75rem;">${p.desc}</p>
                                    </td>
                                    <td class="text-right font-weight-bold" style="color:#004F99; vertical-align:middle;">
                                        ${p.precio}
                                    </td>
                                    <td class="text-right" style="vertical-align:middle;">
                                        <button class="btn btn-primary btn-sm Redondear px-2 py-0" style="font-size:0.75rem;">
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
                <div class="stat-card p-3">
                    <h6 class="font-weight-bold mb-3">Carrito</h6>

                    ${carrito.map(item => `
                    <div class="d-flex align-items-center justify-content-between mb-2 pb-2" style="border-bottom:1px solid #eee;">
                        <div style="flex:1; min-width:0;">
                            <p class="mb-0 small font-weight-bold text-truncate">${item.nombre}</p>
                        </div>
                        <div class="d-flex align-items-center mx-2" style="gap:.25rem;">
                            <button class="btn btn-outline-secondary btn-sm p-0" style="width:22px;height:22px;font-size:.7rem;">−</button>
                            <span class="small font-weight-bold px-1">${item.cantidad}</span>
                            <button class="btn btn-outline-secondary btn-sm p-0" style="width:22px;height:22px;font-size:.7rem;">+</button>
                        </div>
                        <span class="small font-weight-bold" style="color:#004F99; flex-shrink:0;">${item.precio}</span>
                        <button class="btn btn-outline-danger btn-sm p-0 ml-2" style="width:22px;height:22px;font-size:.65rem;">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>`).join('')}

                    <hr class="my-2">

                    <div class="d-flex justify-content-between mb-1">
                        <span class="small text-muted">Subtotal:</span>
                        <span class="small font-weight-bold">$295.90</span>
                    </div>
                    <div class="d-flex justify-content-between mb-3">
                        <span class="small font-weight-bold">Total:</span>
                        <span class="font-weight-bold" style="color:#004F99; font-size:1.05rem;">$2,390.00</span>
                    </div>

                    <button class="btn btn-primary btn-block Redondear font-weight-bold mb-2">
                        Completar Orden
                    </button>
                    <button data-acceso="proveedores" class="btn btn-outline-secondary btn-block btn-sm Redondear">
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