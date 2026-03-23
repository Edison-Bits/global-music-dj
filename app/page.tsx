"use client";
import { useState } from 'react';

type ItemData = {
  titulo: string;
  autor: string;
  portada: string;
  link: string;
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

  const contenidoActual = obtenerContenido();
  const itemSeleccionado = packAbierto && contenidoActual ? contenidoActual[packAbierto] : null;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden flex flex-col selection:bg-red-600 selection:text-white">
      
      {/* NAVEGACIÓN SEMÁNTICA CON GLASSMORPHISM MEJORADO */}
      <nav className="p-4 bg-black/70 backdrop-blur-xl border-b border-red-900/30 sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          
          {/* Logo animado */}
          <button 
            onClick={cerrarSeccion}
            className="flex flex-col items-center md:items-start text-left focus:outline-none group active:scale-95 transition-transform duration-300"
            aria-label="Volver al inicio"
          >
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:from-white group-hover:to-white transition-all duration-500 uppercase">
              PERU <span className="text-red-600 group-hover:text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">MUSIC DJ</span>
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1 group-hover:text-zinc-400 transition-colors">
              exclusive
            </span>
          </button>

          {/* Botones de menú con glow y feedback táctil */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-auto text-[10px] md:text-xs font-black uppercase tracking-widest">
            {SECCIONES.map((item) => (
              <button 
                key={item} 
                onClick={() => { setSeccionAbierta(item); setPackAbierto(null); }} 
                className={`border px-4 py-2.5 rounded-xl transition-all duration-300 flex-grow md:flex-grow-0 text-center shadow-lg active:scale-90 focus:outline-none touch-manipulation
                  ${seccionAbierta === item 
                    ? 'bg-red-600 text-white border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                    : 'bg-[#0a0f1a] text-zinc-400 border-zinc-800 hover:border-red-600/50 hover:text-white hover:bg-zinc-900 hover:shadow-[0_0_10px_rgba(220,38,38,0.2)]'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-4 py-12 flex-grow w-full relative">
        
        {/* Fondo decorativo sutil (luces) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-red-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* ESTADO 1: PANTALLA DE INICIO CON ANIMACIÓN DE PULSO */}
        {!seccionAbierta && (
          <header className="py-24 md:py-32 text-center transition-all duration-700 ease-out transform translate-y-0 opacity-100">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl">
              PERU <br/> 
              <span className="text-white relative inline-block">
                MUSIC DJ
                {/* Brillo detrás del texto principal */}
                <span className="absolute -inset-4 bg-red-600/20 blur-2xl -z-10 animate-pulse rounded-full"></span>
              </span>
            </h2>
            <p className="text-red-500 font-black tracking-[0.5em] md:text-2xl uppercase text-xs animate-pulse">
              exclusive
            </p>
          </header>
        )}

        {/* ESTADO 2: SECCIÓN ABIERTA */}
        {seccionAbierta && (
          <section className="transition-all duration-500 animate-fade-in-up">
            
            {!packAbierto && (
              <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-4 border-red-600 pl-5">
                <h3 className="text-4xl md:text-5xl font-black uppercase text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
                  {seccionAbierta}
                </h3>
                <button 
                  onClick={cerrarSeccion} 
                  className="text-red-500 hover:text-white hover:bg-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] font-black uppercase text-xs border border-red-600/50 px-6 py-3 rounded-full transition-all duration-300 self-start md:self-auto active:scale-90"
                >
                  ← VOLVER
                </button>
              </div>
            )}

            {!contenidoActual ? (
              <div className="py-24 text-center opacity-40">
                <span className="text-xl md:text-2xl font-black uppercase tracking-widest text-zinc-500 animate-pulse">
                  PRÓXIMAMENTE EN {seccionAbierta.toUpperCase()}...
                </span>
              </div>
            ) : !packAbierto ? (
              
              /* GRID DE TARJETAS (Packs) CON EFECTOS DE HOVER */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {Object.entries(contenidoActual).map(([key, item]) => (
                  <article 
                    key={key} 
                    className="bg-[#0a0f1a]/80 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-[2rem] flex flex-col group hover:border-red-500/50 hover:bg-[#0c1322] transition-all duration-500 shadow-xl hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.3)] hover:-translate-y-2 overflow-hidden"
                  >
                    <figure className="aspect-square w-full mb-6 overflow-hidden rounded-3xl border border-zinc-800/50 bg-[#050505] flex items-center justify-center relative">
                      {/* Overlay oscuro que desaparece al pasar el mouse */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={item.portada} 
                        alt={`Portada de ${item.titulo}`} 
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 relative z-0" 
                        loading="lazy"
                      />
                    </figure>
                    <div className="flex-grow flex flex-col justify-end">
                      <h4 className="text-white font-black text-lg mb-1 uppercase leading-tight line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
                        {item.titulo}
                      </h4>
                      <p className="text-zinc-500 text-[10px] font-bold mb-5 uppercase tracking-wider">
                        {item.autor}
                      </p>
                      <button 
                        onClick={() => setPackAbierto(key)} 
                        className="w-full bg-zinc-900 border border-zinc-700 text-white font-black text-xs uppercase py-4 rounded-xl group-hover:bg-red-600 group-hover:border-red-500 transition-all duration-300 shadow-lg active:scale-95 touch-manipulation"
                      >
                        VER CONTENIDO →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              
              /* DETALLE DEL PACK CON ANIMACIÓN Y BOTÓN NEÓN */
              itemSeleccionado && (
                <article className="max-w-2xl mx-auto bg-gradient-to-b from-[#0f1626] to-[#05080f] border border-zinc-800/80 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center relative overflow-hidden animate-fade-in-up">
                  {/* Luz de fondo en el detalle */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-red-600/10 blur-3xl rounded-full pointer-events-none"></div>

                  <button 
                    onClick={() => setPackAbierto(null)} 
                    className="mb-8 text-zinc-500 hover:text-white font-black uppercase text-xs flex items-center gap-2 transition-colors focus:outline-none mx-auto lg:mx-0 active:scale-90"
                  >
                    <span className="text-red-600 text-lg leading-none">←</span> VOLVER A {seccionAbierta.toUpperCase()}
                  </button>

                  <figure className="flex justify-center mb-8 relative group">
                    <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={itemSeleccionado.portada} 
                      alt={`Portada de ${itemSeleccionado.titulo}`}
                      className="w-full max-w-[280px] md:max-w-xs rounded-3xl shadow-2xl border border-zinc-700/50 transform group-hover:scale-105 transition-transform duration-500 relative z-10" 
                    />
                  </figure>

                  <h4 className="text-white font-black text-3xl md:text-4xl mb-3 uppercase drop-shadow-md">
                    {itemSeleccionado.titulo}
                  </h4>
                  <p className="text-zinc-400 text-xs md:text-sm font-bold mb-10 uppercase tracking-[0.2em]">
                    Material exclusivo de <span className="text-white">{itemSeleccionado.autor}</span>
                  </p>

                  {/* Botón de Descarga Efecto Neón Spotify/Walker */}
                  <a 
                    href={itemSeleccionado.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative inline-flex items-center justify-center bg-[#1ed760] text-black font-black text-lg md:text-xl uppercase py-5 px-10 rounded-2xl gap-3 hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(30,215,96,0.4)] hover:shadow-[0_0_30px_rgba(30,215,96,0.6)] w-full sm:w-auto touch-manipulation group"
                  >
                    <span className="group-hover:-translate-y-1 transition-transform duration-300 text-2xl">📥</span> 
                    DESCARGAR AHORA
                  </a>
                </article>
              )
            )}
          </section>
        )}
      </main>

      {/* FOOTER MEJORADO */}
      <footer className="py-12 text-center border-t border-zinc-900 bg-black mt-auto relative z-10">
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.3em] hover:text-zinc-400 transition-colors">
          © 2026 PERU MUSIC DJ NETWORK | PUNO, PERÚ.
        </p>
      </footer>

      {/* Agregar esta clase al CSS global (globals.css) para que la animación funcione, o usa Tailwind estándar */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}} />
    </div>
  );
}