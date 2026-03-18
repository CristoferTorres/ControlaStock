// js/router.js
// Maneja la navegación entre vistas del dashboard

import { getDashboardHTML }  from './views/dashboardView.js';
import { getVentasHTML }     from './views/ventasView.js';
import { getInventarioHTML, getReportesHTML, getActividadHTML } from './views/placeholderViews.js';

// Mapa de vistas disponibles
const vistas = {
    dashboard:  getDashboardHTML,
    ventas:     getVentasHTML,
    inventario: getInventarioHTML,
    reportes:   getReportesHTML,
    actividad:  getActividadHTML,
};

const contenido = document.getElementById('vistaContenido');
const menuItems = document.querySelectorAll('#menuNav li[data-vista]');

/**
 * Renderiza la vista indicada y actualiza el estado del menú.
 * @param {string} nombre - clave de la vista en el mapa `vistas`
 */
function navegarA(nombre) {
    const generarHTML = vistas[nombre];
    if (!generarHTML) return;

    // Actualizar contenido con animación
    contenido.style.opacity = '0';
    setTimeout(() => {
        contenido.innerHTML = generarHTML();
        contenido.style.opacity = '1';
        contenido.style.animation = 'none';
        contenido.offsetHeight; // reflow para reiniciar animación
        contenido.style.animation = '';
        contenido.classList.remove('vista-fade');
        void contenido.offsetWidth;
        contenido.classList.add('vista-fade');

        // Registrar listeners internos (ej: acceso rápido del dashboard)
        registrarAccesosRapidos();
    }, 150);

    // Marcar ítem activo en el menú
    menuItems.forEach(item => {
        item.classList.toggle('activo', item.dataset.vista === nombre);
    });
}

/**
 * Los botones de "Acceso Rápido" del dashboard también navegan.
 */
function registrarAccesosRapidos() {
    document.querySelectorAll('[data-acceso]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navegarA(btn.dataset.acceso);
        });
    });
}

// ── Listeners del menú lateral ──────────────────────────
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        navegarA(item.dataset.vista);
    });
});

// ── Carga inicial ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    navegarA('dashboard');
});