import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene;
    let camera;
    let renderer;
    let spheres;
    let mouse = { x: 0, y: 0 };

    // Set up scene, camera, and renderer
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.7,
      10
    );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);

    // Create spheres
    spheres = new THREE.Group();
    const sphereCount = 500;

    // Reduce opacity by setting the transparent property and opacity property
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 0; i < sphereCount; i++) {
      const sphereGeometry = new THREE.SphereGeometry(0.02, 32, 32);
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

      // Spread spheres across the screen
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      sphere.position.set(x, y, z);

      spheres.add(sphere);
    }

    scene.add(spheres);

    // Camera position
    camera.position.z = 5;

    // Mouse move event handler
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    containerRef.current.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      spheres.rotation.x += 0.001;
      spheres.rotation.y += 0.001;

      // Update sphere positions based on mouse position for the ripple effect
      spheres.children.forEach((sphere) => {
        const scale =
          1 + Math.sin(mouse.x * 5) * 0.1 + Math.sin(mouse.y * 5) * 0.1;
        sphere.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div id="three-container" className="three-container" ref={containerRef}>
      {/* You can add content here that will appear on top of the spheres */}
    </div>
  );
};

export default ThreeBackground;
