import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API REST',
      version: '1.0.0',
      description: 'Documentación de la API'
    },
    servers: [{ url: 'http://localhost:3000' }]
  },
  apis: ['./src/modules/**/*.routes.ts'], // Ruta donde están tus rutas
});