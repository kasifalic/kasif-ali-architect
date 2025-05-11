
import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Paintbrush, 
  Eraser, 
  Circle, 
  Square, 
  Download,
  Trash2,
  PencilLine
} from "lucide-react";

interface DrawingCanvasProps {
  width?: number;
  height?: number;
}

const DrawingCanvas = ({ width = 800, height = 500 }: DrawingCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
  const [brushSize, setBrushSize] = useState<number>(5);
  const [brushColor, setBrushColor] = useState<string>("#9b87f5");
  const [activeTool, setActiveTool] = useState<"brush" | "pencil" | "eraser">("brush");

  const colors = [
    "#9b87f5", // Primary purple
    "#0EA5E9", // Ocean blue
    "#F97316", // Bright orange
    "#D946EF", // Magenta pink
    "#10B981", // Green
    "#ffffff", // White
    "#000000", // Black
  ];

  // Initialize the canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    // Create a new fabric canvas
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "#1A1F2C",
      width,
      height,
      isDrawingMode: true,
    });

    fabricCanvasRef.current = canvas;

    // Set initial brush settings
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = brushColor;
      canvas.freeDrawingBrush.width = brushSize;
    }

    return () => {
      canvas.dispose();
    };
  }, []);

  // Update brush settings when they change
  useEffect(() => {
    const canvas = fabricCanvasRef.current;
    if (!canvas) return;

    // Adjust brush settings
    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = activeTool === "eraser" ? "#1A1F2C" : brushColor;
      canvas.freeDrawingBrush.width = brushSize;
    }

    // Switch brush types
    if (activeTool === "pencil") {
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.color = brushColor;
      canvas.freeDrawingBrush.width = brushSize;
    } else if (activeTool === "brush") {
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.color = brushColor;
      canvas.freeDrawingBrush.width = brushSize;
      // Make it more brush-like with higher stroke width
      canvas.freeDrawingBrush.strokeLineCap = "round";
      canvas.freeDrawingBrush.strokeLineJoin = "round";
    } else if (activeTool === "eraser") {
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.color = "#1A1F2C"; // Same as background
      canvas.freeDrawingBrush.width = brushSize;
    }
  }, [brushSize, brushColor, activeTool]);

  const handleClear = () => {
    if (!fabricCanvasRef.current) return;
    fabricCanvasRef.current.clear();
    fabricCanvasRef.current.backgroundColor = "#1A1F2C";
    fabricCanvasRef.current.renderAll();
  };

  const handleDownload = () => {
    if (!fabricCanvasRef.current) return;
    const dataURL = fabricCanvasRef.current.toDataURL({
      format: "png",
      quality: 1.0,
    });
    
    const link = document.createElement("a");
    link.download = "my-drawing.png";
    link.href = dataURL;
    link.click();
  };

  const handleToolChange = (tool: "brush" | "pencil" | "eraser") => {
    setActiveTool(tool);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="bg-secondary/30 backdrop-blur-sm p-5 rounded-lg border border-primary/20">
        <h2 className="text-3xl font-bold mb-8 text-gradient">Express Yourself</h2>
        
        {/* Canvas container with a shimmering border to match the theme */}
        <div className="relative rounded-lg overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-shimmer bg-[length:400%_100%]"></div>
          <div className="relative z-10 rounded-lg overflow-hidden" style={{ transform: 'scale(0.99)' }}>
            <canvas ref={canvasRef} className="w-full max-w-full"></canvas>
          </div>
        </div>

        {/* Controls section */}
        <div className="flex flex-wrap gap-4 justify-between items-center">
          {/* Brush tools */}
          <div className="flex gap-2">
            <Button
              size="icon"
              variant={activeTool === "brush" ? "default" : "outline"}
              onClick={() => handleToolChange("brush")}
              className="w-10 h-10"
            >
              <Paintbrush size={20} />
            </Button>
            <Button
              size="icon"
              variant={activeTool === "pencil" ? "default" : "outline"}
              onClick={() => handleToolChange("pencil")}
              className="w-10 h-10"
            >
              <PencilLine size={20} />
            </Button>
            <Button
              size="icon"
              variant={activeTool === "eraser" ? "default" : "outline"}
              onClick={() => handleToolChange("eraser")}
              className="w-10 h-10"
            >
              <Eraser size={20} />
            </Button>
          </div>

          {/* Color picker */}
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-8 h-8 rounded-full ${
                  brushColor === color
                    ? "ring-2 ring-offset-2 ring-white"
                    : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setBrushColor(color)}
              />
            ))}
          </div>

          {/* Size slider */}
          <div className="flex items-center gap-3">
            <Circle size={10} />
            <Slider 
              value={[brushSize]} 
              onValueChange={(values) => setBrushSize(values[0])} 
              min={1} 
              max={30}
              step={1}
              className="w-32"
            />
            <Circle size={20} />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleClear}>
              <Trash2 size={16} className="mr-2" /> Clear
            </Button>
            <Button size="sm" onClick={handleDownload}>
              <Download size={16} className="mr-2" /> Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawingCanvas;
