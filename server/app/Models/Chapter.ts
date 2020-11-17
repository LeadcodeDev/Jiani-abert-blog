import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Part from 'App/Models/Part'

export default class Chapter extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public title: string

	@column()
	public content: string

	@column()
	public partId: number

	@column.dateTime()
	public publishedAt: DateTime

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@belongsTo(() => Part)
	public part: BelongsTo<typeof Part>
}
