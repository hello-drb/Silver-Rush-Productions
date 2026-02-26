/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import DivisionGrid from './components/DivisionGrid';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';

export default function App() {
  return (
    <main className="relative min-h-screen bg-[#0d0d0d] selection:bg-[#c9a84c]/30 selection:text-white">
      {/* Global Overlays */}
      <div className="grain-overlay" />
      <ParticleCanvas />
      
      {/* Page Content */}
      <Hero />
      <DivisionGrid />
      <Footer />
    </main>
  );
}
