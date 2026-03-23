// js/router_admin.js

import { getDashboardAdminHTML }    from './views/dashboardAdminView.js';
import { getVentasAdminHTML }       from './views/ventasView_admin.js';
import { getVentasHoyAdminHTML }    from './views/ventasHoyView_admin.js';
import { getGananciasMesAdminHTML } from './views/gananciasMesView_admin.js';
import { getVentasAnioAdminHTML }   from './views/ventasAnioView_admin.js';
import { getAgregarVentaAdminHTML } from './views/agregarVentaView_admin.js';
import { getEditarVentaAdminHTML }  from './views/editarVentaView_admin.js';
import { getInventarioHTML, getActividadHTML } from './views/placeholderViews.js';
import { getEmpleadosHTML }         from './views/empleadosView.js';

const vistas = {
    dashboard:     getDashboardAdminHTML,
    ventas:        getVentasAdminHTML,
    ventasHoy:     getVentasHoyAdminHTML,
    gananciasMes:  getGananciasMesAdminHTML,
    ventasAnio:    getVentasAnioAdminHTML,
    agregarVenta:  getAgregarVentaAdminHTML,
    editarVenta:   getEditarVentaAdminHTML,
    inventario:    getInventarioHTML,
    empleados:     getEmpleadosHTML,
    actividad:     getActividadHTML,
};

const contenido = document.getElementById('vistaContenido');
const menuItems = document.querySelectorAll('#menuNav li[data-vista]');

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

    // Solo marca activo si es una vista del menú principal
    menuItems.forEach(item => {
        item.classList.toggle('activo', item.dataset.vista === nombre);
    });

    // Si es sub-vista, mantener "ventas" activo en el menú
    if (nombre === 'ventasHoy' || nombre === 'gananciasMes' || nombre === 'ventasAnio' || nombre === 'agregarVenta' || nombre === 'editarVenta') {
        menuItems.forEach(item => {
            item.classList.toggle('activo', item.dataset.vista === 'ventas');
        });
    }
}

function registrarListeners() {
    // Accesos rápidos del dashboard
    document.querySelectorAll('[data-acceso]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA(btn.dataset.acceso);
        });
    });

    // Botones Gestionar de las tarjetas de ventas
    const btnVentasHoy = document.getElementById('btnVentasHoy');
    if (btnVentasHoy) {
        btnVentasHoy.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA('ventasHoy');
        });
    }

    const btnGananciasMes = document.getElementById('btnGananciasMes');
    if (btnGananciasMes) {
        btnGananciasMes.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA('gananciasMes');
        });
    }

    const btnVentasAnio = document.getElementById('btnVentasAnio');
    if (btnVentasAnio) {
        btnVentasAnio.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA('ventasAnio');
        });
    }

    const btnRegresar = document.getElementById('btnRegresar');
    if (btnRegresar) {
        btnRegresar.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA('ventas');
        });
    }

    const btnAgregarVenta = document.getElementById('btnAgregarVenta');
    if (btnAgregarVenta) {
        btnAgregarVenta.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA('agregarVenta');
        });
    }

    const btnEditarVenta = document.getElementById('btnEditarVenta');
    if (btnEditarVenta) {
        btnEditarVenta.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA('editarVenta');
        });
    }
}

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navegarA(item.dataset.vista);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    navegarA('dashboard');
});