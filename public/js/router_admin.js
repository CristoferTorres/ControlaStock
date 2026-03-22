// js/router_admin.js
// Mismo patrón que router.js — maneja la navegación del dashboard Administrador

import { getDashboardAdminHTML } from './views/dashboardAdminView.js';
import { getVentasHTML }         from './views/ventasView.js';
import { getInventarioHTML, getActividadHTML } from './views/placeholderViews.js';
import { getEmpleadosHTML }      from './views/empleadosView.js';

const vistas = {
    dashboard:  getDashboardAdminHTML,
    ventas:     getVentasHTML,
    inventario: getInventarioHTML,
    empleados:  getEmpleadosHTML,
    actividad:  getActividadHTML,
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
        registrarAccesosRapidos();
    }, 150);

    menuItems.forEach(item => {
        item.classList.toggle('activo', item.dataset.vista === nombre);
    });
}

function registrarAccesosRapidos() {
    document.querySelectorAll('[data-acceso]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA(btn.dataset.acceso);
        });
    });
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