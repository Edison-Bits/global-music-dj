"use client"; 
import { useState } from 'react';

// Definimos los tipos para evitar errores de TypeScript
type ItemData = {
  titulo: string;
  autor: string;
  portada: string;
  link: string;
};

export default function Home() {
  const [seccionAbierta, setSeccionAbierta] = useState<string | null>(null);
  const [packAbierto, setPackAbierto] = useState<string | null>(null);

  const cerrarSeccion = () => {
    setSeccionAbierta(null);
    setPackAbierto(null); 
  };

  const packs: Record<string, ItemData> = {
    ayacucho: { titulo: "PACK CARNAVALES AYACUCHANOS 2026", autor: "DJ VENTU", portada: "/portada-ayacucho.jpg", link: "https://drive.google.com/drive/folders/1YblcId_Jzh3pRRk5Y-028qd9VS7T-RXM?usp=sharing" },
    alan: { titulo: "PACK STYLE ALAN WALKER 2026", autor: "DJ ENZO VIP", portada: "/portada-alan.png", link: "https://drive.google.com/drive/folders/1_-vzYZTi4sG-fQSnl8epaJg31ymgOnip?usp=sharing" },
    sureno: { titulo: "PACK SUREÑO II 2026", autor: "DJ ENZO VIP", portada: "/portada-sureno.png", link: "https://drive.google.com/drive/folders/1erG_LvX_ml5DnTL7dIv-E3ZD-sItK2I1?usp=sharing" },
    sureno1: { titulo: "PACK SUREÑO I - 2026", autor: "DJ ENZO VIP", portada: "/portada-sureno-1.png", link: "https://drive.google.com/drive/folders/1pUZ9CiUj8VpYhwui4U9SHtFPMbVwb02j?usp=sharing" },
    genesis: { titulo: "PACK DE GRUPO GENESIS", autor: "DJ ENZO VIP", portada: "/portada-genesis.png", link: "https://drive.google.com/drive/folders/1fGKZH_COilJrVwERBv1OyJTj7268zp8s?usp=sharing" }
  };

  const backups: Record<string, ItemData> = {
    willy: { titulo: "BACKUP DJ WILLY CUSCO", autor: "DJ WILLY CUSCO", portada: "/portada-willy.png", link: "https://drive.google.com/drive/folders/1x1TAn93SdCpoNlmA91E_XxPzvxvpiyka?usp=drive_link" },
    gonz: { titulo: "BACKUP DJ GONZ", autor: "DJ GONZ", portada: "/portada-gonz.png", link: "https://drive.google.com/drive/folders/1nife5YbCQ_0o11msd9pDOrtHvVxbRvB9?usp=drive_link" }
  };

  // NUEVA SECCIÓN: COLECCIONES DJ
  const colecciones: Record<string, ItemData> = {
    elmer: { 
      titulo: "COLECCION DE ELMER MIX 2025 VOL 01 - 07", 
      autor: "ELMER MIX", 
      portada: "/portada-elmer.png", 
      link: "#" // Pega aquí el link cuando lo tengas
    }
  };

  const obtenerContenido = () => {
    if (seccionAbierta === 'Pack') return packs;
    if (seccionAbierta === 'Backup') return backups;
    if (seccionAbierta === 'Colecciones DJ') return colecciones; // Activamos la sección
    return null;
  };

  const contenidoActual = obtenerContenido();

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden">
      <nav className="p-4 bg-black/95 backdrop-blur-md border-b border-red-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col leading-none cursor-pointer text-center md:text-left mb-4 md:mb-0" onClick={cerrarSeccion}>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase">PERU <span className="text-red-600">MUSIC DJ</span></h1>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">exclusive</span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-2 w-full md:w-auto text-[10px] font-black uppercase tracking-widest">
            {['Librerías', 'Samples', 'Efectos', 'Pack', 'Set DJ', 'Colecciones DJ', 'Backup'].map((item) => (
              <button key={item} onClick={() => { setSeccionAbierta(item); setPackAbierto(null); }} className={`border border-red-600/70 px-3 py-2 rounded-lg bg-black hover:bg-red-600 hover:text-white transition-all duration-300 flex-grow md:flex-grow-0 text-center shadow-lg active:scale-95 ${seccionAbierta === item ? 'bg-red-600 text-white' : ''}`}>{item}</button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {!seccionAbierta ? (
          <header className="py-20 text-center">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">PERU <br/> MUSIC DJ</h2>
            <p className="text-red-600 font-black tracking-[0.5em] md:text-2xl uppercase text-xs">exclusive</p>
          </header>
        ) : (
          <>
            {!packAbierto && (
              <div className="mb-8 flex items-center justify-between border-l-4 border-red-600 pl-4">
                <h3 className="text-3xl md:text-5xl font-black uppercase text-white">{seccionAbierta}</h3>
                <button onClick={cerrarSeccion} className="text-red-600 hover:text-white font-black uppercase text-xs border border-red-600 px-6 py-2 rounded-full transition-all">← VOLVER</button>
              </div>
            )}

            {contenidoActual ? (
              !packAbierto ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Object.entries(contenidoActual).map(([key, item]) => (
                    <div key={key} className="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-[2rem] relative group hover:border-red-600/50 transition-all shadow-2xl overflow-hidden">
                      <div className="aspect-square w-full mb-6 overflow-hidden rounded-3xl border border-zinc-800 bg-black flex items-center justify-center">
                        <img src={item.portada} alt={item.titulo} className="w-full h-full object-contain transition-transform group-hover:scale-105" />
                      </div>
                      <h4 className="text-white font-black text-lg mb-1 uppercase leading-tight">{item.titulo}</h4>
                      <p className="text-zinc-500 text-[10px] font-bold mb-4 uppercase">{item.autor}</p>
                      <button onClick={() => setPackAbierto(key)} className="w-full bg-red-600 text-white font-black text-xs uppercase py-4 rounded-xl hover:bg-red-700 transition-all shadow-lg active:scale-95">VER CONTENIDO →</button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="max-w-2xl mx-auto bg-[#0a0f1a] border border-zinc-800 p-8 rounded-[2rem] shadow-2xl text-center">
                  <button onClick={() => setPackAbierto(null)} className="mb-6 text-zinc-500 hover:text-red-600 font-black uppercase text-xs flex items-center gap-2">← VOLVER</button>
                  <img src={contenidoActual[packAbierto]?.portada} className="w-full max-w-xs mx-auto mb-6 rounded-3xl shadow-2xl" />
                  <h4 className="text-white font-black text-3xl mb-2 uppercase">{contenidoActual[packAbierto]?.titulo}</h4>
                  <p className="text-zinc-400 text-xs font-bold mb-8 uppercase tracking-widest">Material de {contenidoActual[packAbierto]?.autor}</p>
                  <a href={contenidoActual[packAbierto]?.link} target="_blank" rel="noopener noreferrer" className="bg-[#1ed760] text-black font-black text-xl uppercase py-5 px-8 rounded-2xl flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg">📥 DESCARGAR AHORA</a>
                </div>
              )
            ) : (
              <div className="py-20 text-center opacity-30"><span className="text-xl font-black uppercase tracking-widest">PRÓXIMAMENTE EN {seccionAbierta.toUpperCase()}...</span></div>
            )}
          </>
        )}
      </div>
      <footer className="py-10 text-center border-t border-zinc-900"><p className="text-zinc-700 text-[10px] uppercase font-bold tracking-[0.3em]">© 2026 PERU MUSIC DJ NETWORK | PUNO, PERÚ.</p></footer>
    </div>
  );
}