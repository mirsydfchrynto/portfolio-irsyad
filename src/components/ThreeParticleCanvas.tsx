"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ThreeParticleCanvasProps {
  className?: string;
}

export function ThreeParticleCanvas({ className = "" }: ThreeParticleCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 280;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Configuration
    const particleCount = 75;
    const maxDistance = 90;
    const bounds = { x: 300, y: 220, z: 160 };

    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];
    const colors = new Float32Array(particleCount * 3);

    const crimsonColor = new THREE.Color("#E31B23");
    const dimWhiteColor = new THREE.Color("#9ca3af");
    const whiteColor = new THREE.Color("#f3f4f6");

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * bounds.x * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds.y * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds.z * 2;

      velocities.push({
        x: (Math.random() - 0.5) * 0.45,
        y: (Math.random() - 0.5) * 0.45,
        z: (Math.random() - 0.5) * 0.35,
      });

      // Accent roughly 25% with crimson red, rest with sleek silver/white
      const isCrimson = Math.random() < 0.28;
      const c = isCrimson ? crimsonColor : Math.random() < 0.5 ? dimWhiteColor : whiteColor;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    // Points Geometry & Material
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle sprite using canvas circle
    const createCircleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.35, "rgba(255, 255, 255, 0.85)");
      gradient.addColorStop(0.7, "rgba(227, 27, 35, 0.3)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const pointMaterial = new THREE.PointsMaterial({
      size: 5.5,
      vertexColors: true,
      map: createCircleTexture(),
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(pointCloud);

    // Dynamic Connecting Lines
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    const lineColors = new Float32Array(particleCount * particleCount * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      mouse.targetX = (clientX / rect.width) * 2 - 1;
      mouse.targetY = -(clientY / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Subtle scene rotation based on cursor
      scene.rotation.y = mouse.x * 0.35 + Math.sin(elapsedTime * 0.12) * 0.08;
      scene.rotation.x = -mouse.y * 0.25 + Math.cos(elapsedTime * 0.1) * 0.06;

      const posAttr = pointGeometry.attributes.position as THREE.BufferAttribute;
      const currentPos = posAttr.array as Float32Array;

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        currentPos[i3] += velocities[i].x;
        currentPos[i3 + 1] += velocities[i].y;
        currentPos[i3 + 2] += velocities[i].z;

        // Bounce back within bounds
        if (Math.abs(currentPos[i3]) > bounds.x) velocities[i].x *= -1;
        if (Math.abs(currentPos[i3 + 1]) > bounds.y) velocities[i].y *= -1;
        if (Math.abs(currentPos[i3 + 2]) > bounds.z) velocities[i].z *= -1;
      }
      posAttr.needsUpdate = true;

      // Update Lines between nearby particles
      let lineIndex = 0;
      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const lineColAttr = lineGeometry.attributes.color as THREE.BufferAttribute;
      const lPos = linePosAttr.array as Float32Array;
      const lCol = lineColAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const p1x = currentPos[i * 3];
        const p1y = currentPos[i * 3 + 1];
        const p1z = currentPos[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const p2x = currentPos[j * 3];
          const p2y = currentPos[j * 3 + 1];
          const p2z = currentPos[j * 3 + 2];

          const dx = p1x - p2x;
          const dy = p1y - p2y;
          const dz = p1z - p2z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1 - dist / maxDistance;

            // Point 1
            lPos[lineIndex * 3] = p1x;
            lPos[lineIndex * 3 + 1] = p1y;
            lPos[lineIndex * 3 + 2] = p1z;

            // Point 2
            lPos[(lineIndex + 1) * 3] = p2x;
            lPos[(lineIndex + 1) * 3 + 1] = p2y;
            lPos[(lineIndex + 1) * 3 + 2] = p2z;

            // Accent with subtle red tint for close connections
            const isRedLine = (i + j) % 3 === 0;
            const r = isRedLine ? 0.89 * alpha : 0.45 * alpha;
            const g = isRedLine ? 0.11 * alpha : 0.5 * alpha;
            const b = isRedLine ? 0.14 * alpha : 0.55 * alpha;

            lCol[lineIndex * 3] = r;
            lCol[lineIndex * 3 + 1] = g;
            lCol[lineIndex * 3 + 2] = b;

            lCol[(lineIndex + 1) * 3] = r;
            lCol[(lineIndex + 1) * 3 + 1] = g;
            lCol[(lineIndex + 1) * 3 + 2] = b;

            lineIndex += 2;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex);
      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      pointGeometry.dispose();
      pointMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      style={{ opacity: 0.85 }}
    />
  );
}
