
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DrawingCanvas from "@/components/DrawingCanvas";

const Draw = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="container mx-auto py-24">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h1 className="text-5xl font-bold mb-4 animate-shimmer bg-shimmer bg-clip-text text-transparent bg-[length:300%_100%]">Digital Canvas</h1>
              <p className="text-xl text-muted-foreground">Unleash your creativity with this digital drawing tool</p>
            </div>
            <DrawingCanvas />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Draw;
