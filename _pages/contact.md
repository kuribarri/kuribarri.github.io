---
layout: page
title: Contacto
description: Conecta conmigo de forma segura y directa.
permalink: /contacto/
nav: true
nav_order: 7
---

## Hablemos

¿Tienes una buena idea para compartir? ¿Comentario sobre algo que escribí? ¡Házmelo saber aquí!
Prefiero la comunicación directa. 
Si buscas privacidad, Telegram es mi canal preferido.

> 🛡️ **Privacidad garantizada:** 

<div class="telegram-card" style="background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 12px; padding: 2.5rem; text-align: center; margin-top: 2rem; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
  
  <!-- Icono Principal -->
  <div style="margin-bottom: 1rem;">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#0088cc">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.442-.751-.244-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.119.098.152.228.166.319.016.101.017.205.011.319z"/>
    </svg>
  </div>

  <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--global-text-color);">Contacto vía Telegram</h3>
  <p style="color: var(--global-text-muted); margin-bottom: 1.5rem;">Respuesta rápida y cifrada.</p>
  
  <!-- Botón -->
  <a href="https://t.me/{{ site.params.contact.telegram }}" 
     target="_blank" 
     rel="noopener noreferrer nofollow"
     class="btn btn-primary telegram-btn"
     style="background-color: #0088cc !important; border-color: #0088cc !important; color: white !important; padding: 10px 25px; border-radius: 50px; font-weight: 600; margin-bottom: 2rem; display: inline-block;">
     Iniciar conversación
  </a>

  <!-- Separador elegante -->
  <hr style="border: 0; border-top: 1px solid var(--global-divider-color); margin: 2rem 0;">

  <!-- Sección QR -->
  <p style="font-size: 0.9rem; color: var(--global-text-muted); margin-bottom: 1rem;">O escanea para abrir en móvil:</p>
  
  <div style="background: white; padding: 10px; border-radius: 8px; display: inline-block;">
    <!-- Este enlace genera el QR automáticamente con tu usuario -->
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://t.me/{{ site.params.contact.telegram }}&color=0088cc&bgcolor=ffffff" 
         alt="QR Code Telegram" 
         style="width: 150px; height: 150px;">
  </div>

</div>