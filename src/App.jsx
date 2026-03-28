import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import People from './components/People';
import Location from './components/Location';
import Rooms from './components/Rooms';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-hpDark antialiased bg-white">
      <Navbar />
      <Hero />
      <main className="relative z-10 bg-white mt-[100vh] shadow-2xl">
        <About />
        <People />
        <Location />
        <Rooms />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}

export default App;
