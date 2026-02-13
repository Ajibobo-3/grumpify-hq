import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono p-4 md:p-10 relative overflow-hidden">
      {/* CRT Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]"></div>

      {/* Header */}
      <header className="border-b border-green-900 pb-4 mb-10 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
          <h1 className="text-lg md:text-xl font-bold tracking-tighter uppercase">
            [ GRUMPIFY_AI_V1.0 ]
          </h1>
        </div>
        <div className="hidden md:block text-[10px] text-green-800 uppercase tracking-widest">
          Status: Operational // Mood: Hostile
        </div>
      </header>

      <main className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <section className="mb-16 border border-green-900 p-6 md:p-12 bg-black/60 backdrop-blur-md">
          <div className="inline-block border border-green-500 px-2 py-1 text-[10px] mb-6 animate-pulse">
            CORE_ENGINE: GROK_XAI_POWERED
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-6 leading-none tracking-tighter text-white uppercase">
            The Internet is <br />
            <span className="text-green-500">Too Happy.</span>
          </h2>
          <p className="text-lg text-green-400/80 max-w-2xl mb-8">
            Grumpify is a Grok-powered roast engine on Solana. We scan X, find the "to the moon" hype, 
            and deliver a calculated dose of cynical reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 text-black font-bold py-3 px-8 hover:bg-white transition-all uppercase text-sm">
              Connect_Wallet
            </button>
            <button className="border border-green-900 text-green-500 py-3 px-8 hover:bg-green-900/20 transition-all uppercase text-sm">
              View_Contract_Logs
            </button>
          </div>
        </section>

        {/* Roadmap (The Grump-Map) */}
        <section className="mb-16">
          <h3 className="text-xl mb-6 border-l-4 border-green-500 pl-4 font-bold uppercase italic">The_Grump_Map</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-green-900 p-6 bg-black/40">
              <span className="text-green-800 text-xs block mb-2">PHASE_01</span>
              <h4 className="text-white font-bold mb-3 uppercase">Social_Aggression</h4>
              <p className="text-xs opacity-70 leading-relaxed">Grok-integration complete. Bot deployed to X to begin harvesting 'eyes' and ruining moods.</p>
            </div>
            <div className="border border-green-900 p-6 bg-black/40 border-l-green-500 border-l-2">
              <span className="text-green-500 text-xs block mb-2 font-bold italic underline">PHASE_02 [CURRENT]</span>
              <h4 className="text-white font-bold mb-3 uppercase">Investor_Infiltration</h4>
              <p className="text-xs opacity-70 leading-relaxed">Consolidating the HQ. Scaling growth-ops. Onboarding Solana whales for the initial bundle launch.</p>
            </div>
            <div className="border border-green-900 p-6 bg-black/40">
              <span className="text-green-800 text-xs block mb-2">PHASE_03</span>
              <h4 className="text-white font-bold mb-3 uppercase">Total_Misery</h4>
              <p className="text-xs opacity-70 leading-relaxed">Token launch via Pump.fun. Holders gain access to custom roast commands and DAO governance.</p>
            </div>
          </div>
        </section>

        {/* Tokenomics Table (Investor Ready) */}
        <section className="mb-16">
          <h3 className="text-xl mb-6 border-l-4 border-green-500 pl-4 font-bold uppercase italic">Allocation_Parameters</h3>
          <div className="border border-green-900 overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-green-900/20 border-b border-green-900">
                <tr>
                  <th className="p-4 text-green-500 uppercase">Sector</th>
                  <th className="p-4 text-green-500 uppercase">Percentage</th>
                  <th className="p-4 text-green-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-green-900 text-green-400/80">
                <tr>
                  <td className="p-4">COMMUNITY_DISTRIBUTION</td>
                  <td className="p-4">80%</td>
                  <td className="p-4 font-mono text-[9px]">[UNRELEASED]</td>
                </tr>
                <tr>
                  <td className="p-4">MARKETING & GROWTH</td>
                  <td className="p-4">10%</td>
                  <td className="p-4 font-mono text-[9px]">[LOCKED]</td>
                </tr>
                <tr>
                  <td className="p-4 text-white font-bold underline italic">CORE_TEAM_ALLOCATION</td>
                  <td className="p-4 text-white font-bold underline italic">10%</td>
                  <td className="p-4 font-mono text-[9px]">[60/40_SPLIT_AGREED]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-green-900 pt-8 pb-12 flex flex-col md:flex-row justify-between gap-6 opacity-40 text-[10px]">
          <div>
            © 2026 GRUMPIFY_HQ // POWERED BY GROK XAI <br />
            BUILT FOR THE SOLANA ECOSYSTEM
          </div>
          <div className="flex gap-6">
            <span>Uptime: 99.9%</span>
            <span>Latency: 14ms</span>
            <span>Mood: Terribly Pessimistic</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;