/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'

Route.group(() => {
	Route.resource('users', 'UsersController').apiOnly().middleware({})
	Route.get('/authentication/user/me', 'AuthController.user').middleware('auth')

	// Route.post('/authentication/api/login', 'AuthController.loginApi')
	// Route.post('/authentication/api/logout', 'AuthController.logoutApi').middleware('auth')

	Route.post('/authentication/web/login', 'AuthController.loginWeb')
	Route.post('/authentication/web/logout', 'AuthController.logoutWeb').middleware('auth')

	Route.resource('cookies', 'CookiesController').apiOnly().only(['show', 'store'])

	Route.resource('poemes', 'PoèmesController')
		.apiOnly()
		.middleware({
			store: ['auth'],
			edit: ['auth'],
			destroy: ['auth']
		})

	Route.resource('books', 'BooksController')
		.apiOnly()
		.middleware({
			store: ['auth'],
			edit: ['auth'],
			destroy: ['auth']
		})

	Route.resource('parts', 'PartsController')
		.apiOnly()
		.middleware({
			store: ['auth'],
			edit: ['auth'],
			destroy: ['auth']
		})

	Route.resource('chapters', 'ChaptersController')
		.apiOnly()
		.middleware({
			store: ['auth'],
			edit: ['auth'],
			destroy: ['auth']
		})

	Route.resource('pictures', 'PicturesController')
		.apiOnly()
		.middleware({
			store: ['auth'],
			edit: ['auth'],
			destroy: ['auth']
		})

	// récupérer une ou plusieurs images
	Route.get('/uploads/:module/:filename', async ({ response, params }) => {
		response.download(Application.makePath(`../storage/uploads/${params.module}`, params.filename))
	})
}).prefix('/api')
