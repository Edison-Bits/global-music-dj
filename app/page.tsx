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
  ferty: { titulo: "MINI BACKUP DJ FERTY 2025", autor: "DJ FERTY", portada: "/portada-ferty.png", link: "https://drive.google.com/drive/folders/1pOzqJ8jjAuFbJxfVi5z9dleWMUcSdLvD?usp=drive_link" },
  lopez: { titulo: "BACKUP DJ LOPEZ", autor: "DJ LOPEZ", portada: "/portada-lopez.png", link: "https://drive.google.com/drive/folders/1imMIi36BoKoQWkvNmmvTWnGjIUGr8c-H?usp=drive_link" } 
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
    /* FONDO REPOTENCIADO: Rojos más intensos y efectos de luz activa */
    <div className="min-h-screen bg-[#070000] bg-power-red-pattern text-zinc-100 font-sans overflow-x-hidden flex flex-col selection:bg-red-600/60 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="px-6 py-4 bg-black/40 backdrop-blur-3xl border-b border-red-900/30 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <button onClick={cerrarSeccion} className="flex flex-col items-center lg:items-start text-left focus:outline-none group">
            <h1 className="text-2xl font-black tracking-tight uppercase flex items-center gap-2 text-white">
              <span className="text-zinc-400 group-hover:text-white transition-colors">PERU</span>
              <span className="relative">
                 <span className="absolute -inset-2 bg-red-600/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                 <span className="relative text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]">MUSIC DJ</span>
              </span>
            </h1>
          </button>

          <div className="flex flex-wrap justify-center gap-4 text-[11px] font-black uppercase tracking-widest p-2">
            {SECCIONES.map((item) => (
              <button 
                key={item} 
                onClick={() => { setSeccionAbierta(item); setPackAbierto(null); }} 
                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 border
                  ${seccionAbierta === item 
                    ? 'text-white scale-105 shadow-[0_0_50px_rgba(255,0,0,0.6)] border-red-500 bg-red-600/20' 
                    : 'text-zinc-300 hover:text-white border-white/5 hover:border-red-500/40 bg-white/5'
                  }`}
              >
                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="w-full flex-grow relative pb-20">
        
        {/* PORTADA PRINCIPAL */}
        {!seccionAbierta && (
          <div className="animate-fade-in">
            <header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden" style={{ backgroundImage: "url('/bg-principal.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070000]/80 to-[#070000] z-0"></div>
              <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/50 bg-red-600/20 text-red-400 text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                  Plataforma Exclusiva
                </span>
                <h2 className="relative font-sans text-7xl md:text-9xl lg:text-[160px] font-extrabold tracking-tighter uppercase leading-[0.85] text-white">
                  <span className="block text-zinc-300">PERU</span>
                  <span className="relative block mt-2 text-transparent bg-clip-text bg-gradient-to-b from-red-400 via-red-600 to-red-800 glitch-neon-text" data-text="MUSIC DJ">MUSIC DJ</span>
                </h2>
              </div>
            </header>
          </div>
        )}

        <div className="max-w-screen-2xl mx-auto w-full px-6 relative z-10">
            {seccionAbierta && (
            <section className="py-16">
                {!packAbierto && (
                <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-b border-red-900/20 pb-10">
                    <div>
                    <h3 className="text-4xl lg:text-6xl font-extrabold uppercase text-white tracking-tight drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">{seccionAbierta}</h3>
                    <p className="text-red-500/70 text-base mt-3 max-w-md font-light italic">Estilo profesional con energía roja.</p>
                    </div>
                    <button onClick={cerrarSeccion} className="text-zinc-400 hover:text-white font-semibold text-xs flex items-center gap-2.5 transition-all group px-5 py-2.5 rounded-full border border-white/5 hover:border-red-500/50 hover:bg-red-600/10">
                    <span className="group-hover:-translate-x-1.5 transition-transform text-red-600">←</span> Regresar
                    </button>
                </div>
                )}

                {contenidoActual && !packAbierto && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Object.entries(contenidoActual).map(([key, item], index) => (
                    <article 
                        key={key} 
                        style={{ animationDelay: `${index * 0.1}s` }}
                        className="animate-card-entry group relative bg-red-950/5 border border-white/5 p-6 rounded-3xl flex flex-col backdrop-blur-md hover:bg-red-600/10 transition-all duration-500 shadow-2xl hover:-translate-y-2 hover:border-red-500/40"
                        onClick={() => setPackAbierto(key)}
                    >
                        {/* Brillo interno de la tarjeta */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <figure className="aspect-square w-full mb-6 overflow-hidden rounded-2xl bg-black/60 relative flex items-center justify-center p-3 border border-red-900/20 shadow-inner">
                            <img src={item.portada} alt={item.titulo} className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110" />
                        </figure>
                        <div className="flex-grow flex flex-col justify-between relative z-10">
                        <div>
                            <span className="text-red-500 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-3 block">{item.autor}</span>
                            <h4 className="text-zinc-100 font-bold text-lg leading-tight line-clamp-2 mb-5 group-hover:text-white transition-colors">{item.titulo}</h4>
                        </div>
                        <div className="flex items-center text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-red-400 pt-4 border-t border-red-900/20">
                            Ver Detalles <span className="ml-2.5 group-hover:translate-x-1.5 transition-transform text-red-600">→</span>
                        </div>
                        </div>
                    </article>
                    ))}
                </div>
                )}

                {itemSeleccionado && packAbierto && (
                    <div className="max-w-5xl mx-auto animate-fade-in-up">
                    <button onClick={() => setPackAbierto(null)} className="mb-10 text-zinc-400 hover:text-white font-semibold text-xs flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/5 hover:border-red-500/40">
                        <span className="text-red-500">←</span> Regresar a {seccionAbierta}
                    </button>
                    <div className="bg-red-950/10 backdrop-blur-xl border border-red-500/20 rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.15)] p-10 lg:p-16 flex flex-col md:flex-row gap-12 items-center">
                        <figure className="w-full max-w-[280px] shrink-0 bg-black/60 rounded-3xl p-3 border border-red-500/20">
                            <img src={itemSeleccionado.portada} alt={itemSeleccionado.titulo} className="w-full h-auto object-contain rounded-2xl shadow-2xl" />
                        </figure>
                        <div className="flex-grow text-center md:text-left">
                            <h4 className="text-white font-extrabold text-4xl lg:text-5xl leading-tight mb-10 tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">{itemSeleccionado.titulo}</h4>
                            <a href={itemSeleccionado.link} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center bg-white text-black font-extrabold py-5 px-10 rounded-2xl gap-3.5 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-red-600/40 active:scale-95">
                                <span className="absolute inset-0 rounded-2xl animate-pulse bg-red-600/10 opacity-0 group-hover:opacity-100"></span>
                                <span>Descargar Archivo</span>
                            </a>
                        </div>
                    </div>
                    </div>
                )}
            </section>
            )}
        </div>
      </main>

      <footer className="py-10 text-center border-t border-red-900/20 bg-black/80 backdrop-blur-md">
        <p className="text-zinc-600 text-[10px] uppercase font-bold tracking-[0.4em]">© 2026 PERU MUSIC DJ | PERU</p>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        /* FONDO POWER RED: Rojo intenso y pulsante */
        .bg-power-red-pattern {
          background-image: 
            radial-gradient(circle at 50% 40%, rgba(220, 38, 38, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 100% 0%, rgba(220, 38, 38, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 0% 100%, rgba(220, 38, 38, 0.08) 0%, transparent 40%),
            linear-gradient(to bottom, #070000, #120000);
          background-attachment: fixed;
        }

        @keyframes cardEntry {
          from { opacity: 0; transform: translateY(40px) scale(0.9); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-card-entry {
          opacity: 0;
          animation: cardEntry 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-up {
          animation: cardEntry 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
        .glitch-neon-text {
          position: relative;
          text-shadow: 0 0 15px rgba(220,38,38,0.7);
        }
      `}} />
    </div>
  );
}