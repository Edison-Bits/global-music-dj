export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Barra de Navegación Estilo DJ */}
      <nav className="p-5 bg-zinc-900 shadow-xl flex justify-between items-center border-b border-zinc-800 sticky top-0 z-50">
        <h1 className="text-2xl font-black tracking-tighter text-white">
          GLOBAL <span className="text-yellow-400">MUSIC DJ</span>
        </h1>
        <div className="hidden md:flex space-x-6 text-xs font-bold uppercase tracking-widest">
          <a href="#tracks" className="hover:text-yellow-400 transition">Tracks</a>
          <a href="#sets" className="hover:text-yellow-400 transition">DJ Sets</a>
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full">Free Download</span>
        </div>
      </nav>

      {/* Hero Section: Estilo Escenario */}
      <header className="py-28 px-6 text-center bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800">
        <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          THE SOUND <br/> <span className="text-yellow-400 underline decoration-white">OF THE WORLD</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-medium">
          Explora y descarga música, samples y sets exclusivos de GLOBAL MUSIC DJ. 
          Contenido libre para tu creatividad, sin registros.
        </p>
        <div className="flex justify-center">
          <a href="#tracks" className="bg-white text-black px-12 py-4 rounded-full font-black uppercase text-sm hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Escuchar Ahora
          </a>
        </div>
      </header>

      {/* Grid de Contenido Musical */}
      <main id="tracks" className="max-w-6xl mx-auto py-24 px-6">
        <div className="mb-16">
          <h3 className="text-4xl font-black uppercase tracking-tighter italic">Top Downloads</h3>
          <p className="text-zinc-500">Acceso total a la biblioteca de Global Music DJ.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Tarjeta 1: Tracks */}
          <div className="bg-zinc-900 p-8 rounded-none border-l-4 border-yellow-400 hover:bg-zinc-800 transition-all group">
            <div className="text-5xl mb-6 group-hover:animate-pulse">🎧</div>
            <h4 className="font-black text-2xl mb-3 uppercase">Exclusives Tracks</h4>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">Versiones extendidas y remixes exclusivos listos para tus presentaciones.</p>
            <button className="w-full py-3 border-2 border-white font-black uppercase text-xs hover:bg-white hover:text-black transition-colors">Download MP3 ↓</button>
          </div>

          {/* Tarjeta 2: Sample Packs */}
          <div className="bg-zinc-900 p-8 rounded-none border-l-4 border-white hover:bg-zinc-800 transition-all group">
            <div className="text-5xl mb-6 group-hover:animate-pulse">🎹</div>
            <h4 className="font-black text-2xl mb-3 uppercase">Sample Packs</h4>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">Librerías de percusión y efectos para productores musicales libres de derechos.</p>
            <button className="w-full py-3 border-2 border-white font-black uppercase text-xs hover:bg-white hover:text-black transition-colors">Download Pack ↓</button>
          </div>

          {/* Tarjeta 3: Radio Sets */}
          <div className="bg-zinc-900 p-8 rounded-none border-l-4 border-yellow-400 hover:bg-zinc-800 transition-all group">
            <div className="text-5xl mb-6 group-hover:animate-pulse">📻</div>
            <h4 className="font-black text-2xl mb-3 uppercase">Live Sets</h4>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">Grabaciones en alta calidad de las mejores sesiones de GLOBAL MUSIC DJ.</p>
            <button className="w-full py-3 border-2 border-white font-black uppercase text-xs hover:bg-white hover:text-black transition-colors">Get Session ↓</button>
          </div>

        </div>
      </main>

      {/* Footer Estilo Dark */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-20 px-6 text-center">
        <h4 className="text-3xl font-black mb-4 tracking-tighter">GLOBAL <span className="text-yellow-400">MUSIC DJ</span></h4>
        <p className="text-zinc-600 max-w-md mx-auto mb-10 text-xs font-bold uppercase tracking-widest">
          Powering the dancefloor worldwide.
        </p>
        <div className="text-zinc-700 text-[10px] font-bold uppercase tracking-[0.3em]">
          © 2026 Global Music DJ Network - Todos los derechos de sonido reservados.
        </div>
      </footer>
    </div>
  );
}