function mostrarPDF(nombreArchivo) {
  document.getElementById("contenido").innerHTML = `
    <h2>Mi Currículum</h2>
    <iframe src="${nombreArchivo}"></iframe>
  `;
}

function mostrarContenido(tipo) {
  const contenedor = document.getElementById("contenido");

  if (tipo === 'habilidades') {
    contenedor.innerHTML = `
      <h2>Mis Habilidades</h2>
      <ul>
        <li><strong>Diseño web:</strong> Creación de páginas web modernas y responsivas.</li>
        <p>Puedes ver mi trabajo aquí 👉 
          <a href="https://aunclicperu.com/diseno-web/?gad_source=1&gad_campaignid=23159330094&gbraid=0AAAABB0pFSDH-aCSoCIYL0k32FORQjQv-&gclid=Cj0KCQjwvJHIBhCgARIsAEQnWlAHwWParSAM886trbg6YZGqcg-UVgMgb7Op-r9L-xdSr7TnL6KRWP8aAg2kEALw_wcB" 
             target="_blank" class="link-diseño">Ver diseño web</a>
        </p>
        <li>Fotografía y edición</li>
      </ul>
    `;
  } 
  
  else if (tipo === 'educacion') {
    contenedor.innerHTML = `
      <h2>Educación</h2>
      <ul>
        <li><strong>Formación Escolar:</strong> 
          <a href="https://identicole.minedu.gob.pe/colegio/11955930" 
             target="_blank" class="link-diseño">Ver colegio</a>
        </li>
        <li><strong>Educación Superior:</strong> 
          <a href="https://www.deperu.com/educacion/instituto-educacion-superior/iest-manuel-scorza-torre-acobamba-8409#google_vignette" 
             target="_blank" class="link-diseño">IEST Manuel Scorza Torre - Acobamba</a>
        </li>
      </ul>
    `;
  } 
  
  else if (tipo === 'contacto') {
    contenedor.innerHTML = `
      <h2>Contacto</h2>
      <p><strong>Teléfono:</strong> 987128613</p>
      <p><strong>Correo:</strong> tuemail@example.com</p>
      <a href="https://wa.me/51987128613" target="_blank" class="btn-whatsapp">
        Enviar mensaje por WhatsApp
      </a>
    `;
  }
}

