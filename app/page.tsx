"use client"; 
import { useState } from 'react';

export default function Home() {
  const [seccionAbierta, setSeccionAbierta] = useState<string | null>(null);
  const [packAbierto, setPackAbierto] = useState<string | null>(null);

  const cerrarSeccion = () => {
    setSeccionAbierta(null);
    setPackAbierto(null); 
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <nav className="p-4 bg-black/95 backdrop-blur-md border-b border-red-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <div className="flex flex-col leading-none cursor-pointer" onClick={cerrarSeccion}>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              PERU <span className="text-red-600">MUSIC DJ</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">exclusive</span>
          </div>

          <div className="hidden lg:flex space-x-3 text-[10px] font-black uppercase tracking-widest items-center">
            {['Librerías', 'Samples', 'Efectos', 'Pack', 'Set DJ', 'Colecciones DJ', 'Backup'].map((item) => (
              <button 
                key={item}
                onClick={() => {
                  setSeccionAbierta(item);
                  setPackAbierto(null); 
                }} 
                className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {!seccionAbierta ? (
        <header className="py-40 px-6 text-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/fondo.avif')" }}>
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">PERU <br/> MUSIC DJ</h2>
            <p className="text-red-600 font-black tracking-[1em] uppercase text-sm md:text-2xl drop-shadow-[0_0_15px_rgba(220,38,38,1)]">exclusive</p>
          </div>
          <p className="text-lg text-white max-w-2xl mx-auto mb-12 font-black drop-shadow-[0_0_15px_rgba(255,255,255,1)] relative z-10">La central de recursos más completa para el DJ peruano.</p>
        </header>
      ) : (
        <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-500">
          
          {!packAbierto && (
            <>
              <button onClick={cerrarSeccion} className="mb-10 text-red-600 hover:text-white font-black uppercase text-xs border border-red-600 px-6 py-2 rounded-full transition-all">
                ← VOLVER AL INICIO
              </button>
              <h3 className="text-5xl font-black uppercase mb-12 text-white border-l-4 border-red-600 pl-6">{seccionAbierta}</h3>
            </>
          )}

          {seccionAbierta === 'Pack' ? (
            !packAbierto ? (
              /* VISTA DE CATÁLOGO */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-[2rem] relative group hover:border-[#1ed760]/50 transition-all shadow-2xl overflow-hidden">
                  <div className="absolute top-4 left-4 bg-[#1ed760] text-black text-[10px] font-black px-3 py-1 rounded-lg z-20 shadow-[0_0_15px_rgba(30,215,96,0.4)]">
                    FREE GRATIS
                  </div>

                  <div className="aspect-square w-full mb-6 overflow-hidden rounded-3xl border border-zinc-800 relative flex items-center justify-center bg-black">
                    <img 
                      src="/portada-ayacucho.jpg" 
                      alt="Portada DJ Ventu"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="text-left px-2">
                    <h4 className="text-white font-black text-lg mb-1 uppercase tracking-tight leading-tight">PACK CARNAVALES AYACUCHANOS 2026</h4>
                    <p className="text-zinc-500 text-[10px] font-bold mb-4 uppercase">DJ VENTU</p>
                    
                    <button 
                      onClick={() => setPackAbierto('ayacucho')}
                      className="w-full bg-red-600 text-white font-black text-xs uppercase py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-red-900/20"
                    >
                      ENTRAR Y VER PACK →
                    </button>
                  </div>
                </div>
                
                {[1, 2].map((i) => (
                  <div key={i} className="bg-[#0a0f1a] border border-zinc-900 p-6 rounded-[2rem] opacity-30 flex items-center justify-center aspect-square">
                    <span className="text-zinc-800 font-black uppercase text-[10px] tracking-widest">Próximamente...</span>
                  </div>
                ))}
              </div>
            ) : (
              /* VISTA ADENTRO DE LA TARJETA (TAMAÑO MEDIANO) */
              <div className="max-w-3xl mx-auto bg-[#0a0f1a] border border-zinc-800 p-8 md:p-12 rounded-[2rem] shadow-2xl animate-in zoom-in duration-300">
                
                <button 
                  onClick={() => setPackAbierto(null)} 
                  className="mb-8 text-zinc-500 hover:text-red-600 font-black uppercase text-xs flex items-center gap-2 transition-colors"
                >
                  ← VOLVER A LOS PACKS
                </button>

                {/* AQUÍ ESTÁ LA CORRECCIÓN: Contenedor "mediano" y centrado */}
                <div className="max-w-md mx-auto mb-8 rounded-3xl overflow-hidden border border-zinc-800 bg-black shadow-2xl flex items-center justify-center">
                  <img 
                    src="/portada-ayacucho.jpg" 
                    alt="Portada DJ Ventu Detalle"
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="text-center">
                  <h4 className="text-white font-black text-2xl md:text-3xl mb-2 uppercase tracking-tight">PACK CARNAVALES AYACUCHANOS 2026</h4>
                  <p className="text-zinc-400 text-xs font-bold mb-8 uppercase tracking-widest">Material Exclusivo de DJ VENTU</p>
                  
                  <a 
                    href="AQUI_PONES_TU_LINK_DE_GOOGLE_DRIVE" 
                    target="_blank"
                    className="bg-[#1ed760] text-black font-black text-lg md:text-xl uppercase py-5 px-8 rounded-2xl inline-flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-[0_0_30px_rgba(30,215,96,0.3)] hover:scale-105"
                  >
                    <span className="text-2xl">📥</span> DESCARGAR PACK AHORA
                  </a>
                </div>
              </div>
            )
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#0a0f1a] border border-zinc-900 p-6 rounded-[2rem] opacity-30 flex items-center justify-center aspect-square">
                  <span className="text-zinc-800 font-black uppercase text-[10px] tracking-widest">Próximamente...</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <footer className="bg-black py-20 px-6 text-center border-t border-zinc-900 font-bold">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em]">© 2026 PERU MUSIC DJ NETWORK - PUNO, PERÚ.</p>
      </footer>
    </div>
  );
}