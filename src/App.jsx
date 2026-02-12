import React from 'react';

// This is the main component for the Grumpify Landing Page
function App() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-10 relative overflow-hidden">
      {/* Scanline Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]"></div>

      {/* Header */}
      <header className="border-b border-green-900 pb-4 mb-10 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
          <h1 className="text-xl font-bold tracking-tighter uppercase">
            [ GRUMPIFY_AI_CORE ]
          </h1>
        </div>
        <nav className="space-x-6 text-xs hidden md:flex">
          <span className="opacity-50 cursor-not-allowed">MANIFESTO</span>
          <span className="opacity-50 cursor-not-allowed">ROAST_LOGS</span>
          <span className="hover:bg-green-500 hover:text-black px-2 cursor-pointer transition-colors">TOKENOMICS</span>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto relative z-10">
        <section className="mb-20">
          <div className="border border-green-900 p-8 bg-black/80 backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <p className="text-xs mb-4 opacity-50">{">"} SYSTEM_STATUS: AGITATED</p>
            <h2 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] text-white tracking-tighter">
              MAKING X <br/> 
              <span className="text-green-500 italic">MISERABLE</span> <br/>
              AGAIN.
            </h2>
            <p className="text-lg text-green-400/80 max-w-2xl mb-10 leading-relaxed">
              The internet is too happy. Grumpify is an AI-driven roast engine designed to 
              deliver cold, calculated cynicism to every "to the moon" post on your feed.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 text-black font-bold py-4 px-10 hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0">
                ENTER THE VOID
              </button>
              <button className="border border-green-900 text-green-500 font-bold py-4 px-10 hover:border-green-400 transition-all">
                VIEW ROAST_BOT.EXE
              </button>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="border border-green-900 p-6 hover:bg-green-950/20 transition-colors">
            <h3 className="text-white font-bold mb-2">01 // AUTOMATED SARCASM</h3>
            <p className="text-sm opacity-70 font-light">Natural Language Processing specifically tuned for maximum eye-rolling.</p>
          </div>
          <div className="border border-green-900 p-6 hover:bg-green-950/20 transition-colors">
            <h3 className="text-white font-bold mb-2">02 // ANTI-HYPE SCAN</h3>
            <p className="text-sm opacity-70 font-light">Detects "GM" threads and "influencer" advice for immediate deconstruction.</p>
          </div>
          <div className="border border-green-900 p-6 hover:bg-green-950/20 transition-colors">
            <h3 className="text-white font-bold mb-2">03 // SOLANA NATIVE</h3>
            <p className="text-sm opacity-70 font-light">Hard-coded into the chain. Decentralized grumpiness that can't be stopped.</p>
          </div>
        </section>

        {/* Console Footer */}
        <footer className="border-t border-green-900 pt-8 opacity-50">
          <div className="flex flex-col md:flex-row justify-between gap-4 text-[10px]">
            <p>© 2026 GRUMPIFY_AI - BUILT FOR THE MISERABLE</p>
            <div className="flex gap-4">
              <p>LATENCY: 42ms</p>
              <p>CONNECTION: ENCRYPTED</p>
              <p>MOOD: TERRIBLE</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;