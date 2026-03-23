// js/views/proveedoresView_admin.js

export function getProveedoresAdminHTML() {

    const proveedores = [
        {
            nombre: 'Coca-Cola FEMSA', categoria: 'Bebidas', badge: 'Activo', badgeColor: 'success',
            contacto: 'Roberto García', telefono: '+52 755 123 4561', email: 'r.garcia@femsa.com',
            direccion: 'Cuauhtémoc de México, CDMX', productos: 145, totalCompras: '$128,450'
        },
        {
            nombre: 'Distribuidora Bodega Aurora', categoria: 'Abarrotes', badge: 'Activo', badgeColor: 'success',
            contacto: 'Ana Mojica', telefono: '+52 755 234 5672', email: 'a.mojica@aurorent.com',
            direccion: 'Guadalajara, Jalisco', productos: 893, totalCompras: '$95,230'
        },
        {
            nombre: 'Pinturas Comex', categoria: 'Pinturas y Acabados', badge: 'Activo', badgeColor: 'success',
            contacto: 'Pedro López', telefono: '+52 755 345 6143', email: 'p.lopez@comex.com',
            direccion: 'Monterrey, Nuevo León', productos: 67, totalCompras: '$78,890'
        },
        {
            nombre: 'Materiales de Construcción', categoria: 'Materiales de Construcción', badge: 'Inactivo', badgeColor: 'secondary',
            contacto: 'Mario Ramos', telefono: '+52 755 456 7458', email: 'g.ramos@construmart.com',
            direccion: 'Guadalajara, Jalisco', productos: 115, totalCompras: '$156,340'
        },
    ];

    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Título -->
        <div class="text-center mb-4">
            <h2 class="h3 font-weight-bold mb-0">Proveedores</h2>
            <p class="text-muted small">Lista de proveedores</p>
        </div>

        <!-- Stats -->
        <div class="row mb-4">
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <i class="fas fa-truck mb-1" style="color:#004F99;"></i>
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Total Proveedores</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#004F99;">24</h2>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <i class="fas fa-check-circle mb-1" style="color:#28a745;"></i>
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Proveedores Activos</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#004F99;">21</h2>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <i class="fas fa-boxes mb-1" style="color:#004F99;"></i>
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Productos Surtidos</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#004F99;">7</h2>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <i class="fas fa-dollar-sign mb-1" style="color:#28a745;"></i>
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Total Compras</p>
                    <h2 class="h4 font-weight-bold mb-0" style="color:#28a745;">$458,920</h2>
                </div>
            </div>
        </div>

        <!-- Directorio de Proveedores -->
        <div class="stat-card p-3 mb-4">
            <div class="d-flex justify-content-between align-items-center flex-wrap mb-3" style="gap:.5rem;">
                <div>
                    <h6 class="font-weight-bold mb-1">
                        <i class="fas fa-address-book mr-2" style="color:#004F99;"></i>Directorio de Proveedores
                    </h6>
                    <p class="small text-muted mb-0">Administra los proveedores y sus datos de contacto</p>
                </div>
                <div class="d-flex align-items-center" style="gap:.5rem;">
                    <div class="input-group input-group-sm" style="max-width:220px;">
                        <input type="text" class="form-control border-secondary" placeholder="Buscar proveedor, categoría...">
                        <div class="input-group-append">
                            <span class="input-group-text"><i class="fas fa-search"></i></span>
                        </div>
                    </div>
                    <button data-acceso="nuevoProveedor" class="btn btn-primary btn-sm Redondear font-weight-bold">
                        <i class="fas fa-plus mr-1"></i> Nuevo Proveedor
                    </button>
                </div>
            </div>

            <!-- Tarjetas de proveedores -->
            <div class="row">
                ${proveedores.map(p => `
                <div class="col-md-6 col-12 mb-4">
                    <div class="stat-card p-3">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <p class="mb-0 font-weight-bold">${p.nombre}</p>
                                <p class="mb-0 small text-muted">${p.categoria}</p>
                            </div>
                            <span class="badge badge-${p.badgeColor} Redondear px-2" style="font-size:0.7rem;">${p.badge}</span>
                        </div>

                        <div class="mb-2" style="font-size:0.82rem;">
                            <p class="mb-1 text-muted">
                                <i class="fas fa-user mr-1" style="color:#004F99;width:14px;"></i>${p.contacto}
                            </p>
                            <p class="mb-1 text-muted">
                                <i class="fas fa-phone mr-1" style="color:#004F99;width:14px;"></i>${p.telefono}
                            </p>
                            <p class="mb-1 text-muted">
                                <i class="fas fa-envelope mr-1" style="color:#004F99;width:14px;"></i>${p.email}
                            </p>
                            <p class="mb-0 text-muted">
                                <i class="fas fa-map-marker-alt mr-1" style="color:#004F99;width:14px;"></i>${p.direccion}
                            </p>
                        </div>

                        <hr class="my-2">

                        <div class="d-flex justify-content-between mb-3">
                            <div>
                                <p class="mb-0 font-weight-bold" style="color:#004F99;">${p.productos}</p>
                                <p class="mb-0 tiempo">Productos</p>
                            </div>
                            <div class="text-right">
                                <p class="mb-0 font-weight-bold" style="color:#28a745;">${p.totalCompras}</p>
                                <p class="mb-0 tiempo">Total Compras</p>
                            </div>
                        </div>

                        <div class="d-flex" style="gap:.5rem;">
                            <button data-acceso="reabastecerProveedor" class="btn btn-primary btn-sm Redondear flex-fill font-weight-bold">
                                Reabastecer
                            </button>
                            <button class="btn btn-outline-secondary btn-sm Redondear px-3">
                                Editar
                            </button>
                            <button class="btn btn-outline-danger btn-sm Redondear">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>`).join('')}
            </div>
        </div>

    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}