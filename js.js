window.addEventListener('onEventReceived', function (obj) {
  if (obj.detail.listener === 'goal') {

    const current = obj.detail.event.amount;
    const target = obj.detail.event.goal;

    // Evita errores si el goal aún no existe
    if (!target || target <= 0) return;

    // Porcentaje del goal (0 → 1)
    const percent = Math.min(current / target, 1);

    // ALTURA DEL CONTENEDOR (igual que en CSS)
    const containerHeight = 600;

    // Mover el líquido hacia arriba
    const liquid = document.getElementById('liquid');
    liquid.style.transform =
      `translateY(${(1 - percent) * containerHeight}px)`;
  }
});
