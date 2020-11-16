import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Chapter from 'App/Models/Chapter'
import StoreValidator from 'App/Validators/Chapter/StoreValidator'
import UpdateValidator from 'App/Validators/Chapter/UpdateValidator'

export default class ChaptersController {
	public async index() {
		return await Chapter.query().preload('part').orderBy('id', 'asc')
	}

	public async show({ params }: HttpContextContract) {
		return await Chapter.query().where('id', params.id).preload('part').orderBy('id', 'asc').firstOrFail()
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)
		const chapter = await Chapter.create(data)

		await Promise.all([chapter.preload('part')])

		return chapter
	}

	public async update({ params, request }: HttpContextContract) {
		const chapter = await Chapter.query().where('id', params.id).firstOrFail()
		const data = await request.validate(UpdateValidator)
		await chapter.merge(data).save()
		await Promise.all([chapter.preload('part')])

		return chapter
	}

	public async destroy({ params }: HttpContextContract) {
		const chapter = await Chapter.query().where('id', params.id).firstOrFail()
		await chapter.delete()

		return { message: 'Chapter has been deleted' }
	}
}
