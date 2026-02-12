export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Barra de Navegación */}
      <nav className="p-5 bg-black/80 backdrop-blur-md shadow-xl flex justify-between items-center border-b border-red-900/30 sticky top-0 z-50">
        <div className="flex flex-col leading-none">
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
            PERU <span className="text-red-600">MUSIC DJ</span>
          </h1>
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">
            exclusive
          </span>
        </div>
        <div className="hidden md:flex space-x-6 text-xs font-bold uppercase tracking-widest">
          <a href="#tracks" className="hover:text-red-500 transition">Tracks</a>
          <span className="bg-red-600 text-white px-3 py-1 rounded-sm italic">Live Now</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-28 px-6 text-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">
        <div className="mb-6 inline-block">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-2">
              PERU <br/> MUSIC DJ
            </h2>
            <p className="text-red-600 font-bold tracking-[0.8em] uppercase text-sm md:text-xl">
              exclusive
            </p>
        </div>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-medium">
          La plataforma definitiva para el movimiento DJ en Perú. 
          Recursos, música y sets exclusivos para profesionales.
        </p>
        <div className="flex justify-center">
          <a href="#tracks" className="bg-red-600 text-white px-12 py-4 rounded-none font-black uppercase text-sm hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)]">
            Acceder al Repositorio
          </a>
        </div>
      </header>

      {/* Secciones de Contenido */}
      <main id="tracks" className="max-w-6xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-10">
          
          <div className="bg-zinc-900/50 p-10 border border-zinc-800 hover:border-red-600/50 transition-all">
            <h4 className="font-black text-3xl mb-4 uppercase italic">Pro-Sets</h4>
            <p className="text-zinc-500 mb-8">Descarga sesiones grabadas en vivo con la mejor calidad de audio para tus eventos.</p>
            <button className="text-red-500 font-bold uppercase tracking-widest text-xs hover:underline">Ver catálogo →</button>
          </div>

          <div className="bg-zinc-900/50 p-10 border border-zinc-800 hover:border-red-600/50 transition-all">
            <h4 className="font-black text-3xl mb-4 uppercase italic">Exclusive Tools</h4>
            <p className="text-zinc-500 mb-8">Efectos de sonido, intros y herramientas diseñadas para DJs peruanos.</p>
            <button className="text-red-500 font-bold uppercase tracking-widest text-xs hover:underline">Descargar ahora →</button>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 text-center border-t border-zinc-900">
        <div className="flex flex-col items-center leading-none mb-8">
          <h4 className="text-2xl font-black uppercase tracking-tighter">PERU <span className="text-red-600">MUSIC DJ</span></h4>
          <span className="text-[9px] uppercase tracking-[0.5em] text-zinc-600 font-bold">exclusive</span>
        </div>
        <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-[0.3em]">
          © 2026 PERU MUSIC DJ NETWORK - PUNO, PERÚ.
        </p>
      </footer>
    </div>
  );
}