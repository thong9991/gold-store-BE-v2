import { Request, Response, Router } from 'express'
import { createUserComposer } from '../../../infra/services/composers/User/createUser'
import { deleteUserComposer } from '../../../infra/services/composers/User/deleteUser'
import { getUserComposer } from '../../../infra/services/composers/User/getUser'
import { updateUserComposer } from '../../../infra/services/composers/User/updateUser'
import { expressAdapter } from '../../adapters/express'
import { ensureAdminAuthorized } from '../middlewares/ensureAdminAuthorized'

/**
 * Router for handling user-related routes.
 */
const userRoutes = Router()

/**
 * Endpoint to create a new user (register user).
 */
userRoutes.post('/', async (request: Request, response: Response) => {
  const adapter = await expressAdapter(request, createUserComposer())
  return response.status(adapter.statusCode).json(adapter.body)
})

/**
 * Endpoint to get user information (requires admin authentication).
 */
userRoutes.get(
  '/',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, getUserComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

/**
 * Endpoint to update user information (requires admin authentication).
 */
userRoutes.patch(
  '/:id',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, updateUserComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

/**
 * Endpoint to delete a user (requires admin authentication).
 */
userRoutes.delete(
  '/:id',
  ensureAdminAuthorized,
  async (request: Request, response: Response) => {
    const adapter = await expressAdapter(request, deleteUserComposer())
    return response.status(adapter.statusCode).json(adapter.body)
  }
)

export { userRoutes }
