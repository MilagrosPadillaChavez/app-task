document.addEventListener("DOMContentLoaded", function () {
    viewAlert('success', 'Bienvenido a tu lista de tareas');
});

function viewAlert (type, message) {
    const alterContainer = document.querySelector(".alert-container");
    const alert = document.createElement("div");
    alert.classList.add("custom-alert",`alert-${type}`);
    alert.textContent = message;
    alterContainer.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 4000);
}