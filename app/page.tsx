import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
