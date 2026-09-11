"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeFluidWaveProps {
  className?: string;
}

export function ThreeFluidWave({ className = "" }: ThreeFluidWaveProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanup: (() => void) | undefined;

    const isWebGLAvailable = () => {
      try {
        const testCanvas = document.createElement("canvas");
        return Boolean(
          window.WebGLRenderingContext &&
            (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    // 1. High-End 3D Silk Mesh Wave (Three.js)
    const initThreeWave = (): (() => void) => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
      camera.position.set(0, -60, 140);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Grid mesh plane
      const planeWidth = 260;
      const planeHeight = 180;
      const segW = 48;
      const segH = 36;

      const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight, segW, segH);
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const originalZ = new Float32Array(posAttr.count);

      for (let i = 0; i < posAttr.count; i++) {
        originalZ[i] = posAttr.getZ(i);
      }

      // Elegant wireframe material with blue-sky gradient
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#3B82F6"),
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.x = -Math.PI / 3.2;
      scene.add(mesh);

      // Secondary layered mesh for soft depth glow
      const wireMat2 = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#1D4ED8"),
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      const mesh2 = new THREE.Mesh(geometry, wireMat2);
      mesh2.rotation.x = -Math.PI / 3.2;
      mesh2.position.z = -15;
      scene.add(mesh2);

      const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouse.targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      };
      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      const handleResize = () => {
        if (!container) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      let animId: number;
      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);

        const time = clock.getElapsedTime() * 0.9;
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Gentle camera float
        camera.position.x = mouse.x * 20;
        camera.position.y = -60 + mouse.y * 15;
        camera.lookAt(0, 0, 0);

        // Undulate vertices like fluid silk waves
        for (let i = 0; i < posAttr.count; i++) {
          const x = posAttr.getX(i);
          const y = posAttr.getY(i);

          const wave1 = Math.sin(x * 0.04 + time * 1.2) * 9;
          const wave2 = Math.cos(y * 0.05 + time * 0.9) * 8;
          const waveMouse = Math.sin((x * mouse.x + y * mouse.y) * 0.03) * 6;

          posAttr.setZ(i, wave1 + wave2 + waveMouse);
        }
        posAttr.needsUpdate = true;

        renderer.render(scene, camera);
      };
      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        if (container && renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        wireMat2.dispose();
        renderer.dispose();
      };
    };

    // 2. Resilient 2D Canvas Wave Simulation (100% Guaranteed Fallback)
    const init2DWaveFallback = (): (() => void) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return () => {};

      canvas.width = container.clientWidth || window.innerWidth;
      canvas.height = container.clientHeight || window.innerHeight;
      container.appendChild(canvas);

      let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      };
      window.addEventListener("mousemove", handleMouseMove, { passive: true });

      const handleResize = () => {
        canvas.width = container.clientWidth || window.innerWidth;
        canvas.height = container.clientHeight || window.innerHeight;
      };
      window.addEventListener("resize", handleResize);

      let animId: number;
      let step = 0;

      const render = () => {
        animId = requestAnimationFrame(render);
        step += 0.015;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const lines = 7;
        for (let l = 0; l < lines; l++) {
          ctx.beginPath();
          const baseHeight = canvas.height * 0.55 + l * 18;
          const alpha = 0.08 + (l / lines) * 0.12;
          ctx.strokeStyle = l % 2 === 0 
            ? `rgba(37, 99, 235, ${alpha})` 
            : `rgba(59, 130, 246, ${alpha * 0.8})`;
          ctx.lineWidth = 1.2;

          for (let x = 0; x < canvas.width; x += 15) {
            const dx = (x - mouse.x) * 0.005;
            const y =
              baseHeight +
              Math.sin(x * 0.008 + step + l * 0.5) * 22 +
              Math.cos(x * 0.004 + step * 0.7) * 14 +
              Math.sin(dx) * 12;

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      };
      render();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        if (canvas.parentNode === container) {
          container.removeChild(canvas);
        }
      };
    };

    if (isWebGLAvailable()) {
      try {
        cleanup = initThreeWave();
      } catch (err) {
        console.warn("Three.js WebGL fallback triggered:", err);
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        }
        cleanup = init2DWaveFallback();
      }
    } else {
      cleanup = init2DWaveFallback();
    }

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      style={{ opacity: 0.95 }}
    />
  );
}
