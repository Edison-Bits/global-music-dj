"use client";
import { useState } from 'react';

export default function Home() {
  // Estado para controlar qué sección está abierta
  const [seccionAbierta, setSeccionAbierta] = useState(null);

  // Función para cerrar y volver al inicio
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">
              exclusive
            </span>
          </div>

          {/* Menú de Botones - Ahora con lógica de click */}
          <div className="hidden lg:flex space-x-3 text-[10px] font-black uppercase tracking-widest items-center">
            <button onClick={() => setSeccionAbierta('librerias')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Librerías</button>
            <button onClick={() => setSeccionAbierta('samples')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Samples</button>
            <button onClick={() => setSeccionAbierta('efectos')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Efectos</button>
            <button onClick={() => setSeccionAbierta('pack')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Pack</button>
            <button onClick={() => setSeccionAbierta('set-dj')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Set DJ</button>
            <button onClick={() => setSeccionAbierta('colecciones')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Colecciones DJ</button>
            <button onClick={() => setSeccionAbierta('backup')} className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Backup</button>
          </div>
        </div>
      </nav>

      {/* CONTENIDO DINÁMICO */}
      {!seccionAbierta ? (
        /* PORTADA ORIGINAL (No se toca nada) */
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
        /* VISTA DE CADA BOTÓN (ESTILO DJ VENTU) */
        <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in zoom-in duration-300">
          <button 
            onClick={cerrarSeccion}
            className="mb-8 text-zinc-500 hover:text-white font-bold uppercase tracking-widest flex items-center gap-2"
          >
            ← SALIR AL INICIO
          </button>

          <h3 className="text-4xl font-black uppercase mb-12 border-l-8 border-red-600 pl-4">
            Sección: <span className="text-red-600">{seccionAbierta}</span>
          </h3>

          {/* Grilla de Tarjetas tipo "DJ VENTU" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0a0f1a] border border-zinc-800 p-6 rounded-[2rem] relative group hover:border-green-500/50 transition-all">
              <div className="absolute top-4 left-4 bg-[#1ed760] text-black text-[10px] font-black px-3 py-1 rounded-lg shadow-[0_0_15px_rgba(30,215,96,0.4)]">
                FREE GRATIS
              </div>

              {/* Imagen del Pack */}
              <div className="aspect-square bg-black rounded-3xl flex flex-col items-center justify-center border border-zinc-800 mb-6 shadow-2xl">
                <span className="text-4xl font-serif italic">Otros</span>
                <span className="text-2xl font-sans font-light tracking-tighter">Editores</span>
              </div>

              <div className="text-left px-2">
                <h4 className="text-white font-bold text-lg mb-4 uppercase">DJ VENTU 08 02 2026</h4>
                <a href="#" className="text-[#1ed760] font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-125">
                  VER Y DESCARGAR →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Uniforme */}
      <footer className="bg-black py-20 px-6 text-center border-t border-zinc-900 font-bold">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em]">
          © 2026 PERU MUSIC DJ NETWORK - PUNO, PERÚ.
        </p>
      </footer>
    </div>
  );
}