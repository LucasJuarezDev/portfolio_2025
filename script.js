document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que recargue la página

    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Cambiá "tuemail@ejemplo.com" por tu dirección real
    const destino = "tuemail@ejemplo.com";  
    const asunto = "Nuevo mensaje desde el formulario";
    const body = `De: ${email}%0D%0A%0D%0A${mensaje}`;

    // Armamos el enlace mailto
    const mailtoLink = `mailto:${destino}?subject=${encodeURIComponent(asunto)}&body=${body}`;

    // Redirige al mailto (abre Gmail/Outlook configurado en la PC/móvil)
    window.location.href = mailtoLink;

    // Limpia el formulario después
    form.reset();
  });
});