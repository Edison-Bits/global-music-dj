export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Barra de Navegación */}
      <nav className="p-4 bg-black/90 backdrop-blur-md border-b border-red-900/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo: PERU MUSIC DJ con exclusive debajo */}
          <div className="flex flex-col leading-none">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              PERU <span className="text-red-600">MUSIC DJ</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">
              exclusive
            </span>
          </div>

          {/* Menú de Recursos DJ (Botones solicitados) */}
          <div className="hidden lg:flex space-x-3 text-[9px] font-bold uppercase tracking-widest items-center">
            <a href="#librerias" className="hover:text-red-500 transition border-b border-transparent hover:border-red-600 pb-1">Librerías</a>
            <a href="#samples" className="hover:text-red-500 transition border-b border-transparent hover:border-red-600 pb-1">Samples</a>
            <a href="#efectos" className="hover:text-red-500 transition border-b border-transparent hover:border-red-600 pb-1">Efectos</a>
            <a href="#pack" className="hover:text-red-500 transition border-b border-transparent hover:border-red-600 pb-1">Pack</a>
            <a href="#set-dj" className="hover:text-red-500 transition border-b border-transparent hover:border-red-600 pb-1">Set DJ</a>
            <a href="#colecciones" className="hover:text-red-500 transition border-b border-transparent hover:border-red-600 pb-1">Colecciones DJ</a>
            <a href="#backup" className="text-red-500 hover:text-white transition border border-red-600 px-2 py-1 rounded-sm">Backup</a>
          </div>

          {/* Botón de Estado */}
          <div className="flex items-center">
            <span className="bg-red-600 text-white text-[10px] px-3 py-1 rounded-full font-black italic animate-pulse">
              LIVE NOW
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-32 px-6 text-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black">
        <div className="mb-6 inline-block">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-4">
            PERU <br/> MUSIC DJ
          </h2>
          <p className="text-red-600 font-bold tracking-[1em] uppercase text-sm md:text-2xl">
            exclusive
          </p>
        </div>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-12 font-medium">
          La central de recursos más completa para el DJ peruano.
          Descargas exclusivas, herramientas de mezcla y soporte total.
        </p>
        <div className="flex justify-center">
          <a href="#librerias" className="bg-white text-black px-14 py-4 rounded-none font-black uppercase text-sm hover:bg-red-600 hover:text-white transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            Explorar Repositorio
          </a>
        </div>
      </header>

      {/* Secciones de Contenido (Muestra) */}
      <main className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/30 p-8 border border-zinc-800 hover:border-red-600/50 transition-all group">
            <h3 className="text-red-600 font-bold text-xs mb-2 tracking-widest uppercase">01. Producción</h3>
            <h4 className="font-black text-2xl mb-4 uppercase">Librerías Premium</h4>
            <p className="text-zinc-500 text-sm mb-6">Sonidos de alta calidad seleccionados para producciones profesionales.</p>
            <div className="h-1 w-10 bg-red-600 group-hover:w-full transition-all duration-500"></div>
          </div>

          <div className="bg-zinc-900/30 p-8 border border-zinc-800 hover:border-red-600/50 transition-all group">
            <h3 className="text-red-600 font-bold text-xs mb-2 tracking-widest uppercase">02. Envivo</h3>
            <h4 className="font-black text-2xl mb-4 uppercase">Samples & FX</h4>
            <p className="text-zinc-500 text-sm mb-6">Intros, disparadores y efectos de transición para tus sets en directo.</p>
            <div className="h-1 w-10 bg-red-600 group-hover:w-full transition-all duration-500"></div>
          </div>

          <div className="bg-zinc-900/30 p-8 border border-zinc-800 hover:border-red-600/50 transition-all group">
            <h3 className="text-red-600 font-bold text-xs mb-2 tracking-widest uppercase">03. Seguridad</h3>
            <h4 className="font-black text-2xl mb-4 uppercase">Cloud Backup</h4>
            <p className="text-zinc-500 text-sm mb-6">Respalda tus colecciones más valiosas en nuestro servidor exclusivo.</p>
            <div className="h-1 w-10 bg-red-600 group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 text-center border-t border-zinc-900">
        <div className="flex flex-col items-center leading-none mb-6">
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