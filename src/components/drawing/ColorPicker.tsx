
import React from "react";

interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ColorPicker = ({ colors, selectedColor, onColorChange }: ColorPickerProps) => {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-8 h-8 rounded-full ${
            selectedColor === color
              ? "ring-2 ring-offset-2 ring-white"
              : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => onColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
