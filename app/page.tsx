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
  candelaria: { 
    titulo: "PACK CANDELARIA 2025", 
    autor: "DJ JHON ERICKSON", 
    portada: "/portada-candelaria.png", 
    link: "https://drive.google.com/drive/folders/1boxs9ehYlW92R6n_OUFyAw6h_b7O_GWE?usp=drive_link" 
  },
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
  elmer: { 
    titulo: "COLECCION DE ELMER MIX 2025 VOL 01 - 07", 
    autor: "ELMER MIX", 
    portada: "/portada-elmer.png", 
    link: "https://drive.google.com/drive/folders/1iiVLoppCnWGIt7yxjz52mWp8kdnv2jQg?usp=drive_link" 
  },
  carlos: { 
    titulo: "COLECCION DJ CARLOS JULIACA 2024", 
    autor: "DJ CARLOS JULIACA", 
    portada: "/portada-carlos.png", 
    link: "#" 
  },
  thony: { 
    titulo: "COLECCION DJ THONY CUSCO 2024", 
    autor: "DJ THONY", 
    portada: "/portada-thony.png", 
    link: "#" 
  }
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
    <div className="min-h-screen bg-[#030000] bg-power-spectral-pattern text-zinc-100 font-sans overflow-x-hidden flex flex-col selection:bg-cyan-600/60 selection:text-white relative animate-spectral-sync-ultra">
      
      <div className="fixed inset-0 z-0 opacity-30 bg-power-spectral-glow"></div>

      <nav className="px-6 py-4 bg-black/70 backdrop-blur-3xl border-b border-spectral sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 relative z-10">
          <button onClick={cerrarSeccion} className="flex flex-col items-center lg:items-start text-left focus:outline-none group">
            <h1 className="text-2xl font-black tracking-tight uppercase flex items-center gap-2 text-white">
              <span className="text-zinc-400 group-hover:text-white transition-colors">PERU</span>
              <span className="relative">
                 <span className="absolute -inset-3 bg-spectral blur-2xl opacity-80 group-hover:opacity-100 transition-opacity"></span>
                 <span className="relative text-spectral drop-shadow-[0_0_20px_currentColor]">MUSIC DJ</span>
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
                    ? 'text-white scale-105 shadow-[0_0_70px_currentColor] border-spectral-active bg-spectral-active/30' 
                    : 'text-zinc-300 hover:text-white border-white/5 hover:border-spectral/60 bg-white/5'
                  }`}
              >
                <span className="relative z-10">{item}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="w-full flex-grow relative pb-20 z-10">
        {!seccionAbierta && (
          <div className="animate-fade-in relative">
            <header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden" style={{ backgroundImage: "url('/bg-principal.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030000]/95 to-[#030000] z-0"></div>
              <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-spectral bg-spectral/20 text-spectral-active text-[11px] font-bold uppercase tracking-widest mb-12 backdrop-blur-md shadow-[0_0_40px_currentColor]">
                  Plataforma Exclusiva
                </span>
                <h2 className="relative font-sans text-8xl md:text-9xl lg:text-[200px] font-extrabold tracking-tighter uppercase leading-[0.75] text-white">
                  <span className="block text-zinc-300">PERU</span>
                  <span className="relative block mt-4 text-transparent bg-clip-text animate-spectral-gradient-ultra glitch-neon-text-spectral" data-text="MUSIC DJ">MUSIC DJ</span>
                </h2>
              </div>
            </header>
          </div>
        )}

        <div className="max-w-screen-2xl mx-auto w-full px-6 relative z-10">
            {seccionAbierta && (
            <section className="py-16">
                {!packAbierto && (
                <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-b border-spectral/40 pb-10">
                    <div>
                      <h3 className="text-5xl lg:text-8xl font-extrabold uppercase text-white tracking-tight drop-shadow-[0_0_30px_currentColor] text-spectral-active">{seccionAbierta}</h3>
                    </div>
                    <button onClick={cerrarSeccion} className="text-zinc-400 hover:text-white font-semibold text-xs flex items-center gap-2.5 transition-all group px-6 py-3 rounded-full border border-white/10 hover:border-spectral hover:bg-spectral/30">
                      <span className="group-hover:-translate-x-1.5 transition-transform text-spectral">←</span> Regresar
                    </button>
                </div>
                )}

                {contenidoActual && !packAbierto && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Object.entries(contenidoActual).map(([key, item], index) => (
                    <article 
                        key={key} 
                        style={{ animationDelay: `${index * 0.1}s` }}
                        className="animate-card-entry group relative bg-spectral/5 border border-white/5 p-6 rounded-3xl flex flex-col backdrop-blur-md hover:bg-spectral/25 transition-all duration-500 hover:-translate-y-3 hover:border-spectral hover:shadow-[0_0_60px_currentColor] shadow-xl cursor-pointer"
                        onClick={() => setPackAbierto(key)}
                    >
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-spectral/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <figure className="aspect-square w-full mb-6 overflow-hidden rounded-2xl bg-black/70 relative flex items-center justify-center p-3 border border-spectral shadow-inner">
                            <img src={item.portada} alt={item.titulo} className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110" />
                        </figure>
                        <div className="flex-grow flex flex-col justify-between relative z-10">
                          <div>
                              <span className="text-spectral-active text-[11px] font-extrabold uppercase tracking-[0.25em] mb-4 block">{item.autor}</span>
                              <h4 className="text-zinc-100 font-bold text-xl leading-snug line-clamp-2 mb-6 group-hover:text-white transition-colors">{item.titulo}</h4>
                          </div>
                          <div className="flex items-center text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-spectral-active pt-5 border-t border-spectral/30 transition-colors">
                              Ver Detalles <span className="ml-2.5 group-hover:translate-x-1.5 transition-transform text-spectral">→</span>
                          </div>
                        </div>
                    </article>
                    ))}
                </div>
                )}

                {itemSeleccionado && packAbierto && (
                    <div className="max-w-5xl mx-auto animate-fade-in-up">
                    <button onClick={() => setPackAbierto(null)} className="mb-10 text-zinc-400 hover:text-white font-semibold text-xs flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/10 hover:border-spectral/50">
                        <span className="text-spectral">←</span> Regresar a {seccionAbierta}
                    </button>
                    <div className="bg-spectral/15 backdrop-blur-xl border-2 border-spectral rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_currentColor] p-10 lg:p-16 flex flex-col md:flex-row gap-12 items-center">
                        <figure className="w-full max-w-[300px] shrink-0 bg-black/70 rounded-3xl p-3 border-2 border-spectral shadow-2xl">
                            <img src={itemSeleccionado.portada} alt={itemSeleccionado.titulo} className="w-full h-auto object-contain rounded-2xl shadow-2xl" />
                        </figure>
                        <div className="flex-grow text-center md:text-left">
                            <h4 className="text-white font-extrabold text-5xl lg:text-6xl leading-tight mb-12 tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">{itemSeleccionado.titulo}</h4>
                            <a href={itemSeleccionado.link} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center bg-white text-black font-extrabold py-5 px-12 rounded-2xl gap-4 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-spectral/80 hover:text-white active:scale-95">
                                <span className="absolute inset-0 rounded-2xl animate-pulse bg-spectral/30 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative z-10 text-lg">Descargar Archivo</span>
                            </a>
                        </div>
                    </div>
                    </div>
                )}
            </section>
            )}
        </div>
      </main>

      <footer className="py-12 text-center border-t border-spectral/30 bg-black/90 backdrop-blur-md relative z-10">
        <p className="text-zinc-600 text-[11px] uppercase font-bold tracking-[0.5em]">© 2026 PERU MUSIC DJ | PERU</p>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spectralCycleUltra {
          0%, 100% { --spectral-color: #ff0000; }
          8.33% { --spectral-color: #ff8800; }
          16.66% { --spectral-color: #ffff00; }
          25% { --spectral-color: #88ff00; }
          33.33% { --spectral-color: #00ff00; }
          41.66% { --spectral-color: #00ff88; }
          50% { --spectral-color: #00ffff; }
          58.33% { --spectral-color: #0088ff; }
          66.66% { --spectral-color: #0000ff; }
          75% { --spectral-color: #8800ff; }
          83.33% { --spectral-color: #ff00ff; }
          91.66% { --spectral-color: #ff0088; }
        }

        .animate-spectral-sync-ultra {
          animation: spectralCycleUltra 12s linear infinite;
        }

        .border-spectral { border-color: color-mix(in srgb, var(--spectral-color) 60%, transparent) !important; transition: border-color 0.3s ease; }
        .border-spectral-active { border-color: var(--spectral-color) !important; transition: border-color 0.3s ease; }
        .bg-spectral { background-color: color-mix(in srgb, var(--spectral-color) 15%, transparent) !important; transition: background-color 0.3s ease; }
        .bg-spectral-active { background-color: color-mix(in srgb, var(--spectral-color) 35%, transparent) !important; transition: background-color 0.3s ease; }
        .text-spectral { color: color-mix(in srgb, var(--spectral-color) 90%, white) !important; transition: color 0.3s ease; }
        .text-spectral-active { color: var(--spectral-color) !important; transition: color 0.3s ease; }

        .bg-power-spectral-pattern {
          background-image: 
            radial-gradient(circle at 50% 40%, rgba(20, 0, 0, 0.3) 0%, transparent 70%),
            radial-gradient(circle at 100% 0%, rgba(15, 0, 0, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(15, 0, 0, 0.15) 0%, transparent 50%),
            linear-gradient(to bottom, #010000, #050000);
          background-attachment: fixed;
        }

        .bg-power-spectral-glow {
          background: radial-gradient(circle at center, var(--spectral-color) 0%, transparent 70%);
        }

        @keyframes spectralGradientUltra {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-spectral-gradient-ultra {
          background-image: linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000);
          background-size: 200% auto;
          animation: spectralGradientUltra 8s linear infinite;
        }

        .glitch-neon-text-spectral {
          position: relative;
          text-shadow: 0 0 25px var(--spectral-color);
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
      `}} />
    </div>
  );
}