// js/views/placeholderViews.js
// Vistas pendientes — reemplazar con el HTML real cuando estén las maquetas

export function getInventarioHTML() {
    return _placeholder('fa-boxes', 'Inventario', 'inventario');
}

export function getReportesHTML() {
    return _placeholder('fa-chart-bar', 'Reportes', 'reportes');
}

export function getActividadHTML() {
    return _placeholder('fa-history', 'Actividad', 'actividad');
}

function _placeholder(icono, nombre, vista) {
    return `
    <div class="vista-placeholder">
        <i class="fas ${icono} text-muted"></i>
        <h4 class="text-muted">${nombre}</h4>
        <p class="text-muted small">Vista en construcción — próximamente disponible.</p>
    </div>
    `;
}