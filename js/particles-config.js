// Configuración de Particles.js
// Este archivo contiene la configuración personalizada de las partículas
// Editarlo aquí para cambiar la apariencia y comportamiento de las partículas

particlesJS("particles-js", {
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.6,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 180,
            color: "#ffffff",
            opacity: 0.3,
            width: 1.5
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});
