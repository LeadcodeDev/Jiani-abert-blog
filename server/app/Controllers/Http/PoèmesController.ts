import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Poème from 'App/Models/Poème'
import StoreValidator from 'App/Validators/Poème/StoreValidator'
import UpdateValidator from 'App/Validators/Poème/UpdateValidator'

export default class PoèmesController {
	public async index() {
		return await Poème.query().orderBy('id', 'asc')
	}

	public async show({ params }: HttpContextContract) {
		return await Poème.query().where('id', params.id).orderBy('id', 'asc').firstOrFail()
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)
		const poème = await Poème.create(data)

		return poème
	}

	public async update({ params, request }: HttpContextContract) {
		const poème = await Poème.query().where('id', params.id).firstOrFail()
		const data = await request.validate(UpdateValidator)
		await poème.merge(data).save()

		return poème
	}

	public async destroy({ params }: HttpContextContract) {
		const poème = await Poème.query().where('id', params.id).firstOrFail()
		await poème.delete()

		return { message: 'Poème has been deleted' }
	}
}
