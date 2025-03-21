import express from 'express';
import goalsRoutes from './routes/goals.routes'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';

const app = express()

app.use(express.json())

const port = 3000

app.use(goalsRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})