// js/views/dashboardAdminView.js

export function getDashboardAdminHTML() {

    const empleados = [
        { nombre: 'María García',  rol: 'Vendedora', ventas: 34, monto: '$8,450', avatar: 'MG', color: '#004F99' },
        { nombre: 'Carlos Ruiz',   rol: 'Vendedor',  ventas: 28, monto: '$6,200', avatar: 'CR', color: '#28a745' },
        { nombre: 'Ana Pérez',     rol: 'Cajera',    ventas: 25, monto: '$5,800', avatar: 'AP', color: '#6f42c1' },
        { nombre: 'Luis Morales',  rol: 'Vendedor',  ventas: 18, monto: '$4,100', avatar: 'LM', color: '#fd7e14' },
    ];

    const ventasRecientes = [
        { folio: '#V-2026-172', producto: 'Coca Cola 600ml x3',   empleado: 'María García', monto: '$295.00' },
        { folio: '#V-2026-171', producto: 'Cemento gris 50kg x2', empleado: 'Carlos Ruiz',  monto: '$750.00' },
        { folio: '#V-2026-170', producto: 'Pintura blanca 1L x3', empleado: 'Ana Pérez',    monto: '$180.00' },
    ];

    const actividadReciente = [
        { texto: 'Nueva venta #V-2026-172 — María García',      tiempo: 'Hace 12 min'   },
        { texto: 'Salida de Stock: Cemento gris 50kg (15 uds)', tiempo: 'Hace 25 min'   },
        { texto: 'Nueva venta #V-2026-171 — Carlos Ruiz',       tiempo: 'Hace 28 min'   },
        { texto: 'Nuevo Usuario: Luis Morales (Vendedor)',       tiempo: 'Hace 1h 10min' },
        { texto: 'Salida de Stock: Pintura blanca 1L (5 uds)',  tiempo: 'Hace 1h 35min' },
        { texto: 'Nueva venta #V-2026-168 — Ana Pérez',         tiempo: 'Hace 2h 5min'  },
    ];

    const medals = ['🥇', '🥈', '🥉', '4°'];

    return `
    <div class="px-4 px-md-5 py-4">

        <div class="d-flex align-items-start justify-content-between flex-wrap mb-1" style="gap:.5rem">
            <div>
                <h2 class="h3 font-weight-bold mb-0">Dashboard</h2>
                <p class="small text-muted mb-4">Miércoles, 19 de Noviembre 2025 &bull; 14:33 PM</p>
            </div>
            <span style="background:#004F99;color:#fff;border-radius:20px;font-size:.75rem;font-weight:600;padding:.35rem .9rem;align-self:flex-start;margin-top:.3rem">
                <i class="fas fa-user-shield mr-1"></i> Administrador
            </span>
        </div>

        <div class="row">

            <!-- ══ COLUMNA IZQUIERDA ══════════════════════ -->
            <div class="col-lg-8 col-12">

                <!-- Tarjetas KPI -->
                <div class="row mb-4">
                    <div class="col-md-6 col-12 mb-3">
                        <div class="stat-card p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Ventas Hoy</p>
                                    <h2 class="h3 font-weight-bold mb-0">$24,580</h2>
                                    <p class="small mb-0" style="color:#28a745;font-weight:600">
                                        <i class="fas fa-arrow-up" style="font-size:.7rem"></i> +12.4% vs ayer
                                    </p>
                                </div>
                                <i class="fas fa-dollar-sign fa-2x" style="color:#004F99;opacity:0.8"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-3">
                        <div class="stat-card p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Ventas del Mes</p>
                                    <h2 class="h3 font-weight-bold mb-0">$48,320</h2>
                                    <p class="small mb-0" style="color:#28a745;font-weight:600">
                                        <i class="fas fa-arrow-up" style="font-size:.7rem"></i> +8.1% vs mes anterior
                                    </p>
                                </div>
                                <i class="fas fa-chart-line fa-2x" style="color:#004F99;opacity:0.8"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-3">
                        <div class="stat-card p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Inventario</p>
                                    <h2 class="h3 font-weight-bold mb-0">1,247</h2>
                                    <p class="small mb-0 text-muted">
                                        <i class="fas fa-exclamation-circle text-warning" style="font-size:.7rem"></i>
                                        5 alertas de stock
                                    </p>
                                </div>
                                <i class="fas fa-boxes fa-2x" style="color:#004F99;opacity:0.8"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-3">
                        <div class="stat-card p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Empleados Activos</p>
                                    <h2 class="h3 font-weight-bold mb-0">4</h2>
                                    <p class="small text-muted mb-0">de 6 registrados</p>
                                </div>
                                <i class="fas fa-users fa-2x" style="color:#004F99;opacity:0.8"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Estado de Stock -->
                <div class="stat-card p-3 mb-4">
                    <h5 class="font-weight-bold mb-3">
                        <i class="fas fa-exclamation-triangle text-warning mr-2"></i> Estado de Stock
                    </h5>
                    ${[
                        { nombre: 'Coca Cola 600ml',     stock: 8,  max: 50, clase: 'alerta-item'          },
                        { nombre: 'Cemento gris 50kg',   stock: 10, max: 50, clase: 'alerta-item'          },
                        { nombre: 'Pintura blanca 1L',   stock: 5,  max: 50, clase: 'alerta-item'          },
                        { nombre: 'Tornillo M8 x 40mm',  stock: 26, max: 50, clase: 'alerta-item amarillo' },
                        { nombre: 'Arrandela plana 6mm', stock: 31, max: 50, clase: 'alerta-item amarillo' },
                    ].map(p => `
                    <div class="${p.clase}">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <p class="mb-0 font-weight-bold small">${p.nombre}</p>
                            <span class="small font-weight-bold" style="color:${p.stock <= 10 ? '#dc3545' : '#856404'}">${p.stock} uds</span>
                        </div>
                        <div class="progress" style="height:5px;border-radius:4px;">
                            <div class="progress-bar ${p.stock <= 10 ? 'bg-danger' : 'bg-warning'}"
                                 role="progressbar"
                                 style="width:${Math.round((p.stock / p.max) * 100)}%">
                            </div>
                        </div>
                    </div>`).join('')}
                </div>

                <!-- Actividad Reciente -->
                <div class="stat-card p-3 mb-4">
                    <h5 class="font-weight-bold mb-3">
                        <i class="fas fa-info-circle text-primary mr-2"></i> Actividad Reciente
                    </h5>
                    ${actividadReciente.map(a => `
                    <div class="actividad-item">
                        <p class="mb-0 small">${a.texto}</p>
                        <p class="mb-0 tiempo">${a.tiempo}</p>
                    </div>`).join('')}
                </div>

                <!-- Ventas Recientes -->
                <div class="stat-card p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="font-weight-bold mb-0">
                            <i class="fas fa-receipt text-primary mr-2"></i> Ventas Recientes
                        </h5>
                        <a href="#" class="small font-weight-bold" style="color:#004F99" data-acceso="ventas">
                            Ver todas <i class="fas fa-arrow-right" style="font-size:.7rem"></i>
                        </a>
                    </div>
                    ${ventasRecientes.map(v => `
                    <div class="actividad-item" style="border-left-color:#004F99">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="mb-0 small font-weight-bold" style="color:#004F99">${v.folio}</p>
                                <p class="mb-0 small">${v.producto}</p>
                                <p class="mb-0 tiempo">Por: ${v.empleado}</p>
                            </div>
                            <span class="font-weight-bold" style="color:#28a745;font-size:.95rem">${v.monto}</span>
                        </div>
                    </div>`).join('')}
                </div>

            </div>

            <!-- ══ COLUMNA DERECHA ════════════════════════ -->
            <div class="col-lg-4 col-12">

                <!-- Acceso Rápido -->
                <div class="stat-card p-3 mb-4">
                    <h6 class="font-weight-bold mb-3 text-uppercase small text-muted">Acceso Rápido</h6>
                    <a href="#" class="acceso-btn" data-acceso="ventas">
                        <i class="fas fa-cash-register"></i> Ventas
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="inventario">
                        <i class="fas fa-boxes"></i> Inventario
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="empleados">
                        <i class="fas fa-user-tie"></i> Empleados
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="actividad">
                        <i class="fas fa-history"></i> Actividad
                    </a>
                </div>

                <!-- Ranking de Vendedores -->
                <div class="stat-card p-3 mb-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="font-weight-bold mb-0 text-uppercase small text-muted">Ranking Hoy</h6>
                        <a href="#" class="small font-weight-bold" style="color:#004F99" data-acceso="empleados">
                            Ver todos
                        </a>
                    </div>

                    ${empleados.map((e, i) => `
                    <div class="d-flex align-items-center mb-3">
                        <span style="font-size:.9rem;width:24px;flex-shrink:0">${medals[i]}</span>
                        <div class="d-flex align-items-center justify-content-center rounded-circle mr-2 font-weight-bold text-white"
                             style="width:32px;height:32px;background:${e.color};font-size:.72rem;flex-shrink:0">
                            ${e.avatar}
                        </div>
                        <div style="flex:1;min-width:0">
                            <p class="mb-0 small font-weight-bold text-truncate">${e.nombre}</p>
                            <p class="mb-0 tiempo">${e.rol} &bull; ${e.ventas} ventas</p>
                        </div>
                        <span class="font-weight-bold small" style="color:#28a745;flex-shrink:0">${e.monto}</span>
                    </div>`).join('')}

                    <div class="d-flex pt-2" style="border-top:1px solid #eee;gap:.5rem">
                        <div class="text-center" style="flex:1">
                            <p class="mb-0 font-weight-bold small" style="color:#004F99">$24.5k</p>
                            <p class="mb-0 tiempo">Total equipo</p>
                        </div>
                        <div class="text-center" style="flex:1;border-left:1px solid #eee;border-right:1px solid #eee">
                            <p class="mb-0 font-weight-bold small" style="color:#004F99">105</p>
                            <p class="mb-0 tiempo">Transacciones</p>
                        </div>
                        <div class="text-center" style="flex:1">
                            <p class="mb-0 font-weight-bold small" style="color:#004F99">$233</p>
                            <p class="mb-0 tiempo">Ticket prom</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    `;
}