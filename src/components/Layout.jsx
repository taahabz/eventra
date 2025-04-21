import Navbar from './Navbar';
import Footer from './Footer';
import ParticlesBackground from './ParticlesBackground';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f1621] text-white">
      <ParticlesBackground />
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
} 