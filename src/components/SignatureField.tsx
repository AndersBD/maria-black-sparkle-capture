
import React, { useRef, useEffect } from 'react';
import { Label } from '@/components/ui/label';

interface SignatureFieldProps {
  onChange: (signatureData: string) => void;
  value?: string;
}

const SignatureField: React.FC<SignatureFieldProps> = ({ onChange, value }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas properties
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    // If there's an existing signature, draw it
    if (value) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };
      img.src = value;
    }
  }, [value]);

  const startDrawing = (e: React.TouchEvent | React.MouseEvent) => {
    isDrawing.current = true;
    draw(e);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    const canvas = canvasRef.current;
    if (canvas) {
      onChange(canvas.toDataURL());
    }
  };

  const draw = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDrawing.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = (e as React.MouseEvent).clientX - rect.left;
      y = (e as React.MouseEvent).clientY - rect.top;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    onChange('');
  };

  return (
    <div className="form-group">
      <Label className="block mb-2">Underskrift *</Label>
      <div className="border rounded-lg p-4 bg-white">
        <canvas
          ref={canvasRef}
          width={600}
          height={200}
          className="w-full border rounded touch-none cursor-crosshair bg-white"
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchMove={draw}
        />
        <button
          type="button"
          onClick={clearSignature}
          className="mt-2 text-sm text-muted-foreground hover:text-foreground"
        >
          Ryd underskrift
        </button>
      </div>
    </div>
  );
};

export default SignatureField;
