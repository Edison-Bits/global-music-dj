"use client"; // Esta línea quita el error rojo
import { useState } from 'react'; // Esta línea habilita los botones

export default function Home() {
  // Estado para controlar la entrada y salida de cada sección
  const [seccionAbierta, setSeccionAbierta] = useState(null);

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

          {/* Menú de Botones con lógica de ingreso */}
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
        /* PORTADA ORIGINAL INTACTA (Fondo de consola DJ) */
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
        /* CONTENIDO QUE APARECE AL INGRESAR (Botón Volver y Tarjetas) */
        <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-500">
          <button 
            onClick={cerrarSeccion}
            className="mb-10 text-zinc-500 hover:text-red-600 font-black uppercase tracking-[0.2em] text-xs transition-colors flex items-center gap-2"
          >
            ← VOLVER AL INICIO
          </button>

          <h3 className="text-5xl font-black uppercase mb-12 text-white border-l-4 border-red-600 pl-6">
            {seccionAbierta}
          </h3>

          {/* Tarjetas vacías con el estilo solicitado */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#0a0f1a] border border-zinc-900 p-6 rounded-[2rem] opacity-40">
                <div className="aspect-square bg-zinc-950 rounded-3xl border border-zinc-900 mb-6 flex items-center justify-center">
                  <span className="text-zinc-800 font-black uppercase tracking-widest text-xs">Espacio Reservado</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded mb-2"></div>
                <div className="h-2 w-1/2 bg-zinc-900 rounded"></div>
              </div>
            ))}
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