# Configuración de Particles.js

## Archivos principales:
- **particles.js** - Librería principal (no editar)
- **particles-config.js** - Archivo de configuración (EDITAR AQUÍ)

## Configuración fácil de editar en `particles-config.js`:

### Cantidad de partículas
```javascript
number: {
    value: 120,  // Aumentar para más partículas, disminuir para menos
}
```

### Color de partículas
```javascript
color: {
    value: "#ffffff"  // Cambiar por el color que desees (hexadecimal)
}
```

### Velocidad
```javascript
speed: 3  // Mayor número = más rápidas
```

### Tamaño
```javascript
size: {
    value: 3,  // Mayor número = partículas más grandes
    random: true  // Tamaños variados
}
```

### Distancia de conexión
```javascript
distance: 180  // Distancia a la que se conectan las partículas
```

### Opacidad
```javascript
opacity: {
    value: 0.6,  // De 0 a 1 (0 = invisible, 1 = totalmente opaco)
    random: true  // Opacidades variadas
}
```

### Comportamiento interactivo
- **onhover: grab** - Las partículas se atraen hacia el mouse
- **onclick: push** - Se crean nuevas partículas al hacer clic

## Estructura Z-index
1. **z-index: 0** - Background gradient (detrás)
2. **z-index: 10** - Canvas de partículas
3. **z-index: 20** - Logo (adelante)

Las partículas aparecerán detrás del logo pero frente del gradiente de fondo.
