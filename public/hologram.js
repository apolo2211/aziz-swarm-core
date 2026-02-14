// Initialisation de la scène
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    canvas: document.getElementById('canvas-hologram'), 
    alpha: true, 
    antialias: true 
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Création d'une forme géométrique complexe (Torus Knot)
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ 
    color: 0x00ffcc, 
    wireframe: true, 
    transparent: true, 
    opacity: 0.3 
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 30;

// Animation
function animate() {
    requestAnimationFrame(animate);
    
    // Rotations
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    
    // Effet de "pulsation" holographique
    const time = Date.now() * 0.001;
    material.opacity = 0.15 + Math.abs(Math.sin(time)) * 0.2;
    
    renderer.render(scene, camera);
}

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
console.log("AZIZ Hologram System: Online");