import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Picture from 'App/Models/Picture'

export default class Poème extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public title: string

	@column()
	public content: string

	@column()
	public pictureId: number

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@belongsTo(() => Picture)
	public picture: BelongsTo<typeof Picture>
}
