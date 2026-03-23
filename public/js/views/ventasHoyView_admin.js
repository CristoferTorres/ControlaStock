// js/views/ventasHoyView_admin.js

export function getVentasHoyAdminHTML() {

    const ventas = [
        { id: '#1234', vendedor: 'Juan Pérez',       producto: 'Aceite vegetal 1L',      cantidad: '5u',  total: '$135.00', fecha: '23/01/2026' },
        { id: '#1233', vendedor: 'María García',      producto: 'Arroz 5kg',              cantidad: '3u',  total: '$140.00', fecha: '23/01/2026' },
        { id: '#1232', vendedor: 'Carlos Ruiz',       producto: 'Frijol negro 1kg',       cantidad: '4u',  total: '$96.00',  fecha: '23/01/2026' },
        { id: '#1231', vendedor: 'Ana Pérez',         producto: 'Pan dulce surtido',      cantidad: '12u', total: '$72.00',  fecha: '23/01/2026' },
        { id: '#1230', vendedor: 'Oscar Jiménez',     producto: 'Refresco 2L Coca Cola',  cantidad: '6u',  total: '$180.00', fecha: '23/01/2026' },
        { id: '#1229', vendedor: 'Laura Martínez',    producto: 'Jabón de barra',         cantidad: '10u', total: '$85.50',  fecha: '23/01/2026' },
        { id: '#1228', vendedor: 'Roberto Franco',    producto: 'Papel higiénico 4 rollos', cantidad: '2u', total: '$64.00', fecha: '23/01/2026' },
        { id: '#1227', vendedor: 'Guillermo López',   producto: 'Leche entera 1L',        cantidad: '4u',  total: '$88.00',  fecha: '23/01/2026' },
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
            <h2 class="h3 font-weight-bold mb-0">Gestión de Ventas - Ventas Hoy</h2>
            <p class="text-muted small">El ritmo de tus ventas hoy</p>
        </div>

        <!-- ── Stats superiores ── -->
        <div class="row mb-4">
            <div class="col-6 col-md-4 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-dollar-sign mr-1" style="color:#004F99;"></i> Ventas Hoy
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">$2,450.00</h3>
                </div>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-receipt mr-1" style="color:#004F99;"></i> Cantidad de Ventas
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#004F99;">12</h3>
                </div>
            </div>
            <div class="col-6 col-md-4 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold">
                        <i class="fas fa-chart-line mr-1" style="color:#28a745;"></i> Ticket Promedio
                    </p>
                    <h3 class="h4 font-weight-bold mb-0" style="color:#28a745;">$204.16</h3>
                </div>
            </div>
        </div>

        <!-- ── Tabla ventas del día ── -->
        <div class="stat-card p-3 mb-4">
            <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap" style="gap:.5rem">
                <h5 class="font-weight-bold mb-0">Ventas del día</h5>
                <button data-acceso="agregarVenta" class="btn btn-primary btn-sm Redondear font-weight-bold">
                    <i class="fas fa-plus mr-1"></i> Agregar Venta
                </button>
            </div>
            <div class="table-responsive">
                <table class="table table-sm table-hover mb-0">
                    <thead>
                        <tr style="font-size:0.8rem; color:#0b3661;">
                            <th>ID</th>
                            <th>Vendedor</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody style="font-size:0.82rem;">
                        ${ventas.map(v => `
                        <tr>
                            <td class="font-weight-bold" style="color:#004F99;">${v.id}</td>
                            <td>${v.vendedor}</td>
                            <td>${v.producto}</td>
                            <td>${v.cantidad}</td>
                            <td class="font-weight-bold">${v.total}</td>
                            <td class="text-muted">${v.fecha}</td>
                            <td>
                                <button data-acceso="editarVenta" class="btn btn-sm btn-outline-secondary p-1 mr-1" title="Editar">
                                    <i class="fas fa-pencil-alt" style="font-size:0.7rem;"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-danger p-1" title="Eliminar">
                                    <i class="fas fa-trash" style="font-size:0.7rem;"></i>
                                </button>
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