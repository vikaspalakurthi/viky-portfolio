"use client";

import { useEffect, useRef } from "react";

/**
 * Cinematic market-data backdrop.
 * Two animated, glowing price streams (a procedural random walk) over a faint
 * perspective grid, with drifting particles and mouse parallax. Fully canvas —
 * no DOM churn — and it pauses when off-screen / respects reduced motion.
 */
export default function MarketCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const context = el.getContext("2d");
    if (!context) return;
    const canvas: HTMLCanvasElement = el;
    const ctx: CanvasRenderingContext2D = context;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Pointer parallax (smoothed)
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    type Stream = {
      color: string;
      glow: string;
      pts: number[];
      base: number; // baseline (0..1 of height)
      amp: number;
      speed: number;
      phase: number;
      lineWidth: number;
      fill: boolean;
    };

    let streams: Stream[] = [];
    let particles: { x: number; y: number; vy: number; r: number; a: number }[] = [];
    const N = 140; // points per stream

    function resize() {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    // deterministic-ish walk using sines so it looks organic without Math.random spikes
    function seed() {
      streams = [
        {
          color: "#3ddc97",
          glow: "rgba(61,220,151,0.55)",
          pts: [],
          base: 0.52,
          amp: 0.16,
          speed: 0.6,
          phase: 0,
          lineWidth: 2.2,
          fill: true,
        },
        {
          color: "#4d9fff",
          glow: "rgba(77,159,255,0.4)",
          pts: [],
          base: 0.62,
          amp: 0.11,
          speed: 0.9,
          phase: 100,
          lineWidth: 1.6,
          fill: false,
        },
      ];
      for (const s of streams) {
        s.pts = [];
        for (let i = 0; i < N; i++) s.pts.push(sample(s, i, 0));
      }
      particles = [];
      const count = reduced ? 0 : 34;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: (i / count) * width,
          y: height * (0.3 + 0.6 * ((i * 37) % 100) / 100),
          vy: 6 + ((i * 13) % 10),
          r: 0.6 + ((i * 7) % 10) / 10,
          a: 0.15 + ((i * 17) % 30) / 100,
        });
      }
    }

    function sample(s: Stream, i: number, t: number) {
      const x = i / N;
      const y =
        s.base +
        s.amp *
          (Math.sin(x * 7 + t * s.speed + s.phase) * 0.55 +
            Math.sin(x * 17 - t * s.speed * 0.7 + s.phase) * 0.28 +
            Math.sin(x * 3.3 + t * s.speed * 0.4) * 0.17);
      return y;
    }

    function drawGrid() {
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.035)";
      ctx.lineWidth = 1;
      const step = 46;
      const ox = (pointer.x - 0.5) * -18;
      const oy = (pointer.y - 0.5) * -12;
      for (let x = (ox % step) - step; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = (oy % step) - step; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawStream(s: Stream, t: number) {
      const px = (pointer.x - 0.5) * (s.fill ? 26 : 40);
      const py = (pointer.y - 0.5) * (s.fill ? 20 : 30);

      ctx.save();
      ctx.translate(px, py);

      // path
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1)) * width;
        const y = s.pts[i] * height;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      if (s.fill) {
        const grad = ctx.createLinearGradient(0, height * 0.3, 0, height);
        grad.addColorStop(0, "rgba(61,220,151,0.16)");
        grad.addColorStop(1, "rgba(61,220,151,0)");
        ctx.save();
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();

        // redraw the line path (fill closed it)
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const x = (i / (N - 1)) * width;
          const y = s.pts[i] * height;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
      }

      ctx.shadowColor = s.glow;
      ctx.shadowBlur = 18;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.lineWidth;
      ctx.lineJoin = "round";
      ctx.stroke();

      // leading dot
      const lx = width;
      const ly = s.pts[N - 1] * height;
      const pulse = 3 + Math.sin(t * 3) * 1.2;
      ctx.beginPath();
      ctx.arc(lx - 2, ly, pulse, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.shadowBlur = 24;
      ctx.fill();
      ctx.restore();
    }

    function drawParticles(dt: number) {
      for (const p of particles) {
        p.y -= p.vy * dt;
        if (p.y < -4) {
          p.y = height + 4;
          p.x = (p.x + 53) % width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(61,220,151,${p.a})`;
        ctx.fill();
      }
    }

    let raf = 0;
    let last = 0;
    let t = 0;
    let running = true;

    function frame(now: number) {
      if (!running) return;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
      last = now;
      t += dt;

      // smooth pointer
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      ctx.clearRect(0, 0, width, height);
      drawGrid();

      if (!reduced) {
        for (const s of streams) {
          for (let i = 0; i < N; i++) s.pts[i] = sample(s, i, t);
        }
      }
      for (const s of streams) drawStream(s, t);
      drawParticles(dt);

      raf = requestAnimationFrame(frame);
    }

    function onMove(e: PointerEvent) {
      pointer.tx = e.clientX / window.innerWidth;
      pointer.ty = e.clientY / window.innerHeight;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) {
          last = 0;
          raf = requestAnimationFrame(frame);
        } else {
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );

    resize();
    io.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(frame);

    // draw one static frame for reduced motion
    if (reduced) {
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      for (const s of streams) drawStream(s, 0);
    }

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
