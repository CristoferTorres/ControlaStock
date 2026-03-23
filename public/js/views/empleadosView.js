// js/views/empleadosView.js

export function getEmpleadosHTML() {

    const empleados = [
        {
            id: 1,
            nombre: 'María',     apellidos: 'García',
            rol: 'Empleada', avatar: 'MG', color: '#004F99',
            email: 'maria.garcia@email.com',  telefono: '+52 755 123 4567',
            ingreso: '13 Ene 2024', ventasHoy: '$1,180', transacciones: 9,
            activo: true
        },
        {
            id: 2,
            nombre: 'Carlos',    apellidos: 'Ruiz',
            rol: 'Empleado', avatar: 'CR', color: '#28a745',
            email: 'carlos.ruiz@email.com',   telefono: '+52 755 123 8867',
            ingreso: '13 Feb 2024', ventasHoy: '$1,180', transacciones: 9,
            activo: true
        },
        {
            id: 3,
            nombre: 'Ana',       apellidos: 'Pérez',
            rol: 'Empleada', avatar: 'AP', color: '#6f42c1',
            email: 'ana.perez@email.com',     telefono: '+52 755 107 6647',
            ingreso: '13 Feb 2023', ventasHoy: '$1,180', transacciones: 9,
            activo: true
        },
        {
            id: 4,
            nombre: 'Luis',      apellidos: 'Morales',
            rol: 'Empleado', avatar: 'LM', color: '#fd7e14',
            email: 'luis.morales@email.com',  telefono: '+52 755 282 3843',
            ingreso: '13 Feb 2023', ventasHoy: '$1,180', transacciones: 9,
            activo: false
        },
    ];

    const roles = ['Administrador', 'Vendedor', 'Cajero', 'Empleado', 'Empleada'];

    /* ── Construye el HTML de un modal ───────────────────────────── */
    const modalHTML = (id, titulo, icono, empleado = null) => {
        const esEditar  = !!empleado;
        const nombre    = esEditar ? empleado.nombre    : '';
        const apellidos = esEditar ? empleado.apellidos : '';
        const email     = esEditar ? empleado.email     : '';
        const rol       = esEditar ? empleado.rol       : '';
        const activo    = esEditar ? empleado.activo    : true;

        return `
        <div id="${id}" style="
            display:none; position:fixed; inset:0;
            background:rgba(10,20,50,0.55); z-index:2000;
            align-items:center; justify-content:center;
            backdrop-filter:blur(2px);
        ">
            <div style="
                background:#fff; border-radius:14px; padding:2rem;
                width:90%; max-width:460px;
                box-shadow:0 8px 32px rgba(0,0,0,0.18);
            ">
                <!-- Ícono + título -->
                <div class="text-center mb-4">
                    <div class="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                        style="width:64px;height:64px;background:#e8eef5;">
                        <i class="fas ${icono}" style="font-size:1.8rem;color:#004F99;"></i>
                    </div>
                    <h5 class="font-weight-bold mb-0">${titulo}</h5>
                </div>

                <!-- Nombre / Apellidos -->
                <div class="form-row">
                    <div class="form-group col-6">
                        <label class="small font-weight-bold">Nombre</label>
                        <input type="text" class="form-control" value="${nombre}">
                    </div>
                    <div class="form-group col-6">
                        <label class="small font-weight-bold">Apellidos</label>
                        <input type="text" class="form-control" value="${apellidos}">
                    </div>
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label class="small font-weight-bold">Email</label>
                    <input type="email" class="form-control" value="${email}">
                    ${!esEditar ? '<small class="text-muted">Se usará para iniciar sesión</small>' : ''}
                </div>

                <!-- Rol / Estado -->
                <div class="form-row">
                    <div class="form-group ${esEditar ? 'col-6' : 'col-12'}">
                        <label class="small font-weight-bold">Rol de Usuario</label>
                        <select class="form-control">
                            <option value="">Seleccionar Rol</option>
                            ${roles.map(r => `<option ${r === rol ? 'selected' : ''}>${r}</option>`).join('')}
                        </select>
                    </div>
                    ${esEditar ? `
                    <div class="form-group col-6">
                        <label class="small font-weight-bold d-block">Estado del Usuario</label>
                        <div class="d-flex align-items-center mt-1" style="gap:.6rem;">
                            <label class="toggle-switch mb-0">
                                <input type="checkbox" class="toggle-check" ${activo ? 'checked' : ''}>
                                <span class="toggle-slider"></span>
                            </label>
                            <span class="toggle-label small font-weight-bold"
                                style="color:${activo ? '#28a745' : '#6c757d'};">
                                ${activo ? 'Activo' : 'Inactivo'}
                            </span>
                        </div>
                        <small class="text-muted" style="font-size:0.68rem;">
                            Usuarios inactivos no pueden iniciar sesión
                        </small>
                    </div>` : ''}
                </div>

                <!-- Contraseña -->
                <div class="form-row">
                    <div class="form-group col-6">
                        <label class="small font-weight-bold">
                            ${esEditar ? 'Cambiar Contraseña' : 'Contraseña'}
                        </label>
                        <input type="password" class="form-control" placeholder="Mínimo 8 caracteres">
                    </div>
                    <div class="form-group col-6">
                        <label class="small font-weight-bold">Confirma Contraseña</label>
                        <input type="password" class="form-control" placeholder="Mínimo 8 caracteres">
                    </div>
                </div>

                <!-- Botones -->
                <div class="d-flex justify-content-between mt-3">
                    <button class="btn btn-outline-secondary Redondear px-4 btn-cerrar-modal"
                        data-target-modal="${id}">
                        Cancelar
                    </button>
                    <button class="btn btn-primary Redondear font-weight-bold px-4">
                        Guardar
                    </button>
                </div>
            </div>
        </div>`;
    };

    return `
    <style>
        .toggle-switch {
            position: relative; display: inline-block;
            width: 44px; height: 24px; flex-shrink: 0;
        }
        .toggle-switch input { opacity: 0; width: 0; height: 0; }
        .toggle-slider {
            position: absolute; inset: 0; background: #ccc;
            border-radius: 24px; cursor: pointer; transition: background .25s;
        }
        .toggle-slider::before {
            content: ''; position: absolute;
            width: 18px; height: 18px; left: 3px; bottom: 3px;
            background: #fff; border-radius: 50%; transition: transform .25s;
        }
        .toggle-switch input:checked + .toggle-slider { background: #28a745; }
        .toggle-switch input:checked + .toggle-slider::before { transform: translateX(20px); }
    </style>

    <div class="px-3 px-md-5 py-4">

        <!-- ══ MODAL NUEVO USUARIO ══════════════════════════════════ -->
        ${modalHTML('modalNuevoUsuario', 'Nuevo Usuario', 'fa-user')}

        <!-- ══ MODALES EDITAR (uno por empleado) ════════════════════ -->
        ${empleados.map(e => modalHTML(`modalEditar${e.id}`, 'Editar Usuario', 'fa-user-edit', e)).join('')}

        <!-- Título + fecha -->
        <div class="mb-1">
            <h2 class="h3 font-weight-bold mb-0">Gestión de Empleados</h2>
            <p class="small text-muted mb-4">Martes, 10 de Noviembre 2025 &bull; 14:33 PM</p>
        </div>

        <!-- Stats -->
        <div class="row mb-4">
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Total Empleados</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#004F99;">12</h2>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Empleados Activos</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#004F99;">4 hoy</h2>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Ventas del Equipo</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#004F99;">$8,420</h2>
                </div>
            </div>
            <div class="col-6 col-md-3 mb-3">
                <div class="stat-card p-3">
                    <p class="small text-muted mb-1 font-weight-bold text-uppercase">Mejor Vendedor Hoy</p>
                    <h2 class="h3 font-weight-bold mb-0" style="color:#28a745;">$2,485</h2>
                </div>
            </div>
        </div>

        <!-- Buscador + filtro + botón nuevo -->
        <div class="d-flex justify-content-between align-items-center flex-wrap mb-4" style="gap:.5rem;">
            <div class="input-group input-group-sm" style="max-width:280px;">
                <input type="text" class="form-control border-secondary" placeholder="Buscar empleado, rol o tienda...">
                <div class="input-group-append">
                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
            </div>
            <div class="d-flex align-items-center" style="gap:.5rem;">
                <select class="form-control form-control-sm" style="width:120px;">
                    <option>Estado</option>
                    <option>Activo</option>
                    <option>Inactivo</option>
                </select>
                <button id="btnNuevoEmpleado" class="btn btn-primary btn-sm Redondear font-weight-bold">
                    <i class="fas fa-plus mr-1"></i> Nuevo Empleado
                </button>
            </div>
        </div>

        <!-- Lista de Empleados -->
        <h6 class="font-weight-bold mb-3">Lista de Empleados</h6>
        <div class="row">
            ${empleados.map(e => `
            <div class="col-md-6 col-12 mb-4">
                <div class="stat-card p-3">
                    <div class="d-flex align-items-center mb-3">
                        <div class="d-flex align-items-center justify-content-center rounded-circle mr-3 font-weight-bold text-white"
                            style="width:48px;height:48px;background:${e.color};font-size:.9rem;flex-shrink:0;">
                            ${e.avatar}
                        </div>
                        <div>
                            <p class="mb-0 font-weight-bold">${e.nombre} ${e.apellidos}</p>
                            <span class="badge badge-secondary Redondear px-2" style="font-size:0.7rem;">${e.rol}</span>
                        </div>
                    </div>

                    <div class="mb-2" style="font-size:0.82rem;">
                        <p class="mb-1 text-muted">
                            <i class="fas fa-envelope mr-1" style="color:#004F99;width:14px;"></i>${e.email}
                        </p>
                        <p class="mb-1 text-muted">
                            <i class="fas fa-phone mr-1" style="color:#004F99;width:14px;"></i>${e.telefono}
                        </p>
                        <p class="mb-0 text-muted">
                            <i class="fas fa-calendar mr-1" style="color:#004F99;width:14px;"></i>Ingreso: ${e.ingreso}
                        </p>
                    </div>

                    <hr class="my-2">

                    <div class="d-flex justify-content-between mb-3">
                        <div>
                            <p class="mb-0 font-weight-bold" style="color:#004F99;">${e.ventasHoy}</p>
                            <p class="mb-0 tiempo">VENTAS HOY</p>
                        </div>
                        <div class="text-right">
                            <p class="mb-0 font-weight-bold" style="color:#004F99;">${e.transacciones}</p>
                            <p class="mb-0 tiempo">TRANSACCIONES</p>
                        </div>
                    </div>

                    <div class="d-flex" style="gap:.5rem;">
                        <button class="btn btn-outline-primary btn-sm Redondear flex-fill btn-abrir-modal"
                            data-target-modal="modalEditar${e.id}">
                            <i class="fas fa-edit mr-1"></i> Editar
                        </button>
                        <button class="btn btn-outline-danger btn-sm Redondear flex-fill">
                            <i class="fas fa-trash mr-1"></i> Eliminar
                        </button>
                    </div>
                </div>
            </div>`).join('')}
        </div>

    </div>

    <footer class="footer-dash">
        &copy; 2026 ControlaStock &mdash; Sistema de Inventario para Tiendas Locales
    </footer>
    `;
}