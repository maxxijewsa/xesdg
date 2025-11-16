import { useEffect, useRef } from "react";

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
    };
    setCanvasSize();
    
    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(document.body);
    window.addEventListener("resize", setCanvasSize);

    let animationFrameId: number;
    let isDark = document.documentElement.classList.contains("dark");
    
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const gridSize = 50;
    let offset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridColor = isDark
        ? "rgba(147, 51, 234, 0.15)"
        : "rgba(147, 51, 234, 0.1)";
      const glowColor = isDark
        ? "rgba(147, 51, 234, 0.3)"
        : "rgba(147, 51, 234, 0.2)";

      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      offset += 0.3;
      if (offset >= gridSize) offset = 0;

      for (let x = -gridSize + offset; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = -gridSize + offset; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const numParticles = 15;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < numParticles; i++) {
        const x = (Math.sin(time * 0.5 + i * 2) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.3 + i * 3) * 0.5 + 0.5) * canvas.height;
        const size = 3 + Math.sin(time * 2 + i) * 1.5;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
        gradient.addColorStop(0, glowColor);
        gradient.addColorStop(1, "rgba(147, 51, 234, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDark
          ? "rgba(168, 85, 247, 0.8)"
          : "rgba(147, 51, 234, 0.7)";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40"
      style={{ zIndex: 0 }}
    />
  );
}
