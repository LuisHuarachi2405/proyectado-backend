import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import userRoutes from './modules/user/user.routes';
import goalsRoutes from './modules/goals/goals.routes';
import categoryRoutes from './modules/category/category.routes';
import incomeRoutes from './modules/category/category.routes';
import { swaggerSpec } from './config/swagger';

const app = express()

app.use(express.json())

const port = 3000

app.use('/api/users', userRoutes);
app.use('/api/goals', goalsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/income', incomeRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})