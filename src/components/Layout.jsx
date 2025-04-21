import Navbar from './Navbar';
import Footer from './Footer';
import ParticlesBackground from './ParticlesBackground';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#0f1621] text-white relative overflow-x-hidden">
      <ParticlesBackground />
      <div className="flex flex-col min-h-screen w-full relative z-0">
        <Navbar />
        <main className="flex-grow relative z-0 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
} 