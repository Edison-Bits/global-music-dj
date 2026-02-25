"use client"; 
import { useState } from 'react';

export default function Home() {
  const [seccionAbierta, setSeccionAbierta] = useState<string | null>(null);
  const [packAbierto, setPackAbierto] = useState<string | null>(null);

  const cerrarSeccion = () => {
    setSeccionAbierta(null);
    setPackAbierto(null); 
  };

  const packs = {
    ayacucho: {
      titulo: "PACK CARNAVALES AYACUCHANOS 2026",
      autor: "DJ VENTU",
      portada: "/portada-ayacucho.jpg",
      link: "https://drive.google.com/drive/folders/1YblcId_Jzh3pRRk5Y-028qd9VS7T-RXM?usp=sharing"
    },
    alan: {
      titulo: "PACK STYLE ALAN WALKER 2026",
      autor: "DJ ENZO VIP",
      portada: "/portada-alan.png",
      link: "https://drive.google.com/drive/folders/1_-vzYZTi4sG-fQSnl8epaJg31ymgOnip?usp=sharing"
    },
    sureno: {
      titulo: "PACK SUREÑO II 2026",
      autor: "DJ ENZO VIP",
      portada: "/portada-sureno.png",
      link: "https://drive.google.com/drive/folders/1erG_LvX_ml5DnTL7dIv-E3ZD-sItK2I1?usp=sharing"
    },
    sureno1: {
      titulo: "PACK SUREÑO I - 2026",
      autor: "DJ ENZO VIP",
      portada: "/portada-sureno-1.png",
      link: "https://drive.google.com/drive/folders/1pUZ9CiUj8VpYhwui4U9SHtFPMbVwb02j?usp=sharing"
    },
    genesis: {
      titulo: "PACK DE GRUPO GENESIS",
      autor: "DJ ENZO VIP",
      portada: "/portada-genesis.png",
      link: "https://drive.google.com/drive/folders/1fGKZH_COilJrVwERBv1OyJTj7268zp8s?usp=sharing"
    }
  };

  const backups = {
    willy: {
      titulo: "BACKUP DJ WILLY CUSCO",
      autor: "DJ WILLY CUSCO",
      portada: "/portada-willy.png",
      link: "https://drive.google.com/drive/folders/1x1TAn93SdCpoNlmA91E_XxPzvxvpiyka?usp=drive_link"
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      <nav className="p-4 bg-black/95 backdrop-blur-md border-b border-red-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col leading-none cursor-pointer text-center md:text-left mb-4 md:mb-0" onClick={cerrarSeccion}>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase">
              PERU <span className="text-red-600">MUSIC DJ</span>
            </h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">exclusive</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-auto text-[10px] font-black uppercase tracking-widest">
            {['Librerías', 'Samples', 'Efectos', 'Pack', 'Set DJ', 'Colecciones DJ', 'Backup'].map((item) => (
              <button 
                key={item} 
                onClick={() => { setSeccionAbierta(item); setPackAbierto(null); }} 
                className={`border border-red-600/70 px-3 py-2 rounded-lg bg-black hover:bg-red-600 hover:text-white transition-all duration-300 flex-grow md:flex-grow-0 text-center shadow-lg active:scale-95 ${seccionAbierta === item ? 'bg-red-600' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {!seccionAbierta ? (
        <header className="py-32 md:py-40 px-4 text-center bg-cover bg-center bg-no-repeat relative flex flex-col justify-center min-h-[70vh]" style={{ backgroundImage: "url('/fondo.avif')" }}>
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl sm:text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">PERU <br/> MUSIC DJ</h2>
            <p className="text-red-600 font-black tracking-[0.5em] md:text-2xl uppercase text-xs mb-2">exclusive</p>
          </div>
        </header>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 animate-in fade-in duration-500">
          {!packAbierto && (
            <>
              <button onClick={cerrarSeccion} className="mb-8 text-red-600 hover:text-white font-black uppercase text-xs border border-red-600 px-6 py-2 rounded-full transition-all active:bg-red-600">
                ← VOLVER
              </button>
              <h3 className="text-3xl md:text-5xl font-black uppercase mb-8 md:mb-12 text-white border-l-4 border-red-600 pl-4">{seccionAbierta}</h3>
            </>
          )}

          {/* ESTA ES LA PARTE QUE MUESTRA PACK O BACKUP */}
          {(seccionAbierta === 'Pack' || seccionAbierta === 'Backup') ? (
            !packAbierto ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {Object.entries(seccionAbierta === 'Pack' ? packs : backups).map(([key, item]) => (
                  <div key={key} className="bg-[#0a0f1a] border border-zinc-800 p-5 md:p-6 rounded-[2rem] relative group hover:border-red-600/50 transition-all shadow-2xl overflow-hidden">
                    <div className="aspect-square w-full mb-6 overflow-hidden rounded-3xl border border-zinc-800 relative flex items-center justify-center bg-black">
                      <img src={item.portada} alt={item.titulo} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="text-left px-1">
                      <h4 className="text-white font-black text-base md:text-lg mb-1 uppercase tracking-tight leading-tight">{item.titulo}</h4>
                      <p className="text-zinc-500 text-[10px] font-bold mb-4 uppercase">{item.autor}</p>
                      <button onClick={() => setPackAbierto(key)} className="w-full bg-red-600 text-white font-black text-xs uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg active:scale-95">VER CONTENIDO →</button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* VISTA DE DETALLE */
              <div className="max-w-3xl mx-auto bg-[#0a0f1a] border border-zinc-800 p-6 md:p-12 rounded-[2rem] shadow-2xl animate-in zoom-in duration-300">
                <button onClick={() => setPackAbierto(null)} className="mb-6 text-zinc-500 hover:text-red-600 font-black uppercase text-xs flex items-center gap-2 transition-colors active:text-white">
                  ← VOLVER A {seccionAbierta.toUpperCase()}
                </button>
                <div className="w-full max-w-sm mx-auto mb-6 rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-2xl flex items-center justify-center">
                  <img src={(seccionAbierta === 'Pack' ? packs : backups)[packAbierto as keyof (typeof packs | typeof backups)]?.portada} alt="Portada" className="w-full h-auto object-contain" />
                </div>
                <div className="text-center">
                  <h4 className="text-white font-black text-2xl md:text-3xl mb-2 uppercase tracking-tight">
                    {(seccionAbierta === 'Pack' ? packs : backups)[packAbierto as keyof (typeof packs | typeof backups)]?.titulo}
                  </h4>
                  <p className="text-zinc-400 text-xs font-bold mb-6 uppercase tracking-widest">
                    Material de {(seccionAbierta === 'Pack' ? packs : backups)[packAbierto as keyof (typeof packs | typeof backups)]?.autor}
                  </p>
                  <a href={(seccionAbierta === 'Pack' ? packs : backups)[packAbierto as keyof (typeof packs | typeof backups)]?.link} target="_blank" rel="noopener noreferrer" className="bg-[#1ed760] text-black font-black text-sm md:text-xl uppercase py-4 md:py-5 px-4 md:px-8 rounded-2xl flex md:inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg active:scale-95 w-full md:w-auto">
                    📥 DESCARGAR AHORA
                  </a>
                </div>
              </div>
            )
          ) : (
            /* SECCIONES VACÍAS */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 opacity-30 text-center py-20">
              <span className="w-full font-black uppercase text-xs tracking-widest col-span-full">Próximamente contenido en {seccionAbierta}...</span>
            </div>
          )}
        </div>
      )}

      <footer className="bg-black py-10 md:py-20 px-4 text-center border-t border-zinc-900 font-bold">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em]">© 2026 PERU MUSIC DJ NETWORK | PUNO, PERÚ.</p>
      </footer>
    </div>
  );
}