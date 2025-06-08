export default function About() {
  return (
    <>
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-2xl">¿Qué es Carta?</h2>
        <p>
          Es un frontal alternativo para RTVE Play, es decir, un sitio web para
          utilizar el servicio con{' '}
          <b>una interfaz más sencilla, ligera, simple y rápida</b>. Además,
          cualquiera puede ayudar a mejorarlo, es de código abierto.
        </p>
        <p>
          No muestra anuncios, ni te invita a registrarte, ni usa cookies, ni
          recoge datos personales sobre ti.
        </p>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-xl">¿Qué hace Carta?</h2>
        <div>
          Puedes:
          <ul className="list-inside list-disc">
            <li>
              Ver la página principal, que incluye los recursos recomendados por
              RTVE y los canales en directo
            </li>
            <li>Buscar programas, vídeos, y otros {'"contenidos"'}</li>
            <li>Ver la lista de temporadas y capítulos de un programa</li>
            <li>Reproducir vídeos</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-xl">Limitaciones</h2>
        <p>
          Por motivos de derechos de autor o de licencia de reproducción,
          algunos recursos audiovisuales no pueden reproducirse. Desde el menú
          superior verás opciones para usar el reproductor de RTVE (mediante un
          iframe) o para abrir la página correspondiente de la web de RTVE Play.
        </p>
        <p>
          Los subtítulos y los recursos de audio (radio) aún no están
          soportados.
        </p>
      </div>
      <div className="p-4">
        Creado por{' '}
        <a
          href="https://github.com/alvvaro"
          target="_blank"
          className="hover:underline"
        >
          @alvvaro
        </a>
      </div>
      <div className="p-4">
        <p>
          Ni este proyecto ni su autor se reservan ningún derecho sobre los
          recursos audiovisuales que en este sitio web se muestran.
        </p>
        <p>
          Publicado bajo licencia{' '}
          <a
            href="https://github.com/alvvaro/carta/blob/main/LICENSE"
            target="_blank"
            className="hover:underline"
          >
            GNU Affero General Public, versión 3.
          </a>
        </p>
      </div>
    </>
  );
}
