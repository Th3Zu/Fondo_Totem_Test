/*!
 * particles.js - v1.0.0
 * A lightweight jQuery plugin for creating particles
 * github.com/VincentGarreau/particles.js
 */

var particlesJS = function(tag_id, params) {
    var canvas_el = document.querySelector('#' + tag_id + ' > canvas');
    
    if (canvas_el == null) {
        var canvas = document.createElement('canvas');
        canvas.className = 'particles-js-canvas-el';
        document.getElementById(tag_id).appendChild(canvas);
    }
    
    var canvas = document.querySelector('#' + tag_id + ' > canvas');
    var ctx = canvas.getContext('2d');
    var w = canvas.width = canvas.offsetWidth;
    var h = canvas.height = canvas.offsetHeight;
    
    var particles = [];
    var defaults = {
        particles: {
            number: { value: 100, density: { enable: false, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'out' }
        }
    };
    
    var config = Object.assign({}, defaults, params);
    
    // Crear partículas
    function createParticles() {
        particles = [];
        for (var i = 0; i < config.particles.number.value; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * config.particles.move.speed * 2,
                vy: (Math.random() - 0.5) * config.particles.move.speed * 2,
                size: Math.random() * config.particles.size.value + 1,
                color: config.particles.color.value,
                opacity: config.particles.opacity.value
            });
        }
    }
    
    // Dibujar partículas
    function drawParticles() {
        ctx.clearRect(0, 0, w, h);
        
        particles.forEach(function(p) {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Dibujar líneas conectoras
        if (config.particles.line_linked.enable) {
            ctx.globalAlpha = config.particles.line_linked.opacity;
            ctx.strokeStyle = config.particles.line_linked.color;
            ctx.lineWidth = config.particles.line_linked.width;
            
            for (var i = 0; i < particles.length; i++) {
                for (var j = i + 1; j < particles.length; j++) {
                    var p1 = particles[i];
                    var p2 = particles[j];
                    var distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
                    
                    if (distance < config.particles.line_linked.distance) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        }
        
        ctx.globalAlpha = 1;
    }
    
    // Actualizar posiciones
    function updateParticles() {
        particles.forEach(function(p) {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > w) p.vx = -p.vx;
            if (p.y < 0 || p.y > h) p.vy = -p.vy;
        });
    }
    
    // Animar
    function animate() {
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }
    
    // Iniciar
    createParticles();
    animate();
    
    // Redimensionar canvas
    window.addEventListener('resize', function() {
        w = canvas.width = canvas.offsetWidth;
        h = canvas.height = canvas.offsetHeight;
    });
};
