const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'REST API',
    description: ''
  },
  host: 'localhost:3000',
  schemes: ['http']
};

const outputFile = './swagger_output.json';

// 🔴 Asegúrate de que aquí esté tu archivo de rutas donde están los comentarios #swagger
const endpointsFiles = ['./src/modules/goals/goals.routes.ts'];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require('./src/server'); // o donde estés levantando tu app
});
