// js/views/ventasView.js

export function getVentasHTML() {
    const productosVendidos = [
        { nombre: 'Coca Cola 600ml',        desc: '156 unidades vendidas',  precio: '$420' },
        { nombre: 'Cemento gris 50kg',       desc: '98 unidades vendidas',   precio: '$375' },
        { nombre: 'Pintura blanca mate 1L',  desc: '74 unidades vendidas',   precio: '$289' },
        { nombre: 'Tornillo M8 x 40mm',      desc: '412 unidades vendidas',  precio: '$150' },
        { nombre: 'Arrandela plana 6mm',     desc: '360 unidades vendidas',  precio: '$150' },
        { nombre: 'Coca Cola 3L',            desc: '88 unidades vendidas',   precio: '$120' },
        { nombre: 'Energy Amper 450ml',      desc: '62 unidades vendidas',   precio: '$119' },
    ];

    const ventasRecientes = [
        { producto: 'Coca Cola 600ml',       monto: '$45' },
        { producto: 'Cemento gris 50kg',     monto: '$95' },
        { producto: 'Pintura blanca mate 1L', monto: '$72' },
        { producto: 'Tornillo M8 x 40mm',    monto: '$12' },
        { producto: 'Coca Cola 3L',          monto: '$18' },
        { producto: 'Energy Amper 450ml',    monto: '$33' },
    ];

    return `
    <div class="px-4 px-md-5 py-4">
        <div class="text-center mb-4">
            <h2 class="h3 font-weight-bold mb-0">Gestión de Ventas</h2>
            <p class="text-muted small">Centraliza tus operaciones y mantente siempre informado.</p>
        </div>

        <!-- Stats superiores -->
        <div class="row mb-4">
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3 text-center">
                    <p class="small text-muted mb-1 text-uppercase font-weight-bold">Ventas Hoy</p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">$2,450.00</h3>
                    <p class="small text-muted mb-0">Transacciones: <strong>12</strong></p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3 text-center">
                    <p class="small text-muted mb-1 text-uppercase font-weight-bold">Ventas del Mes</p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">$48,320.00</h3>
                    <p class="small text-muted mb-0">Transacciones: <strong>156</strong></p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3 text-center">
                    <p class="small text-muted mb-1 text-uppercase font-weight-bold">Total Productos</p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">89</h3>
                    <p class="small text-muted mb-0">en catálogo</p>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3 text-center">
                    <p class="small text-muted mb-1 text-uppercase font-weight-bold">Ticket Promedio</p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#28a745;">$204.17</h3>
                    <p class="small text-muted mb-0">por transacción</p>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- Columna izquierda -->
            <div class="col-lg-8 col-12">

                <!-- Meta del Día -->
                <div class="stat-card p-4 mb-4">
                    <h5 class="font-weight-bold mb-3">Meta del Día</h5>

                    <div class="mb-3">
                        <div class="d-flex justify-content-between mb-1">
                            <span class="progress-label">Meta de Ventas</span>
                            <span class="progress-label">78%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-ventas" role="progressbar" style="width:78%"></div>
                        </div>
                        <p class="small text-muted mt-1 mb-0">$2,450 de $3,150 en ventas</p>
                    </div>

                    <div>
                        <div class="d-flex justify-content-between mb-1">
                            <span class="progress-label">Meta de Transacciones</span>
                            <span class="progress-label">60%</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-trans" role="progressbar" style="width:60%"></div>
                        </div>
                        <p class="small text-muted mt-1 mb-0">12 de 20 transacciones</p>
                    </div>
                </div>

                <!-- Productos más vendidos -->
                <div class="stat-card p-4 mb-4">
                    <h5 class="font-weight-bold mb-3">Productos Más Vendidos Hoy</h5>
                    ${productosVendidos.map(p => `
                    <div class="producto-item">
                        <div>
                            <p class="mb-0 font-weight-bold small">${p.nombre}</p>
                            <p class="mb-0 text-muted" style="font-size:0.77rem;">${p.desc}</p>
                        </div>
                        <span class="producto-precio">${p.precio}</span>
                    </div>`).join('')}
                </div>
            </div>

            <!-- Columna derecha -->
            <div class="col-lg-4 col-12">

                <!-- Meta comisiones -->
                <div class="stat-card p-3 mb-4 text-center">
                    <p class="small text-muted text-uppercase font-weight-bold mb-1">Mis Comisiones del Día</p>
                    <h2 class="h2 font-weight-bold mb-0" style="color:#004F99;">$118</h2>
                    <p class="small text-muted mb-0">Ventas: $1,180</p>
                </div>

                <!-- Acciones rápidas -->
                <div class="stat-card p-3 mb-4">
                    <h6 class="font-weight-bold mb-3 text-uppercase small text-muted">Acciones Rápidas</h6>
                    <div class="row">
                        <div class="col-6 mb-2">
                            <button class="btn btn-outline-primary btn-block btn-sm Redondear">
                                <i class="fas fa-plus mr-1"></i> Nueva Venta
                            </button>
                        </div>
                        <div class="col-6 mb-2">
                            <button class="btn btn-outline-secondary btn-block btn-sm Redondear">
                                <i class="fas fa-list mr-1"></i> Ver Historial
                            </button>
                        </div>
                        <div class="col-6 mb-2">
                            <button class="btn btn-outline-success btn-block btn-sm Redondear">
                                <i class="fas fa-search mr-1"></i> Buscar Prod.
                            </button>
                        </div>
                        <div class="col-6 mb-2">
                            <button class="btn btn-outline-warning btn-block btn-sm Redondear">
                                <i class="fas fa-upload mr-1"></i> Salida Stock
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Ventas recientes -->
                <div class="stat-card p-3 mb-4">
                    <h6 class="font-weight-bold mb-3 text-uppercase small text-muted">Ventas Recientes</h6>
                    ${ventasRecientes.map(v => `
                    <div class="ventas-recientes-item">
                        <span>${v.producto}</span>
                        <span class="font-weight-bold" style="color:#004F99;">${v.monto}</span>
                    </div>`).join('')}
                </div>
            </div>
        </div>
    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}