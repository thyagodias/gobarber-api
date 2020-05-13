import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'API GoBarber' });
});

export default routes;
