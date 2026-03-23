// js/views/alertasStockView_admin.js

export function getAlertasStockAdminHTML() {

    const alertas = [
        {
            tipo: 'critico', titulo: 'Stock Crítico',
            codigo: 'P-0012', categoria: 'Ferretería', proveedor: 'Distribuidora Zúñiga Ferreteros',
            descripcion: 'El producto Tornillo M8 x 40mm tiene solo 15 unidades disponibles. Stock mínimo requerido: 50 unidades.',
            stockActual: 15, stockMinimo: 50
        },
        {
            tipo: 'sinstock', titulo: 'Sin Stock',
            codigo: 'OBB-080', categoria: 'Ferretería', proveedor: 'Papelería Montes',
            descripcion: 'El producto Energy Amper 450 ml está completamente agotado. Hay 0 unidades disponibles.',
            stockActual: 0, stockMinimo: 20
        },
        {
            tipo: 'bajo', titulo: 'Stock Bajo',
            codigo: 'PM-081', categoria: 'Ferretería', proveedor: 'Pinturas Corteza',
            descripcion: 'El producto Pintura blanca mate 1L tiene 8 uds disponibles. Stock mínimo requerido: 20 unidades.',
            stockActual: 8, stockMinimo: 20
        },
    ];

    const colorTipo = { critico: '#f8d7da', bajo: '#fff3cd', sinstock: '#f8d7da' };
    const badgeTipo = { critico: 'danger', bajo: 'warning', sinstock: 'danger' };
    const iconTipo  = { critico: 'fa-exclamation-triangle', bajo: 'fa-exclamation-circle', sinstock: 'fa-times-circle' };

    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Botón regreso -->
        <div class="mb-3">
            <button data-acceso="inventario" class="btn btn-outline-secondary btn-sm Redondear">
                <i class="fas fa-arrow-left mr-1"></i> Regresar a Inventario
            </button>
        </div>

        <!-- Título -->
        <div class="text-center mb-1">
            <h2 class="h3 font-weight-bold mb-0">Alertas Stock</h2>
            <p class="text-muted small">Inventario completo</p>
        </div>

        <!-- Stats -->
        <div class="row justify-content-center mb-4">
            <div class="col-4 col-md-2 mb-3 text-center">
                <div class="stat-card p-3">
                    <i class="fas fa-exclamation-triangle fa-2x text-danger mb-1"></i>
                    <h3 class="h4 font-weight-bold mb-0 text-danger">7</h3>
                    <p class="small text-muted mb-0">Stock Crítico</p>
                </div>
            </div>
            <div class="col-4 col-md-2 mb-3 text-center">
                <div class="stat-card p-3">
                    <i class="fas fa-exclamation-circle fa-2x text-warning mb-1"></i>
                    <h3 class="h4 font-weight-bold mb-0 text-warning">7</h3>
                    <p class="small text-muted mb-0">Stock Bajo</p>
                </div>
            </div>
            <div class="col-4 col-md-2 mb-3 text-center">
                <div class="stat-card p-3">
                    <i class="fas fa-times-circle fa-2x text-secondary mb-1"></i>
                    <h3 class="h4 font-weight-bold mb-0 text-secondary">7</h3>
                    <p class="small text-muted mb-0">Sin Stock</p>
                </div>
            </div>
        </div>

        <!-- Filtros -->
        <div class="stat-card p-3 mb-4">
            <h6 class="font-weight-bold mb-3">Todas las alertas</h6>
            <div class="d-flex flex-wrap mb-3" style="gap:.5rem;">
                <button class="btn btn-primary btn-sm Redondear">Todos <span class="badge badge-light ml-1">21</span></button>
                <button class="btn btn-outline-danger btn-sm Redondear">Críticas <span class="badge badge-danger ml-1">7</span></button>
                <button class="btn btn-outline-warning btn-sm Redondear">Bajo <span class="badge badge-warning ml-1">7</span></button>
                <button class="btn btn-outline-secondary btn-sm Redondear">Sin Stock <span class="badge badge-secondary ml-1">7</span></button>
            </div>

            <!-- Lista de alertas -->
            ${alertas.map(a => `
            <div class="mb-3 p-3 Redondear" style="background:${colorTipo[a.tipo]}; border:1px solid #ddd;">
                <div class="d-flex align-items-start mb-2">
                    <i class="fas ${iconTipo[a.tipo]} mr-2 mt-1 text-${badgeTipo[a.tipo]}"></i>
                    <div style="flex:1;">
                        <p class="mb-1 font-weight-bold small">${a.titulo}</p>
                        <p class="mb-2 small">${a.descripcion}</p>
                        <div class="d-flex flex-wrap" style="gap:1rem; font-size:0.78rem;">
                            <span><strong>Código:</strong> ${a.codigo}</span>
                            <span><strong>Categoría:</strong> ${a.categoria}</span>
                            <span><strong>Proveedor:</strong> ${a.proveedor}</span>
                            <span><strong>Stock Actual:</strong> <span class="text-danger font-weight-bold">${a.stockActual} unidades</span></span>
                        </div>
                    </div>
                </div>
                <div class="d-flex" style="gap:.5rem;">
                    <button class="btn btn-success btn-sm Redondear font-weight-bold">
                        Reabastecer Ahora
                    </button>
                    <button class="btn btn-outline-secondary btn-sm Redondear">
                        Ver Detalles
                    </button>
                    <button class="btn btn-outline-secondary btn-sm Redondear">
                        Descartar
                    </button>
                </div>
            </div>`).join('')}
        </div>

    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}