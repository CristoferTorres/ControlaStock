// js/views/actividadView_admin.js

export function getActividadAdminHTML() {

    const conectados = [
        { nombre: 'María García', email: 'maria.garcia@email.com', desde: 'Hace 2 min'   },
        { nombre: 'María García', email: 'maria.garcia@email.com', desde: 'Hace 15 min'  },
        { nombre: 'María García', email: 'maria.garcia@email.com', desde: 'Hace 1h 2min' },
        { nombre: 'María García', email: 'maria.garcia@email.com', desde: 'Hace 1h 7min' },
        { nombre: 'María García', email: 'maria.garcia@email.com', desde: 'Hace 3h 2min' },
    ];

    const desconectados = [
        { nombre: 'María García', email: 'maria.garcia2@email.com', hace: 'Apr 11:20' },
        { nombre: 'María García', email: 'maria.garcia2@email.com', hace: 'Apr 12:15' },
        { nombre: 'María García', email: 'maria.garcia2@email.com', hace: 'Apr 11:14' },
        { nombre: 'María García', email: 'maria.garcia2@email.com', hace: 'Apr 11:14' },
    ];

    const actividadHoy = [
        {
            usuario: 'María García hizo sesión',
            email: 'maria.garcia@email.com',
            hora: 'Hoy 8:11',
            accion: null
        },
        {
            usuario: 'Juan Pérez actualizó un producto',
            email: 'juan.p@email.com',
            hora: 'Hoy 9:43',
            accion: 'Producto: Coca Cola 600ml',
            detalle: 'Cambio: Precio de $14.00 a $15.00 / Coca Cola baja'
        },
        {
            usuario: 'Carlos Ruiz inició una venta',
            email: 'carlos.r@email.com',
            hora: 'Hoy 10:31',
            accion: 'Venta #V-2026-172',
            detalle: 'Vendedor: Carlos Ruiz'
        },
        {
            usuario: 'Ana Martínez registró una venta',
            email: 'ana.m@email.com',
            hora: 'Hoy 11:02',
            accion: 'Venta #V-2026-169',
            detalle: 'Vendedor: Ana Martínez'
        },
    ];

    const actividadAyer = [
        {
            usuario: 'Pedro Sánchez eliminó un producto',
            email: 'pedro.s@email.com',
            hora: 'Ayer 14:30',
            accion: 'Producto: Coca Cola 600ml',
            detalle: 'Cantidad: Coca Cola 600ml (S) / Eliminado'
        },
    ];

    return `
    <div class="px-3 px-md-5 py-4">

        <!-- Título -->
        <div class="mb-1">
            <h2 class="h3 font-weight-bold mb-0">Gestión de Empleados</h2>
            <p class="small text-muted mb-4">Miércoles, 19 de Noviembre 2025 &bull; 14:33 PM</p>
        </div>

        <!-- Stats -->
        <div class="row mb-4">
            <div class="col-6 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Empleados Activos</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#004F99;">8</h2>
                </div>
            </div>
            <div class="col-6 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Acciones Hoy</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#004F99;">247</h2>
                </div>
            </div>
        </div>

        <!-- Usuarios Conectados / Desconectados -->
        <div class="row mb-4">
            <div class="col-md-6 col-12 mb-3">
                <div class="stat-card p-3 h-100">
                    <h6 class="font-weight-bold mb-3">
                        Usuarios Conectados <span class="badge badge-success ml-1">${conectados.length}</span>
                    </h6>
                    ${conectados.map(u => `
                    <div class="d-flex align-items-center mb-3">
                        <i class="fas fa-user-circle fa-2x mr-2 text-muted"></i>
                        <div style="flex:1; min-width:0;">
                            <p class="mb-0 small font-weight-bold text-truncate">${u.nombre}</p>
                            <p class="mb-0 tiempo text-truncate">${u.email}</p>
                        </div>
                        <span class="tiempo flex-shrink-0 ml-2">${u.desde}</span>
                    </div>`).join('')}
                </div>
            </div>
            <div class="col-md-6 col-12 mb-3">
                <div class="stat-card p-3 h-100">
                    <h6 class="font-weight-bold mb-3">
                        Usuarios Desconectados <span class="badge badge-secondary ml-1">${desconectados.length}</span>
                    </h6>
                    ${desconectados.map(u => `
                    <div class="d-flex align-items-center mb-3">
                        <i class="fas fa-user-circle fa-2x mr-2 text-muted"></i>
                        <div style="flex:1; min-width:0;">
                            <p class="mb-0 small font-weight-bold text-truncate">${u.nombre}</p>
                            <p class="mb-0 tiempo text-truncate">${u.email}</p>
                        </div>
                        <span class="tiempo flex-shrink-0 ml-2">${u.hace}</span>
                    </div>`).join('')}
                </div>
            </div>
        </div>

        <!-- Registro de Actividad -->
        <div class="stat-card p-3 mb-4">
            <div class="d-flex justify-content-between align-items-center flex-wrap mb-3" style="gap:.5rem;">
                <h5 class="font-weight-bold mb-0">Registro de Actividad</h5>
                <div class="d-flex align-items-center" style="gap:.5rem;">
                    <div class="input-group input-group-sm" style="max-width:180px;">
                        <input type="text" class="form-control border-secondary" placeholder="Buscar actividad...">
                    </div>
                    <select class="form-control form-control-sm" style="width:130px;">
                        <option>Todas las acciones</option>
                        <option>Ventas</option>
                        <option>Productos</option>
                        <option>Sesiones</option>
                    </select>
                    <button class="btn btn-outline-secondary btn-sm Redondear px-2">
                        <i class="fas fa-filter"></i>
                    </button>
                </div>
            </div>

            <!-- Hoy -->
            <p class="small font-weight-bold text-muted mb-2">Hoy — 30 de Noviembre, 2025</p>
            ${actividadHoy.map(a => `
            <div class="p-3 mb-2 Redondear" style="background:#f7f9fb; border-left:3px solid #004F99;">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <p class="mb-0 small font-weight-bold">${a.usuario}</p>
                        <p class="mb-0 tiempo">${a.email}</p>
                        ${a.accion ? `<p class="mb-0 small text-muted mt-1">${a.accion}</p>` : ''}
                        ${a.detalle ? `<p class="mb-0 tiempo">${a.detalle}</p>` : ''}
                    </div>
                    <span class="tiempo flex-shrink-0 ml-2">${a.hora}</span>
                </div>
            </div>`).join('')}

            <!-- Ayer -->
            <p class="small font-weight-bold text-muted mb-2 mt-3">Ayer — 3 de Noviembre, 2025</p>
            ${actividadAyer.map(a => `
            <div class="p-3 mb-2 Redondear" style="background:#f7f9fb; border-left:3px solid #004F99;">
                <div class="d-flex justify-content-between align-items-start">
                    <div>
                        <p class="mb-0 small font-weight-bold">${a.usuario}</p>
                        <p class="mb-0 tiempo">${a.email}</p>
                        ${a.accion ? `<p class="mb-0 small text-muted mt-1">${a.accion}</p>` : ''}
                        ${a.detalle ? `<p class="mb-0 tiempo">${a.detalle}</p>` : ''}
                    </div>
                    <span class="tiempo flex-shrink-0 ml-2">${a.hora}</span>
                </div>
            </div>`).join('')}
        </div>

    </div>

    <footer class="footer-dash">
        &copy; 2024 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}