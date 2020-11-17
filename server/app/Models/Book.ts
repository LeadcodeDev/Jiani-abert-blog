import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Part from 'App/Models/Part'
import Picture from 'App/Models/Picture'

export default class Book extends BaseModel {
	@column({ isPrimary: true })
	public id: number

	@column()
	public label: string

	@column()
	public description: string

	@column()
	public visible: boolean

	@column()
	public reduced: boolean

	@column()
	public pictureId: number

	@column.dateTime({ autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime

	@hasMany(() => Part)
	public parts: HasMany<typeof Part>

	@belongsTo(() => Picture)
	public picture: BelongsTo<typeof Picture>
}
