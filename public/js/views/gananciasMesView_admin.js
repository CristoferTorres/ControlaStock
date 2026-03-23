// js/views/gananciasMesView_admin.js

export function getGananciasMesAdminHTML() {

    const detalle = [
        { id: '#1234', vendedor: 24, ingresos: '$500.00',  ganancias: '$150.00', fecha: '23/01/2026' },
        { id: '#1233', vendedor: 18, ingresos: '$1,680.00', ganancias: '$520.00', fecha: '22/01/2026' },
        { id: '#1232', vendedor: 31, ingresos: '$2,240.00', ganancias: '$670.00', fecha: '21/01/2026' },
        { id: '#1231', vendedor: 22, ingresos: '$3,213.06', ganancias: '$950.70', fecha: '20/01/2026' },
        { id: '#1230', vendedor: 27, ingresos: '$2,418.00', ganancias: '$670.00', fecha: '19/01/2026' },
        { id: '#1229', vendedor: 15, ingresos: '$1,890.50', ganancias: '$580.00', fecha: '18/01/2026' },
        { id: '#1228', vendedor: 20, ingresos: '$1,540.30', ganancias: '$460.00', fecha: '17/01/2026' },
        { id: '#1227', vendedor: 25, ingresos: '$3,300.50', ganancias: '$800.00', fecha: '16/01/2026' },
    ];

    return `
    <div class="px-3 px-md-5 py-4">

        <!-- ── Botón regreso ── -->
        <div class="mb-3">
            <button data-acceso="ventas" class="btn btn-outline-secondary btn-sm Redondear">
                <i class="fas fa-arrow-left mr-1"></i> Regresar a Ventas
            </button>
        </div>

        <!-- Título -->
        <div class="text-center mb-4">
            <h2 class="h3 font-weight-bold mb-0">Ganancias del Mes</h2>
            <p class="text-muted small">Detalles de las ganancias del mes</p>
        </div>

        <!-- ── Stats superiores ── -->
        <div class="row mb-4">
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-dollar-sign mr-1" style="color:#004F99;"></i> Ventas Totales
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">$48,320.00</h3>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-percentage mr-1" style="color:#004F99;"></i> Margen de Ganancia
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">25.7%</h3>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-receipt mr-1" style="color:#004F99;"></i> Ventas Totales
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">156</h3>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-times-circle mr-1" style="color:#dc3545;"></i> Gastos Extra
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#dc3545;">$0</h3>
                </div>
            </div>
        </div>

        <!-- ── Tabla detalle por día ── -->
        <div class="stat-card p-3 mb-4">
            <h5 class="font-weight-bold mb-3">Detalle de ganancias por día</h5>
            <div class="table-responsive">
                <table class="table table-sm table-hover mb-0">
                    <thead>
                        <tr style="font-size:0.8rem; color:#0b3661;">
                            <th>ID</th>
                            <th>Vendedor</th>
                            <th>Ingresos</th>
                            <th>Ganancias</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:0.82rem;">
                        ${detalle.map(d => `
                        <tr>
                            <td class="font-weight-bold" style="color:#004F99;">${d.id}</td>
                            <td>${d.vendedor}</td>
                            <td class="font-weight-bold">${d.ingresos}</td>
                            <td class="font-weight-bold" style="color:#28a745;">${d.ganancias}</td>
                            <td class="text-muted">${d.fecha}</td>
                        </tr>`).join('')}
                    </tbody>
                </table>
            </div>
        </div>

    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}