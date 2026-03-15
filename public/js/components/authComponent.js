// js/components/authComponent.js

import { authTemplate } from '../templates/authTemplate.js';

const authForm = document.getElementById('authForm');

function renderLogin() {
    authForm.innerHTML = authTemplate.login;
    document.getElementById('irRegistro').addEventListener('click', (e) => {
        e.preventDefault();
        renderRegistro();
    });
}

function renderRegistro() {
    authForm.innerHTML = authTemplate.register;
    document.getElementById('irLogin').addEventListener('click', (e) => {
        e.preventDefault();
        renderLogin();
    });
}

document.addEventListener('DOMContentLoaded', renderLogin);