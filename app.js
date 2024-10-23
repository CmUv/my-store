const express = require('express');
const path = require('path'); //Importa el módulo path, de utilidades para trabajar con rutas de archivos y directorios
const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; //define el puerto

app.get('/things/:name/:id', function (req, res) {
  res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});

app.listen(port, () => {
  console.log(`puerto habiltado http://localhost:${port}`);
});
