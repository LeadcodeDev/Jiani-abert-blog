import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Chapter from 'App/Models/Chapter'
import StoreValidator from 'App/Validators/Chapter/StoreValidator'
import UpdateValidator from 'App/Validators/Chapter/UpdateValidator'

export default class ChaptersController {
  public async index() {
    return await Chapter
        .query()
        .orderBy('id', 'desc')
}

public async show ({params}: HttpContextContract) {
    return await Chapter
      .query()
      .where('id',params.id)
      .orderBy('id', 'desc')
      .firstOrFail()
  }

public async store ({request}: HttpContextContract) {

    const data = await request.validate(StoreValidator)
    const part = await Chapter.create(data)

    return part
  }

  public async update ({ params, request}: HttpContextContract) {
    const chapter = await Chapter.query().where('id', params.id).firstOrFail()
    const data = await request.validate(UpdateValidator)
    await chapter.merge(data).save()
    
    return chapter
  }

  public async destroy ({ params }: HttpContextContract) {
    const chapter = await Chapter.query().where('id', params.id).firstOrFail()
    await chapter.delete()

    return { message: 'Chapter has been deleted' }
  }
}
