import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import userRoutes from './modules/user/user.routes';
import goalsRoutes from './modules/goals/goals.routes';

const app = express()

app.use(express.json())

const port = 3000

app.use('/api/users', userRoutes);
app.use('/api/goals', goalsRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})