import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Part from 'App/Models/Part'
import StoreValidator from 'App/Validators/Part/StoreValidator'
import UpdateValidator from 'App/Validators/Part/UpdateValidator'

export default class PartsController {
  public async index() {
    return await Part
        .query()
        .preload('chapters')
        .orderBy('id', 'desc')
}

public async show ({params}: HttpContextContract) {
    return await Part
      .query()
      .where('id',params.id)
      .preload('chapters')
      .orderBy('id', 'desc')
      .firstOrFail()
  }

public async store ({request}: HttpContextContract) {

    const data = await request.validate(StoreValidator)
    const part = await Part.create(data)
    await part.preload('chapters')

    return part
  }

  public async update ({ params, request}: HttpContextContract) {
    const part = await Part.query().where('id', params.id).firstOrFail()
    const data = await request.validate(UpdateValidator)
    
    await part.merge(data).save()
    await part
        .preload('chapters', (post) => {
            post.orderBy('created_at', 'desc')
        })
    
    return part
  }

  public async destroy ({ params }: HttpContextContract) {
    const part = await Part.query().where('id', params.id).firstOrFail()
    await part.delete()

    return { message: 'Part has been deleted' }
  }

}
