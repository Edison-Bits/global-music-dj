"use client"; 
import { useState } from 'react';

export default function Home() {
  // Estado para controlar qué sección está abierta
  const [seccionAbierta, setSeccionAbierta] = useState(null);

  const cerrarSeccion = () => setSeccionAbierta(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Barra de Navegación */}
      <nav className="p-4 bg-black/95 backdrop-blur-md border-b border-red-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo - Al hacer clic vuelve al inicio */}
          <div className="flex flex-col leading-none cursor-pointer" onClick={cerrarSeccion}>
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              PERU <span className="text-red-600">MUSIC DJ</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">
              exclusive
            </span>
          </div>

          {/* Menú de Botones - Configurados para ACTIVAR la navegación */}
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

      {/* LÓGICA DE VISUALIZACIÓN */}
      {!seccionAbierta ? (
        /* PORTADA (Solo se ve si no hay botón presionado) */
        <header 
          className="py-40 px-6 text-center bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('/fondo.avif')" }}
        >
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">
              PERU <br/> MUSIC DJ
            </h2>
            <p className="text-red-600 font-black tracking-[1em] uppercase text-sm md:text-2xl drop-shadow-[0_0_15px_rgba(220,38,38,1)] relative z-10">
              exclusive
            </p>
          </div>
          <p className="text-lg text-white max-w-2xl mx-auto mb-12 font-black drop-shadow-[0_0_15px_rgba(255,255,255,1)] relative z-10">
            La central de recursos más completa para el DJ peruano.
          </p>
        </header>
      ) : (
        /* VISTA DE SECCIÓN (Se ve cuando presionas un botón) */
        <div className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-300">
          <button 
            onClick={cerrarSeccion}
            className="mb-10 text-red-600 hover:text-white font-black uppercase tracking-widest text-sm flex items-center gap-2 border border-red-600 px-6 py-2 rounded-full transition-all"
          >
            ← VOLVER AL INICIO
          </button>

          <h3 className="text-5xl font-black uppercase mb-12 text-white border-l-4 border-red-600 pl-6">
            {seccionAbierta}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjetas vacías con el estilo de DJ Ventu */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#0a0f1a] border border-zinc-900 p-6 rounded-[2rem] opacity-40">
                <div className="aspect-square bg-zinc-950 rounded-3xl border border-zinc-900 mb-6 flex items-center justify-center">
                  <span className="text-zinc-800 font-black uppercase tracking-widest text-xs italic">Próximamente...</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black py-20 px-6 text-center border-t border-zinc-900 font-bold">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em]">
          © 2026 PERU MUSIC DJ NETWORK - PUNO, PERÚ.
        </p>
      </footer>
    </div>
  );
}