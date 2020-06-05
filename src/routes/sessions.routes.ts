import { Router } from 'express';
// import CreateUserService from '../services/CreateUserService';

const sessionsRouter = Router();

/**
 * Create a session
 */
sessionsRouter.post('/', async (request, response) => {
  try {
    return response.status(201).json('session');
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionsRouter;
