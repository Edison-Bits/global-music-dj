"use client";
import { useState } from 'react';

type ItemData = {
  titulo: string;
  autor: string;
  portada: string;
  link: string;
};

type Comentario = {
  nombre: string;
  texto: string;
  fecha: string;
};

type SeccionesValidas = 'Librerías' | 'Samples' | 'Efectos' | 'Pack' | 'Set DJ' | 'Colecciones DJ' | 'Backup';

const packs: Record<string, ItemData> = {
  ayacucho: { titulo: "PACK CARNAVALES AYACUCHANOS 2026", autor: "DJ VENTU", portada: "/portada-ayacucho.jpg", link: "https://drive.google.com/drive/folders/1YblcId_Jzh3pRRk5Y-028qd9VS7T-RXM?usp=sharing" },
  alan: { titulo: "PACK STYLE ALAN WALKER 2026", autor: "DJ ENZO VIP", portada: "/portada-alan.png", link: "https://drive.google.com/drive/folders/1_-vzYZTi4sG-fQSnl8epaJg31ymgOnip?usp=sharing" },
  sureno: { titulo: "PACK SUREÑO II 2026", autor: "DJ ENZO VIP", portada: "/portada-sureno.png", link: "https://drive.google.com/drive/folders/1erG_LvX_ml5DnTL7dIv-E3ZD-sItK2I1?usp=sharing" },
  sureno1: { titulo: "PACK SUREÑO I - 2026", autor: "DJ ENZO VIP", portada: "/portada-sureno-1.png", link: "https://drive.google.com/drive/folders/1pUZ9CiUj8VpYhwui4U9SHtFPMbVwb02j?usp=sharing" },
  genesis: { titulo: "PACK DE GRUPO GENESIS", autor: "DJ ENZO VIP", portada: "/portada-genesis.png", link: "https://drive.google.com/drive/folders/1fGKZH_COilJrVwERBv1OyJTj7268zp8s?usp=sharing" }
};

const backups: Record<string, ItemData> = {
  willy: { titulo: "BACKUP DJ WILLY CUSCO", autor: "DJ WILLY CUSCO", portada: "/portada-willy.png", link: "https://drive.google.com/drive/folders/1x1TAn93SdCpoNlmA91E_XxPzvxvpiyka?usp=drive_link" },
  gonz: { titulo: "BACKUP DJ GONZ", autor: "DJ GONZ", portada: "/portada-gonz.png", link: "https://drive.google.com/drive/folders/1nife5YbCQ_0o11msd9pDOrtHvVxbRvB9?usp=drive_link" },
  ferty: { titulo: "MINI BACKUP DJ FERTY 2025", autor: "DJ FERTY", portada: "/portada-ferty.png", link: "https://drive.google.com/drive/folders/1pOzqJ8jjAuFbJxfVi5z9dleWMUcSdLvD?usp=drive_link" }
};

const colecciones: Record<string, ItemData> = {
  elmer: { titulo: "COLECCION DE ELMER MIX 2025 VOL 01 - 07", autor: "ELMER MIX", portada: "/portada-elmer.png", link: "https://drive.google.com/drive/folders/1iiVLoppCnWGIt7yxjz52mWp8kdnv2jQg?usp=drive_link" }
};

const SECCIONES: SeccionesValidas[] = ['Librerías', 'Samples', 'Efectos', 'Pack', 'Set DJ', 'Colecciones DJ', 'Backup'];

export default function Home() {
  const [seccionAbierta, setSeccionAbierta] = useState<SeccionesValidas | null>(null);
  const [packAbierto, setPackAbierto] = useState<string | null>(null);
  
  // Estado para manejar los comentarios por cada pack
  const [comentarios, setComentarios] = useState<Record<string, Comentario[]>>({});
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoComentario, setNuevoComentario] = useState('');

  const cerrarSeccion = () => {
    setSeccionAbierta(null);
    setPackAbierto(null);
  };

  const obtenerContenido = (): Record<string, ItemData> | null => {
    switch (seccionAbierta) {
      case 'Pack': return packs;
      case 'Backup': return backups;
      case 'Colecciones DJ': return colecciones;
      default: return null;
    }
  };

  const manejarEnvioComentario = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoNombre.trim() || !nuevoComentario.trim() || !packAbierto) return;

    const comentarioData: Comentario = {
      nombre: nuevoNombre,
      texto: nuevoComentario,
      fecha: new Date().toLocaleDateString()
    };

    setComentarios(prev => ({
      ...prev,
      [packAbierto]: [...(prev[packAbierto] || []), comentarioData]
    }));

    setNuevoNombre('');
    setNuevoComentario('');
  };

  const contenidoActual = obtenerContenido();
  const itemSeleccionado = packAbierto && contenidoActual ? contenidoActual[packAbierto] : null;

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans overflow-x-hidden flex flex-col selection:bg-red-600/30 selection:text-red-200">
      
      {/* NAVBAR PREMIUM */}
      <nav className="px-6 py-4 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <button 
            onClick={cerrarSeccion}
            className="flex flex-col items-center lg:items-start text-left focus:outline-none group transition-transform duration-300"
          >
            <h1 className="text-2xl font-black tracking-tight text-white uppercase flex items-center gap-2">
              PERU <span className="text-red-600">MUSIC DJ</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">
              Premium Network
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-2 w-full lg:w-auto text-[11px] font-semibold uppercase tracking-wider">
            {SECCIONES.map((item) => (
              <button 
                key={item} 
                onClick={() => { setSeccionAbierta(item); setPackAbierto(null); }} 
                className={`px-4 py-2 rounded-full transition-all duration-300 flex-grow sm:flex-grow-0 text-center border focus:outline-none
                  ${seccionAbierta === item 
                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                    : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto w-full flex-grow relative pb-20">
        
        {/* ESTADO 1: PORTADA PROFESIONAL */}
        {!seccionAbierta && (
          <div className="px-4 py-8 lg:py-16 animate-fade-in-up">
            <header 
              className="relative w-full h-[60vh] lg:h-[75vh] min-h-[500px] flex flex-col justify-center items-center rounded-3xl lg:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
              style={{ 
                backgroundImage: "url('/bg-principal.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Capa oscura sofisticada */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent z-0"></div>
              <div className="absolute inset-0 bg-black/40 z-0"></div>

              <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <span className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                  Plataforma Exclusiva
                </span>
                <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.9] text-white drop-shadow-2xl">
                  PERU <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">MUSIC DJ</span>
                </h2>
                <p className="mt-6 text-zinc-300 max-w-lg mx-auto text-sm md:text-base font-light tracking-wide">
                  Descarga las mejores librerías, samples y packs de la red. Calidad de estudio para DJs profesionales.
                </p>
              </div>
            </header>
          </div>
        )}

        {/* ESTADO 2: SECCIÓN ABIERTA */}
        {seccionAbierta && (
          <section className="px-4 py-12 transition-all duration-500 animate-fade-in-up">
            
            {!packAbierto && (
              <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <h3 className="text-3xl lg:text-5xl font-black uppercase text-white tracking-tight">
                    {seccionAbierta}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-2">Explora nuestro catálogo disponible.</p>
                </div>
                <button 
                  onClick={cerrarSeccion} 
                  className="text-zinc-400 hover:text-white font-semibold text-sm flex items-center gap-2 transition-colors group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al Inicio
                </button>
              </div>
            )}

            {!contenidoActual ? (
              <div className="py-32 text-center flex flex-col items-center justify-center border border-dashed border-white/10 rounded-3xl bg-white/[0.02]">
                <span className="text-xl font-medium text-zinc-500">Contenido en desarrollo</span>
                <p className="text-zinc-600 text-sm mt-2">Próximamente disponible en {seccionAbierta}</p>
              </div>
            ) : !packAbierto ? (
              
              /* GRID DE TARJETAS PREMIUM */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {Object.entries(contenidoActual).map(([key, item]) => (
                  <article 
                    key={key} 
                    className="bg-[#121214] border border-white/5 p-5 rounded-3xl flex flex-col group hover:border-red-500/30 hover:bg-[#18181b] transition-all duration-300 shadow-lg cursor-pointer"
                    onClick={() => setPackAbierto(key)}
                  >
                    <figure className="aspect-[4/3] w-full mb-5 overflow-hidden rounded-2xl bg-black relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.portada} 
                        alt={`Portada de ${item.titulo}`} 
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                        loading="lazy"
                      />
                    </figure>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider mb-2 block">
                          {item.autor}
                        </span>
                        <h4 className="text-white font-bold text-lg leading-snug line-clamp-2 mb-4 group-hover:text-red-400 transition-colors">
                          {item.titulo}
                        </h4>
                      </div>
                      <div className="flex items-center text-xs font-semibold text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">
                        Ver Detalles <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              
              /* VISTA DE DETALLE DEL PACK + COMENTARIOS */
              itemSeleccionado && (
                <div className="max-w-4xl mx-auto animate-fade-in-up">
                  <button 
                    onClick={() => setPackAbierto(null)} 
                    className="mb-8 text-zinc-400 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors group"
                  >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Regresar a {seccionAbierta}
                  </button>

                  <div className="bg-[#121214] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
                    <div className="p-8 lg:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start">
                      <figure className="w-full max-w-[250px] shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={itemSeleccionado.portada} 
                          alt={`Portada de ${itemSeleccionado.titulo}`}
                          className="w-full rounded-2xl shadow-xl border border-white/10" 
                        />
                      </figure>

                      <div className="flex-grow text-center md:text-left">
                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-bold uppercase tracking-wider mb-4">
                          Autor: {itemSeleccionado.autor}
                        </span>
                        <h4 className="text-white font-black text-3xl lg:text-4xl leading-tight mb-6">
                          {itemSeleccionado.titulo}
                        </h4>
                        
                        <a 
                          href={itemSeleccionado.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-bold text-sm lg:text-base uppercase py-4 px-8 rounded-xl gap-3 transition-colors w-full sm:w-auto"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                          Descargar Archivo
                        </a>
                      </div>
                    </div>

                    {/* SECCIÓN DE COMENTARIOS */}
                    <div className="border-t border-white/5 bg-[#0e0e11] p-8 lg:p-12">
                      <h5 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        Comentarios ({comentarios[packAbierto]?.length || 0})
                      </h5>

                      {/* Lista de comentarios */}
                      <div className="space-y-4 mb-8">
                        {(!comentarios[packAbierto] || comentarios[packAbierto].length === 0) ? (
                          <p className="text-zinc-500 text-sm italic">Sé el primero en comentar sobre este pack.</p>
                        ) : (
                          comentarios[packAbierto].map((comentario, index) => (
                            <div key={index} className="bg-white/5 border border-white/5 p-4 rounded-xl">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-sm text-white">{comentario.nombre}</span>
                                <span className="text-[10px] text-zinc-500">{comentario.fecha}</span>
                              </div>
                              <p className="text-zinc-300 text-sm">{comentario.texto}</p>
                            </div>
                          ))
                        )}
                      </div>

                      {/* Formulario para comentar */}
                      <form onSubmit={manejarEnvioComentario} className="flex flex-col gap-3">
                        <input 
                          type="text" 
                          placeholder="Tu nombre..." 
                          value={nuevoNombre}
                          onChange={(e) => setNuevoNombre(e.target.value)}
                          className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                          required
                        />
                        <textarea 
                          placeholder="¿Qué te pareció este material?" 
                          value={nuevoComentario}
                          onChange={(e) => setNuevoComentario(e.target.value)}
                          rows={3}
                          className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                          required
                        ></textarea>
                        <button 
                          type="submit" 
                          className="self-end bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors"
                        >
                          Publicar Comentario
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )
            )}
          </section>
        )}
      </main>

      {/* FOOTER MINIMALISTA */}
      <footer className="py-8 text-center border-t border-white/5 bg-[#09090b]">
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-widest">
          © {new Date().getFullYear()} PERU MUSIC DJ | Ingeniería y Desarrollo.
        </p>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </div>
  );
}