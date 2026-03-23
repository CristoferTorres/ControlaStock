// js/views/ventasView.js

export function getVentasAdminHTML() {

    const ventasRecientes = [
        { id: '#234', cliente: 'Juan Pérez',      producto: 'Tortilla integral 1L',  cantidad: '2u',  total: '$90.00',  fecha: '23/01/2026' },
        { id: '#233', cliente: 'Pablo García',    producto: 'Arroz 5kg',             cantidad: '4u',  total: '$160.00', fecha: '23/01/2026' },
        { id: '#231', cliente: 'Ana López',       producto: 'Flip-flops mg',         cantidad: '1u',  total: '$30.00',  fecha: '23/01/2026' },
        { id: '#130', cliente: 'Oscar Jiménez',   producto: 'Nada',                  cantidad: '1u',  total: '$60.00',  fecha: '22/01/2026' },
        { id: '#129', cliente: 'Oscar Rodolfo',   producto: 'Refresco 2L Coca Cola', cantidad: '6L',  total: '$60.00',  fecha: '22/01/2026' },
        { id: '#128', cliente: 'Laura Martínez',  producto: 'Yogur Lannea Torres',   cantidad: '4u',  total: '$50.00',  fecha: '22/01/2026' },
        { id: '#127', cliente: 'Guillermo López', producto: 'Leche entera 1L',       cantidad: '3u',  total: '$96.00',  fecha: '20/01/2026' },
    ];

    const estatusVentas = [
        { venta: 'Venta #234', estatus: 'Completado', color: 'success' },
        { venta: 'Venta #233', estatus: 'Pendiente',  color: 'warning' },
        { venta: 'Venta #231', estatus: 'Pendiente',  color: 'warning' },
        { venta: 'Venta #230', estatus: 'Cancelado',  color: 'danger'  },
        { venta: 'Venta #229', estatus: 'Completado', color: 'success' },
    ];

    const actividadReciente = [
        'Nueva venta #234',
        'Nueva venta #233',
        'Nueva venta #231',
        'Nueva venta #131',
        'Nueva venta #130',
    ];

    return `
    <div class="px-4 px-md-5 py-4">

        <!-- Título -->
        <div class="text-center mb-4">
            <h2 class="h3 font-weight-bold mb-0">Gestión de Ventas</h2>
            <p class="text-muted small">Centraliza tus operaciones y mantente siempre informado.</p>
        </div>

        <!-- ── Tarjetas stats ── -->
        <div class="row mb-4">
            <div class="col-md-4 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-dollar-sign mr-1" style="color:#004F99;"></i> Ventas Hoy
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">$2,450.00</h3>
                    <p class="small text-muted mb-2">Cantidad: <strong>12</strong></p>
                    <button id="btnVentasHoy" class="btn btn-outline-primary btn-sm btn-block Redondear" style="font-size:0.75rem;">Gestionar</button>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-calendar-alt mr-1" style="color:#004F99;"></i> Ventas del Mes
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">$48,320.00</h3>
                    <p class="small text-muted mb-2">Cantidad: <strong>156</strong></p>
                    <button id="btnGananciasMes" class="btn btn-outline-primary btn-sm btn-block Redondear" style="font-size:0.75rem;">Gestionar</button>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-chart-line mr-1" style="color:#004F99;"></i> Ventas del Año
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">$12,430.00</h3>
                    <p class="small text-muted mb-2">Cantidad: <strong>Fin</strong></p>
                    <button id="btnVentasAnio" class="btn btn-outline-primary btn-sm btn-block Redondear" style="font-size:0.75rem;">Gestionar</button>
                </div>
            </div>
        </div>

        <!-- ── Botones de acción ── -->
        <div class="d-flex justify-content-center mb-4" style="gap:1rem;">
            <button id="btnAgregarVenta" class="btn btn-primary Redondear font-weight-bold px-4">
                <i class="fas fa-plus mr-2"></i>Agregar Venta
            </button>
            <button id="btnEditarVenta" class="btn btn-outline-primary Redondear font-weight-bold px-4 ml-3">
                <i class="fas fa-edit mr-2"></i>Modificar Venta
            </button>
        </div>

        <!-- ── Tabla ventas recientes ── -->
        <div class="stat-card p-3 mb-4">
            <h5 class="font-weight-bold mb-3">Ventas Recientes</h5>
            <div class="table-responsive">
                <table class="table table-sm table-hover mb-0">
                    <thead>
                        <tr style="font-size:0.8rem; color:#0b3661;">
                            <th>ID</th>
                            <th>Cliente</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:0.82rem;">
                        ${ventasRecientes.map(v => `
                        <tr>
                            <td class="font-weight-bold" style="color:#004F99;">${v.id}</td>
                            <td>${v.cliente}</td>
                            <td>${v.producto}</td>
                            <td>${v.cantidad}</td>
                            <td class="font-weight-bold">${v.total}</td>
                            <td class="text-muted">${v.fecha}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ── Estatus y Actividad ── -->
        <div class="row">

            <!-- Estatus de Ventas -->
            <div class="col-md-6 col-12 mb-4">
                <div class="stat-card p-3 h-100">
                    <h6 class="font-weight-bold mb-3">Estatus de Ventas</h6>
                    ${estatusVentas.map(e => `
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="small font-weight-bold">${e.venta}</span>
                        <span class="badge badge-${e.color} Redondear px-2 py-1" style="font-size:0.72rem;">${e.estatus}</span>
                    </div>`).join('')}
                </div>
            </div>

            <!-- Actividad Reciente -->
            <div class="col-md-6 col-12 mb-4">
                <div class="stat-card p-3 h-100">
                    <h6 class="font-weight-bold mb-3">Actividad Reciente</h6>
                    ${actividadReciente.map(a => `
                    <div class="actividad-item mb-1">
                        <p class="mb-0 small">${a}</p>
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