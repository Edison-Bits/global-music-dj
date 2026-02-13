export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Barra de Navegación Uniforme */}
      <nav className="p-4 bg-black/95 backdrop-blur-md border-b border-red-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo PERU MUSIC DJ */}
          <div className="flex flex-col leading-none">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              PERU <span className="text-red-600">MUSIC DJ</span>
            </h1>
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold ml-1">
              exclusive
            </span>
          </div>

          {/* Menú de Botones (Todos con borde rojo y fondo negro) */}
          <div className="hidden lg:flex space-x-3 text-[10px] font-black uppercase tracking-widest items-center">
            <a href="#librerias" className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Librerías</a>
            <a href="#samples" className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Samples</a>
            <a href="#efectos" className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Efectos</a>
            <a href="#pack" className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Pack</a>
            <a href="#set-dj" className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Set DJ</a>
            <a href="#colecciones" className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Colecciones DJ</a>
            <a href="#backup" className="border-2 border-red-600 px-4 py-2 rounded-sm bg-black hover:bg-red-600 transition-all duration-300">Backup</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <header 
  className="py-40 px-6 text-center bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('/fondo.avif')" }}
>
  {/* Capa oscura para que el texto resalte */}
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

      {/* Footer */}
      <footer className="bg-black py-20 px-6 text-center border-t border-zinc-900 font-bold">
        <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em]">
          © 2026 PERU MUSIC DJ NETWORK - PUNO, PERÚ.
        </p>
      </footer>
    </div>
  );
}