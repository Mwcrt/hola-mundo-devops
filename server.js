const app = require('./index');

const PORT = process.env.PORT || 3000;

// Escuchar el puerto y mantener el proceso vivo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Evitar que Node termine si hay errores no capturados
process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});
