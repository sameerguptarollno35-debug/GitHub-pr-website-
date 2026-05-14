/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Doctor from './components/Doctor';
import Services from './components/Services';
import SignatureFocus from './components/SignatureFocus';
import WhyChooseUs from './components/WhyChooseUs';
import PatientJourney from './components/PatientJourney';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Services />
        <SignatureFocus />
        <Doctor />
        <PatientJourney />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

