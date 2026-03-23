// js/views/productosBajosView_admin.js

export function getProductosBajosAdminHTML() {

    const productos = [
        { codigo: 'BBB-001', producto: 'Coca Cola 600ml',    categoria: 'Bebidas',    proveedor: 'Coca Cola FEMSA', stockMin: 50,  stockActual: 16,  estado: 'Crítico'   },
        { codigo: 'BBB-001', producto: 'Arroz 5kg',          categoria: 'Abarrotes',  proveedor: 'Coca Cola FEMSA', stockMin: 100, stockActual: 0,   estado: 'Sin Stock' },
        { codigo: 'BBB-001', producto: 'Pintura blanca 1L',  categoria: 'Ferretería', proveedor: 'Coca Cola FEMSA', stockMin: 208, stockActual: 20,  estado: 'Bajo'      },
        { codigo: 'NBY-001', producto: 'Energy Amper 450ml', categoria: 'Bebidas',    proveedor: 'Coca Cola FEMSA', stockMin: 213, stockActual: 12,  estado: 'Crítico'   },
    ];

    const estadoColor = {
        'Crítico':   { bg: '#f8d7da', color: '#721c24' },
        'Sin Stock': { bg: '#6c757d', color: '#ffffff' },
        'Bajo':      { bg: '#fff3cd', color: '#856404' },
    };

    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Botón regreso -->
        <div class="mb-3">
            <button data-acceso="inventario" class="btn btn-outline-secondary btn-sm Redondear">
                <i class="fas fa-arrow-left mr-1"></i> Regresar a Inventario
            </button>
        </div>

        <!-- Título -->
        <div class="text-center mb-4">
            <h2 class="h3 font-weight-bold mb-0">Productos Bajos</h2>
            <p class="text-muted small">Una vista donde se muestran los productos con Stock bajo</p>
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

        <!-- Tabla de productos -->
        <div class="stat-card p-3 mb-4">
            <div class="d-flex justify-content-between align-items-center flex-wrap mb-3" style="gap:.5rem;">
                <div>
                    <h6 class="font-weight-bold mb-1">Productos que Requieren Atención</h6>
                    <p class="small text-muted mb-0">Productos con niveles de inventario bajos o agotados</p>
                </div>
                <button data-acceso="entradaStock" class="btn btn-success btn-sm Redondear font-weight-bold">
                    Reabastecer todo
                </button>
            </div>

            <!-- Filtros -->
            <div class="d-flex flex-wrap mb-3" style="gap:.5rem;">
                <button class="btn btn-primary btn-sm Redondear">Todos <span class="badge badge-light ml-1">21</span></button>
                <button class="btn btn-outline-danger btn-sm Redondear">Críticas <span class="badge badge-danger ml-1">7</span></button>
                <button class="btn btn-outline-warning btn-sm Redondear">Bajo <span class="badge badge-warning ml-1">7</span></button>
                <button class="btn btn-outline-secondary btn-sm Redondear">Sin Stock <span class="badge badge-secondary ml-1">7</span></button>
            </div>

            <div class="table-responsive">
                <table class="table table-sm table-hover mb-0">
                    <thead>
                        <tr style="font-size:0.78rem; color:#0b3661;">
                            <th>Código</th>
                            <th>Producto</th>
                            <th>Categoría</th>
                            <th>Proveedor</th>
                            <th>Stock Mín</th>
                            <th>Stock Actual</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody style="font-size:0.82rem;">
                        ${productos.map(p => `
                        <tr>
                            <td class="text-muted">${p.codigo}</td>
                            <td class="font-weight-bold">${p.producto}</td>
                            <td>${p.categoria}</td>
                            <td class="text-muted">${p.proveedor}</td>
                            <td>${p.stockMin}</td>
                            <td class="font-weight-bold ${p.stockActual === 0 ? 'text-danger' : ''}">${p.stockActual}</td>
                            <td>
                                <span class="badge Redondear px-2 py-1" style="font-size:0.7rem; background:${estadoColor[p.estado].bg}; color:${estadoColor[p.estado].color};">
                                    ${p.estado}
                                </span>
                            </td>
                            <td>
                                <button data-acceso="entradaStock" class="btn btn-success btn-sm Redondear px-2 py-0" title="Reabastecer" style="font-size:0.72rem;">
                                    <i class="fas fa-cart-plus"></i>
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