"use client"; 
import { useState } from 'react';

export default function Home() {
  // Estado para controlar la navegación entre secciones
  const [seccionAbierta, setSeccionAbierta] = useState<string | null>(null);

  const cerrarSeccion = () => setSeccionAbierta(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Barra de Navegación Uniforme */}
      <nav className="p-4 bg-black/95 backdrop-blur-md border-b border-red-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo PERU MUSIC DJ */}
          <div className="flex flex-col leading-none cursor-pointer" onClick={cerrarSeccion}>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              PERU <span className="text-red-600">MUSIC DJ</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">exclusive</span>
          </div>

          {/* Menú de Botones */}
          <div className="hidden lg:flex space-x-3 text-[10px] font-black uppercase tracking-widest items-center">
            <button onClick={() => setSeccionAbierta('Librerías')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Librerías</button>
            <button onClick={() => setSeccionAbierta('Samples')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Samples</button>
            <button onClick={() => setSeccionAbierta('Efectos')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Efectos</button>
            <button onClick={() => setSeccionAbierta('Pack')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Pack</button>
            <button onClick={() => setSeccionAbierta('Set DJ')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Set DJ</button>
            <button onClick={() => setSeccionAbierta('Colecciones DJ')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Colecciones DJ</button>
            <button onClick={() => setSeccionAbierta('Backup')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Backup</button>
          </div>
        </div>
      </nav>

      {!seccionAbierta ? (
        /* PORTADA ORIGINAL INTACTA */
        <header className="py-40 px-6 text-center bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/fondo.avif')" }}>
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">PERU <br/> MUSIC DJ</h2>
            <p className="text-red-600 font-black tracking-[1em] uppercase text-sm md:text-2xl drop-shadow-[0_0_15px_rgba(220,38,38,1)]">exclusive</p>
          </div>
          <p className="text-lg text-white max-w-2xl mx-auto mb-12 font-black drop-shadow-[0_0_15px_rgba(255,255,255,1)] relative z-10">La central de recursos más completa para el DJ peruano.</p>
        </header>
      ) : (
        /* VISTA DE CADA SECCIÓN AL INGRESAR */
        <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-500">
          <button onClick={cerrarSeccion} className="mb-10 text-red-600 hover:text-white font-black uppercase text-xs border border-red-600 px-6 py-2 rounded-full transition-all">
            ← VOLVER AL INICIO
          </button>

          <h3 className="text-5xl font-black uppercase mb-12 text-white border-l-4 border-red-600 pl-6">{seccionAbierta}</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seccionAbierta === 'Pack' ? (
              /* TARJETA CON TU PORTADA REAL */
              <div className="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-[2rem] relative group hover:border-[#1ed760]/50 transition-all shadow-2xl overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#1ed760] text-black text-[10px] font-black px-3 py-1 rounded-lg z-20 shadow-[0_0_15px_rgba(30,215,96,0.4)]">
                  FREE GRATIS
                </div>

                {/* IMAGEN DE PORTADA CARGADA DESDE PUBLIC */}
                <div className="aspect-square w-full mb-6 overflow-hidden rounded-3xl border border-zinc-800 bg-black relative">
                  <img 
                    src="/portada-ayacucho.jpg" 
                    alt="Lista de música DJ Ventu"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="text-left px-2">
                  <h4 className="text-white font-black text-lg mb-1 uppercase tracking-tight">PACK CARNAVALES AYACUCHANOS 2026</h4>
                  <p className="text-zinc-500 text-[10px] font-bold mb-4 uppercase">Exclusivo: DJ VENTU</p>
                  <a href="#" className="text-[#1ed760] font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-125 transition-all">
                    VER Y DESCARGAR →
                  </a>
                </div>
              </div>
            ) : (
              /* ESPACIOS VACÍOS PARA LAS OTRAS SECCIONES */
              [1, 2, 3].map((i) => (
                <div key={i} className="bg-[#0a0f1a] border border-zinc-900 p-6 rounded-[2rem] opacity-30">
                  <div className="aspect-square bg-zinc-950 rounded-3xl border border-zinc-900 mb-6 flex items-center justify-center text-zinc-800 font-black uppercase text-[10px] tracking-widest">
                    Próximamente...
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Footer Uniforme */}
      <footer className="bg-black py-20 px-6 text-center border-t border-zinc-900 font-bold">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em]">© 2026 PERU MUSIC DJ NETWORK - PUNO, PERÚ.</p>
      </footer>
    </div>
  );
}