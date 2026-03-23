// js/views/ventasAnioView_admin.js

export function getVentasAnioAdminHTML() {

    const meses = [
        { mes: 'Enero',      ventas: 142, ingresos: '$38,420.00', ganancias: '$9,870.00'  },
        { mes: 'Febrero',    ventas: 128, ingresos: '$34,180.00', ganancias: '$8,790.00'  },
        { mes: 'Marzo',      ventas: 156, ingresos: '$48,320.00', ganancias: '$12,430.00' },
        { mes: 'Abril',      ventas: 134, ingresos: '$41,560.00', ganancias: '$10,680.00' },
        { mes: 'Mayo',       ventas: 0,   ingresos: '$0.00',       ganancias: '$0.00'      },
        { mes: 'Junio',      ventas: 0,   ingresos: '$0.00',       ganancias: '$0.00'      },
        { mes: 'Julio',      ventas: 0,   ingresos: '$0.00',       ganancias: '$0.00'      },
        { mes: 'Agosto',     ventas: 0,   ingresos: '$0.00',       ganancias: '$0.00'      },
        { mes: 'Septiembre', ventas: 0,   ingresos: '$0.00',       ganancias: '$0.00'      },
        { mes: 'Octubre',    ventas: 0,   ingresos: '$0.00',       ganancias: '$0.00'      },
        { mes: 'Noviembre',  ventas: 0,   ingresos: '$0.00',       ganancias: '$0.00'      },
        { mes: 'Diciembre',  ventas: 0,   ingresos: '$0.00',       ganancias: '$0.00'      },
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
            <h2 class="h3 font-weight-bold mb-0">Ventas del Año 2026</h2>
            <p class="text-muted small">Resumen anual de ventas y ganancias</p>
        </div>

        <!-- ── Stats superiores ── -->
        <div class="row mb-4">
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-dollar-sign mr-1" style="color:#004F99;"></i> Ingresos del Año
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">$162,480.00</h3>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-chart-line mr-1" style="color:#28a745;"></i> Ganancias del Año
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#28a745;">$41,770.00</h3>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-receipt mr-1" style="color:#004F99;"></i> Total Ventas
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">560</h3>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-percentage mr-1" style="color:#004F99;"></i> Margen Promedio
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">25.7%</h3>
                </div>
            </div>
        </div>

        <!-- ── Tabla por mes ── -->
        <div class="stat-card p-3 mb-4">
            <h5 class="font-weight-bold mb-3">Detalle por mes</h5>
            <div class="table-responsive">
                <table class="table table-sm table-hover mb-0">
                    <thead>
                        <tr style="font-size:0.8rem; color:#0b3661;">
                            <th>Mes</th>
                            <th>Ventas</th>
                            <th>Ingresos</th>
                            <th>Ganancias</th>
                            <th>Estatus</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:0.82rem;">
                        ${meses.map(m => `
                        <tr>
                            <td class="font-weight-bold">${m.mes}</td>
                            <td>${m.ventas > 0 ? m.ventas : '<span class="text-muted">—</span>'}</td>
                            <td class="font-weight-bold" style="color:#004F99;">${m.ingresos !== '$0.00' ? m.ingresos : '<span class="text-muted">—</span>'}</td>
                            <td class="font-weight-bold" style="color:#28a745;">${m.ganancias !== '$0.00' ? m.ganancias : '<span class="text-muted">—</span>'}</td>
                            <td>
                                <span class="badge Redondear px-2 py-1" style="font-size:0.72rem; background:${m.ventas > 0 ? '#d4edda; color:#155724' : '#e2e3e5; color:#6c757d'};">
                                    ${m.ventas > 0 ? 'Completado' : 'Pendiente'}
                                </span>
                            </td>
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