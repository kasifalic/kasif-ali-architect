
import React from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  Paintbrush, 
  Eraser, 
  Circle, 
  Download,
  Trash2,
  PencilLine
} from "lucide-react";

interface ToolbarProps {
  activeTool: "brush" | "pencil" | "eraser";
  brushSize: number;
  onToolChange: (tool: "brush" | "pencil" | "eraser") => void;
  onBrushSizeChange: (size: number) => void;
  onClear: () => void;
  onDownload: () => void;
}

const Toolbar = ({ 
  activeTool, 
  brushSize, 
  onToolChange, 
  onBrushSizeChange, 
  onClear, 
  onDownload 
}: ToolbarProps) => {
  return (
    <div className="flex flex-wrap gap-4 justify-between items-center">
      {/* Brush tools */}
      <div className="flex gap-2">
        <Button
          size="icon"
          variant={activeTool === "brush" ? "default" : "outline"}
          onClick={() => onToolChange("brush")}
          className="w-10 h-10"
        >
          <Paintbrush size={20} />
        </Button>
        <Button
          size="icon"
          variant={activeTool === "pencil" ? "default" : "outline"}
          onClick={() => onToolChange("pencil")}
          className="w-10 h-10"
        >
          <PencilLine size={20} />
        </Button>
        <Button
          size="icon"
          variant={activeTool === "eraser" ? "default" : "outline"}
          onClick={() => onToolChange("eraser")}
          className="w-10 h-10"
        >
          <Eraser size={20} />
        </Button>
      </div>

      {/* Size slider */}
      <div className="flex items-center gap-3">
        <Circle size={10} />
        <Slider 
          value={[brushSize]} 
          onValueChange={(values) => onBrushSizeChange(values[0])} 
          min={1} 
          max={30}
          step={1}
          className="w-32"
        />
        <Circle size={20} />
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={onClear}>
          <Trash2 size={16} className="mr-2" /> Clear
        </Button>
        <Button size="sm" onClick={onDownload}>
          <Download size={16} className="mr-2" /> Download
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
