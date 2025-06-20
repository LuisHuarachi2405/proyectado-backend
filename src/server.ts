import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import router from './modules/goals/goals.routes';

const app = express()

app.use(express.json())

const port = 3000

app.use(router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})