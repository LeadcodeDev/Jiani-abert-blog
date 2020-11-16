import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Part from 'App/Models/Part'
import StoreValidator from 'App/Validators/Part/StoreValidator'
import UpdateValidator from 'App/Validators/Part/UpdateValidator'

export default class PartsController {
	public async index() {
		return await Part.query().preload('book').preload('chapters').orderBy('id', 'asc')
	}

	public async show({ params }: HttpContextContract) {
		return await Part.query()
			.where('id', params.id)
			.preload('book')
			.preload('chapters')
			.orderBy('id', 'asc')
			.firstOrFail()
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)
		const part = await Part.create(data)
		await Promise.all([part.preload('book'), part.preload('chapters')])

		return part
	}

	public async update({ params, request }: HttpContextContract) {
		const part = await Part.query().where('id', params.id).firstOrFail()
		const data = await request.validate(UpdateValidator)

		await part.merge(data).save()

		await Promise.all([
			part.preload('book'),
			part.preload('chapters'),
			part.preload('chapters', (chapter) => {
				chapter.orderBy('created_at', 'desc')
			})
		])

		return part
	}

	public async destroy({ params }: HttpContextContract) {
		const part = await Part.query().where('id', params.id).firstOrFail()
		await part.delete()

		return { message: 'Part has been deleted' }
	}
}
