/* ── Servicios accordion ── */
document.querySelectorAll('.servicio__header').forEach(btn => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // cierra todos
    document.querySelectorAll('.servicio__header').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });

    // abre el clickado si estaba cerrado
    if (!isOpen) btn.setAttribute('aria-expanded', 'true');
  });
});
