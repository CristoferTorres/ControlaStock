// js/router_admin.js

import { getDashboardAdminHTML }    from './views/dashboardAdminView.js';
import { getVentasAdminHTML }       from './views/ventasView_admin.js';
import { getVentasHoyAdminHTML }    from './views/ventasHoyView_admin.js';
import { getGananciasMesAdminHTML } from './views/gananciasMesView_admin.js';
import { getVentasAnioAdminHTML }   from './views/ventasAnioView_admin.js';
import { getAgregarVentaAdminHTML } from './views/agregarVentaView_admin.js';
import { getEditarVentaAdminHTML }  from './views/editarVentaView_admin.js';
import { getInventarioAdminHTML }       from './views/inventarioView_admin.js';
import { getAgregarProductoAdminHTML }  from './views/agregarProductoView_admin.js';
import { getAlertasStockAdminHTML }     from './views/alertasStockView_admin.js';
import { getProductosBajosAdminHTML }   from './views/productosBajosView_admin.js';
import { getProveedoresAdminHTML }      from './views/proveedoresView_admin.js';
import { getNuevoProveedorAdminHTML }   from './views/nuevoProveedorView_admin.js';
import { getReabastecerProveedorAdminHTML } from './views/reabastecerProveedorView_admin.js';
import { getActividadAdminHTML } from './views/actividadView_admin.js';
import { getEmpleadosHTML }         from './views/empleadosView.js';

const vistas = {
    dashboard:     getDashboardAdminHTML,
    ventas:        getVentasAdminHTML,
    ventasHoy:     getVentasHoyAdminHTML,
    gananciasMes:  getGananciasMesAdminHTML,
    ventasAnio:    getVentasAnioAdminHTML,
    agregarVenta:  getAgregarVentaAdminHTML,
    editarVenta:   getEditarVentaAdminHTML,
    inventario:       getInventarioAdminHTML,
    agregarProducto:  getAgregarProductoAdminHTML,
    alertasStock:     getAlertasStockAdminHTML,
    productosBajos:   getProductosBajosAdminHTML,
    proveedores:      getProveedoresAdminHTML,
    nuevoProveedor:        getNuevoProveedorAdminHTML,
    reabastecerProveedor:  getReabastecerProveedorAdminHTML,
    empleados:     getEmpleadosHTML,
    actividad:     getActividadAdminHTML,
};

const contenido = document.getElementById('vistaContenido');
const menuItems = document.querySelectorAll('#menuNav li[data-vista]');

/* ── Helpers modales ────────────────────────────────────────────── */
function abrirModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Conectar toggle de estado (modales editar)
    const chk   = m.querySelector('.toggle-check');
    const label = m.querySelector('.toggle-label');
    if (chk && label) {
        // Remover listener previo clonando el nodo
        const nuevoChk = chk.cloneNode(true);
        chk.parentNode.replaceChild(nuevoChk, chk);
        nuevoChk.addEventListener('change', () => {
            label.textContent = nuevoChk.checked ? 'Activo' : 'Inactivo';
            label.style.color = nuevoChk.checked ? '#28a745' : '#6c757d';
        });
    }
}

function cerrarModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'none';
    document.body.style.overflow = '';
}

/* ── Registro de listeners por vista ────────────────────────────── */
function registrarListeners() {

    // ── Accesos rápidos (data-acceso) ──────────────────────────────
    document.querySelectorAll('[data-acceso]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA(btn.dataset.acceso);
        });
    });

    // ── Ventas ─────────────────────────────────────────────────────
    const btnVentasHoy = document.getElementById('btnVentasHoy');
    if (btnVentasHoy) btnVentasHoy.addEventListener('click', () => navegarA('ventasHoy'));

    const btnGananciasMes = document.getElementById('btnGananciasMes');
    if (btnGananciasMes) btnGananciasMes.addEventListener('click', () => navegarA('gananciasMes'));

    const btnVentasAnio = document.getElementById('btnVentasAnio');
    if (btnVentasAnio) btnVentasAnio.addEventListener('click', () => navegarA('ventasAnio'));

    const btnRegresar = document.getElementById('btnRegresar');
    if (btnRegresar) btnRegresar.addEventListener('click', () => navegarA('ventas'));

    const btnAgregarVenta = document.getElementById('btnAgregarVenta');
    if (btnAgregarVenta) btnAgregarVenta.addEventListener('click', () => navegarA('agregarVenta'));

    const btnEditarVenta = document.getElementById('btnEditarVenta');
    if (btnEditarVenta) btnEditarVenta.addEventListener('click', () => navegarA('editarVenta'));

    // ── Modales empleados: abrir ───────────────────────────────────
    // Botón "Nuevo Empleado"
    const btnNuevoEmpleado = document.getElementById('btnNuevoEmpleado');
    if (btnNuevoEmpleado) {
        btnNuevoEmpleado.addEventListener('click', () => abrirModal('modalNuevoUsuario'));
    }

    // Botones "Editar" de cada card (data-target-modal="modalEditarN")
    document.querySelectorAll('.btn-abrir-modal').forEach(btn => {
        btn.addEventListener('click', () => abrirModal(btn.dataset.targetModal));
    });

    // ── Modales empleados: cerrar ──────────────────────────────────
    // Botones "Cancelar" dentro de cualquier modal
    document.querySelectorAll('.btn-cerrar-modal').forEach(btn => {
        btn.addEventListener('click', () => cerrarModal(btn.dataset.targetModal));
    });

    // Click en el overlay oscuro de cualquier modal
    document.querySelectorAll('[id^="modal"]').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) cerrarModal(modal.id);
        });
    });
}

/* ── Navegación ─────────────────────────────────────────────────── */
function navegarA(nombre) {
    const generarHTML = vistas[nombre];
    if (!generarHTML) return;

    contenido.style.opacity = '0';
    setTimeout(() => {
        contenido.innerHTML = generarHTML();
        contenido.style.opacity = '1';
        contenido.classList.remove('vista-fade');
        void contenido.offsetWidth;
        contenido.classList.add('vista-fade');
        registrarListeners();
    }, 150);

    // Marca ítem activo en el menú principal
    menuItems.forEach(item => {
        item.classList.toggle('activo', item.dataset.vista === nombre);
    });

    // Sub-vistas de ventas → mantener "ventas" activo
    if (['ventasHoy', 'gananciasMes', 'ventasAnio', 'agregarVenta', 'editarVenta'].includes(nombre)) {
        menuItems.forEach(item => item.classList.toggle('activo', item.dataset.vista === 'ventas'));
    }

    // Sub-vistas de inventario → mantener "inventario" activo
    if (['agregarProducto', 'alertasStock', 'productosBajos'].includes(nombre)) {
        menuItems.forEach(item => item.classList.toggle('activo', item.dataset.vista === 'inventario'));
    }

    // Sub-vistas de proveedores → mantener "proveedores" activo
    if (['nuevoProveedor', 'reabastecerProveedor'].includes(nombre)) {
        menuItems.forEach(item => item.classList.toggle('activo', item.dataset.vista === 'proveedores'));
    }
}

/* ── Listeners del menú lateral ─────────────────────────────────── */
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navegarA(item.dataset.vista);
    });
});

/* ── Carga inicial ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    navegarA('dashboard');
});