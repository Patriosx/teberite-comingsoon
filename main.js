/* ── Servicios accordion ── */
document.querySelectorAll('.servicio__header').forEach((btn) => {
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true'

    // cierra todos
    document.querySelectorAll('.servicio__header').forEach((b) => {
      b.setAttribute('aria-expanded', 'false')
    })

    // abre el clickado si estaba cerrado
    if (!isOpen) btn.setAttribute('aria-expanded', 'true')
  })
})
document.getElementById('my_form').addEventListener('submit', function (event) {
  event.preventDefault() // Evita que el formulario se envíe de forma tradicional

  // Aquí iría la lógica de envío (fetch, axios, etc.)

  // Redirección manual tras el éxito
  window.location.href = 'gracias.html'
})
