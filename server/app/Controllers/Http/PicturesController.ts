import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Picture from 'App/Models/Picture'
import StoreValidator from 'App/Validators/Picture/StoreValidator'
import UpdateValidator from 'App/Validators/Picture/UpdateValidator'
import Application from '@ioc:Adonis/Core/Application'

export default class PicturesController {
	public async index({}: HttpContextContract) {
		return await Picture.query().orderBy('id', 'asc')
	}

	public async show({ params }: HttpContextContract) {
		return await Picture.query().where('id', params.id).orderBy('id', 'asc').firstOrFail()
	}

	public async store({ request }: HttpContextContract) {
		const data = await request.validate(StoreValidator)

		// avoir le même timestamp pour le nom du fichier stocker et le nom du fichier en bdd
		const timestamp = Date.now()

		// sauvegarde image sur disque

		console.log(data.picture)

		await data.picture?.move(Application.makePath(`../storage/uploads/${data.module}`), {
			name: `${timestamp}.${data.picture.extname}`
		})

		// création image BDD plus return
		return await Picture.create({
			filename: `${timestamp}.${data.picture.extname}`,
			label: data.picture.clientName
		})
	}

	public async update({ params, request }: HttpContextContract) {
		const picture = await Picture.query().where('id', params.id).firstOrFail()
		const data = await request.validate(UpdateValidator)

		await picture.merge(data).save()
		return picture
	}

	public async destroy({ params }: HttpContextContract) {
		const picture = await Picture.query().where('id', params.id).firstOrFail()
		await picture.delete()

		return { message: 'Picture has been deleted' }
	}
}
