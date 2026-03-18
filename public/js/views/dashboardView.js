// js/views/dashboardView.js

export function getDashboardHTML() {
    return `
    <div class="px-4 px-md-5 py-4">
        <h2 class="h3 font-weight-bold mb-0">Dashboard</h2>
        <p class="small text-muted mb-4">Miércoles, 19 de Noviembre 2025 &bull; 14:33 PM</p>

        <div class="row">
            <!-- Columna izquierda -->
            <div class="col-lg-8 col-12">

                <!-- Tarjetas de stats -->
                <div class="row mb-4">
                    <div class="col-md-6 col-12 mb-3">
                        <div class="stat-card p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Total Productos</p>
                                    <h2 class="h3 font-weight-bold mb-0">1,247</h2>
                                </div>
                                <i class="fas fa-boxes fa-2x" style="color:#004F99; opacity:0.8;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-3">
                        <div class="stat-card p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Stock Disponible</p>
                                    <h2 class="h3 font-weight-bold mb-0">8,542</h2>
                                </div>
                                <i class="fas fa-shopping-cart fa-2x" style="color:#004F99; opacity:0.8;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-3">
                        <div class="stat-card p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Alertas de Stock</p>
                                    <h2 class="h3 font-weight-bold mb-0 text-danger">4</h2>
                                </div>
                                <i class="fas fa-exclamation-triangle fa-2x text-warning" style="opacity:0.8;"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mb-3">
                        <div class="stat-card p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Mis Ventas Hoy</p>
                                    <h2 class="h3 font-weight-bold mb-0">18</h2>
                                </div>
                                <i class="fas fa-file-invoice-dollar fa-2x" style="color:#004F99; opacity:0.8;"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Alertas de stock -->
                <div class="stat-card p-3 mb-4">
                    <h5 class="font-weight-bold mb-3">
                        <i class="fas fa-exclamation-triangle text-warning mr-2"></i> Alertas de Stock
                    </h5>
                    <div class="alerta-item">
                        <p class="mb-0 font-weight-bold small">Coca Cola 600ml</p>
                        <p class="mb-0 text-muted" style="font-size:0.78rem;">Solo 8 unidades disponibles</p>
                    </div>
                    <div class="alerta-item">
                        <p class="mb-0 font-weight-bold small">Cemento gris 50kg</p>
                        <p class="mb-0 text-muted" style="font-size:0.78rem;">Solo 10 unidades disponibles</p>
                    </div>
                    <div class="alerta-item amarillo">
                        <p class="mb-0 font-weight-bold small">Pintura blanca mate 1L</p>
                        <p class="mb-0 text-muted" style="font-size:0.78rem;">Solo 5 unidades disponibles</p>
                    </div>
                    <div class="alerta-item amarillo">
                        <p class="mb-0 font-weight-bold small">Tornillo M8 x 40mm</p>
                        <p class="mb-0 text-muted" style="font-size:0.78rem;">Solo 26 unidades disponibles</p>
                    </div>
                </div>

                <!-- Actividad reciente -->
                <div class="stat-card p-3 mb-4">
                    <h5 class="font-weight-bold mb-3">
                        <i class="fas fa-info-circle text-primary mr-2"></i> Mi Actividad Reciente
                    </h5>
                    ${[
                        { texto: 'Salida de Stock: Cemento gris 50kg (15 unidades)', tiempo: 'Hace 25 minutos' },
                        { texto: 'Salida de Stock: Cemento gris 50kg (16 unidades)', tiempo: 'Hace 28 minutos' },
                        { texto: 'Salida de Stock: Cemento gris 50kg (15 unidades)', tiempo: 'Hace 31 minutos' },
                        { texto: 'Salida de Stock: Cemento gris 50kg (16 unidades)', tiempo: 'Hace 37 minutos' },
                        { texto: 'Salida de Stock: Cemento gris 50kg (15 unidades)', tiempo: 'Hace 41 minutos' },
                        { texto: 'Salida de Stock: Cemento gris 50kg (16 unidades)', tiempo: 'Hace 50 minutos' },
                    ].map(a => `
                    <div class="actividad-item">
                        <p class="mb-0 small">${a.texto}</p>
                        <p class="mb-0 tiempo">${a.tiempo}</p>
                    </div>`).join('')}
                </div>
            </div>

            <!-- Columna derecha -->
            <div class="col-lg-4 col-12">
                <div class="stat-card p-3 mb-4">
                    <h6 class="font-weight-bold mb-3 text-uppercase small text-muted">Acceso Rápido</h6>
                    <a href="#" class="acceso-btn" data-acceso="inventario">
                        <i class="fas fa-boxes"></i> Inventario
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="ventas">
                        <i class="fas fa-cash-register"></i> Ventas
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="reportes">
                        <i class="fas fa-chart-bar"></i> Reportes
                    </a>
                    <a href="#" class="acceso-btn" data-acceso="actividad">
                        <i class="fas fa-history"></i> Actividad
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
}