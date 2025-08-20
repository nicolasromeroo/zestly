import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;