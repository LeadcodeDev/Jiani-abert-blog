import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Book from 'App/Models/Book'
import StoreValidator from 'App/Validators/Book/StoreValidator'
import UpdateValidator from 'App/Validators/Book/UpdateValidator'

export default class BooksController {
	public async index() {
		return await Book.query()
			.preload('parts', (part) => part.preload('chapters'))
			.orderBy('id', 'asc')
			.preload('picture')
	}

	public async show({ params }: HttpContextContract) {
		return await Book.query()
			.where('id', params.id)
			.preload('parts', (part) => part.preload('chapters'))
			.orderBy('id', 'asc')
			.firstOrFail()
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)
		const book = await Book.create(data)
		await book.preload('parts')
		await book.preload('picture')

		return book
	}

	public async update({ params, request }: HttpContextContract) {
		const book = await Book.query().where('id', params.id).firstOrFail()
		const data = await request.validate(UpdateValidator)

		await book.merge(data).save()
		await book.preload('parts', (part) => {
			part.orderBy('created_at', 'desc')
		})
		await book.preload('picture')

		return book
	}

	public async destroy({ params }: HttpContextContract) {
		const book = await Book.query().where('id', params.id).firstOrFail()
		await book.delete()

		return { message: 'Book has been deleted' }
	}
}
