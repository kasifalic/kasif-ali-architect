import { Link } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8F0] via-[#FFFBF5] to-white">
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        {/* Big 404 with portrait peeking */}
        <div className="relative mb-6">
          {/* The 404 */}
          <h1
            className="font-sora text-[10rem] md:text-[14rem] font-black leading-none select-none"
            style={{
              background: 'linear-gradient(135deg, #C9A86C 0%, #E8D5A3 40%, #8B7355 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.25,
            }}
          >
            404
          </h1>

          {/* Portrait peeking from behind the 0 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
            <div
              className="relative"
              style={{
                transform: 'rotate(-5deg)',
                animation: 'peekFloat 3s ease-in-out infinite',
              }}
            >
              <img
                src="/kasif-hero-new.png"
                alt="Kasif Ali looking for the lost page"
                className="w-32 h-40 md:w-44 md:h-56 object-cover object-top rounded-2xl shadow-xl border-4 border-white"
                style={{
                  filter: 'drop-shadow(0 10px 30px rgba(201, 168, 108, 0.3))',
                }}
              />
              {/* Speech bubble */}
              <div className="absolute -top-10 -right-20 md:-right-28 bg-white rounded-2xl rounded-bl-sm px-3 py-1.5 shadow-md border border-amber-200/60 whitespace-nowrap">
                <span className="text-xs md:text-sm font-outfit text-[#5a4a3a]">
                  Not my fault!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="max-w-md mx-auto mb-8">
          <h2
            className="font-sora text-2xl md:text-3xl font-bold mb-3"
            style={{ color: '#2a2218' }}
          >
            Page not found
          </h2>
          <p className="font-outfit text-base md:text-lg leading-relaxed" style={{ color: '#5a4a3a' }}>
            I've shipped 15 production systems, but this page isn't one of them.
            <br />
            <span className="text-sm opacity-70">
              (The one thing I didn't automate.)
            </span>
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sora font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #C9A86C, #8B7355)',
            }}
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-sora font-semibold border-2 transition-all duration-300 hover:shadow-md"
            style={{
              color: '#8B7355',
              borderColor: '#C9A86C',
            }}
          >
            See My Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <style>{`
        @keyframes peekFloat {
          0%, 100% { transform: rotate(-5deg) translateY(0); }
          50% { transform: rotate(-3deg) translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
